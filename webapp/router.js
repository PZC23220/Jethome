var express = require('express');
var app = express();
var child_process = require('child_process');
var MySQLUtil = require('./jetModules/MySQLUtil');
var mySQLUtil = new MySQLUtil();
var router = express.Router();


//设置跨域访问
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// 根据参数配置环境变量env和端口号
var environment = process.env.NODE_ENV || 'development';

// 数据库连接
if(environment === 'product'){
    var connection = mySQLUtil.getConnectionProd();
}else if(environment === 'development'){
    var connection = mySQLUtil.getConnectionTest();
}

// 执行数据库操作
function select(sql, request, response, arr) {
    try{
        connection.query(sql, arr, function(err, rows, fields) {
            var s = sql.split(" ");
            var action = s[0];
            var result = 'Unknown';
            try {
                //处理你的结果
                if (err) {
                    result = 'fail';
                    console.log('error msg:', err);
                    return;
                }
                // console.log(rows);
                result = 'success';
                response.send(rows);
                response.end();
            } catch (e) {
                result = 'fail';
            } finally {
                log(request, action, arr, result, sql);
            }
        });
    }catch(e){
        console.log('数据库catch', e);
    }
}

function log(request, action, parameters, result, extra) {
    try {
        if (action.toUpperCase() == 'SELECT') { return; }
        var time = new Date().getTime();
        // var role = request.connection.remoteAddress;
        var role =  request.ip;
        console.log("action:" + action + " parameters:" + parameters + " role:" + role + " result:" + result);
        var logSQL = 'insert into operation_log (action, parameters, role, result, extra) values (?, ?, ?, ?, ?)';
        var p = '';
        if (parameters) {
            p = parameters.toString();
        }
        connection.query(logSQL, [action, p, role, result, extra], function(err, rows, fields) {
            if (err) {
                console.log(err)
                console.log('添加操作记录失败')
                console.log("action:" + action + " parameters:" + p + " role:" + role + " result:" + result);
            }
        });
    } catch (ex) {
        console.log('添加操作记录失败')
        console.log("action:" + action + " parameters:" + p + " role:" + role + " result:" + result);
    }
}
// =======
// var connection = mySQLUtil.getConnectionTest();
// connection.connect();
// 执行数据库操作

// }
// function select(sql, response, arr) {
//     // console.log(sql);
//     // console.log(arr);
//     connection.query(sql, arr, function(err, rows, fields) {
//         //处理你的结果
//         if (err) {
//             logger.error('DB ERROR:', err);
//             return;
//         }
//         // console.log(rows);
//         response.send(rows);
//         response.end();
//     });
//     // connection.end();
//
// >>>>>>> master:webapp/server.js


// 推送新闻/视频
router.get('/people_push', function(request, response) {
    var cmd = "cd /home/ec2-user/api/MobiScripts; java -jar build/libs/MobiScripts-1.0-SNAPSHOT-all.jar notification_surprise_news " + request.query.pushtype + " " + request.query.aid + " " + request.query.type;
    if (request.query.title) {
        cmd += " " + request.query.title;
    }
    if (request.query.body) {
        cmd += " " + request.query.body;
    }
    console.log(cmd);
    child_process.exec(cmd, function(error, stdout, stderr) {
        var result = 'Unknown';
        if (error) {
            result = 'fail';
            console.log('exec error: ' + error);
        } else {
            result = 'success';
        }
        log(request, 'notification_surprise_news', request.query.pushtype + " " + request.query.aid + " " + request.query.type, result, cmd);

        response.send(stdout);
        response.end();
    });
});
// 推送棒球相关
router.get('/notification_baseball', function(request, response) {
    var cmd = "cd /home/ec2-user/api/MobiScripts; java -jar build/libs/MobiScripts-1.0-SNAPSHOT-all.jar notification_base111 match" + request.query.pushContentType + " " + request.query.pushTargetId + " 0 true " + request.query.title;
    if (request.query.body) {
        cmd += " " + request.query.body;
    }
    console.log(cmd);
    child_process.exec(cmd, function(error, stdout, stderr) {
        var result = 'Unknown';
        if (error) {
            result = 'fail';
            console.log('exec error: ' + error);
        } else {
            result = 'success';
        }
        log(request, 'notification_base111', request.query.pushContentType + " " + request.query.pushTargetId + " 0 true " + request.query.title, result, cmd);

        response.send(stdout);
        response.end();
    });
});
// 午间/晚间新闻添加推送
router.post('/add_push', function(request, response) {
    var sql = "INSERT INTO pushSetting(aid,type,createTime,isPush) VALUES(?,?,?,0)";
        var reqObj =request.body;
        var resObj = {
            aid: reqObj.aid,
            type: reqObj.type,
            time: reqObj.time
        };
        var arr = [resObj.aid, resObj.type, resObj.time];
        select(sql, request, response, arr);
});
// 午间/晚间新闻删除推送
router.get('/del_push', function(request, response) {
    var sql = "DELETE FROM pushSetting where aid = " + request.query.aid;
    select(sql, request, response);
});
// 查看午间/晚间新闻推送
router.get('/sel_push', function(request, response) {
    var sql = "SELECT aid, newstype, isPush from pushSetting where aid IN (" + request.query.aid + ") GROUP BY aid";
    select(sql, request, response);
});

// 查看推送日志
router.get('/push_log', function(request, response) {
    var sql = "SELECT * from pushLog order by id desc";
    select(sql, request, response);
});
// 搜索推送日志
router.get('/push_log_news', function(request, response) {
    if(request.query.aid) {
        var sql = "SELECT * from pushLog where aid = " + request.query.aid + " order by id desc";
    } else if (request.query.pushType) {
        var sql = "SELECT * from pushLog where pushType = " + request.query.pushType + " order by id desc";
    } else {
        var sql = "SELECT * from pushLog order by id desc";
    }
    
    select(sql, request, response);
});
// 闪屏配置获取
router.get('/get_newsupload', function(request, response) {
    var sql = "SELECT * from news_upload";
    select(sql, request, response);
});
// 提交闪屏
router.post('/set_newsupload', function(request, response) {
    var sql = "INSERT INTO news_upload(id,title,publish_time,content,create_time,category_id,site,source,status,url,image1,image2,image3) VALUES(?,?,?,?,?,?,?,?,1,?,?,?,?)";
    var jsonData = "";
    request.on('data', function(chunk) {
        jsonData += chunk;
    });
    request.on('end', function() {
        var reqObj = JSON.parse(jsonData);
        var resObj = {
            id: reqObj.id,
            title: reqObj.title,
            publish_time: reqObj.publish_time,
            content: reqObj.content,
            create_time: reqObj.create_time,
            category_id: reqObj.category_id,
            site: reqObj.site,
            source: reqObj.source
        };

        if (reqObj.nurl) {
            resObj.url = reqObj.nurl;
        } else {
            resObj.url = '';
        }

        if (reqObj.image1) {
            resObj.image1 = reqObj.image1;
        } else {
            resObj.image1 = '';
        }
        if (reqObj.image2) {
            resObj.image2 = reqObj.image2;
        } else {
            resObj.image2 = '';
        }
        if (reqObj.image3) {
            resObj.image3 = reqObj.image3;
        } else {
            resObj.image3 = '';
        }
        var arr = []
        for (var i in resObj) {
            arr.push(resObj[i]);
        }
        select(sql, request, response, arr);
    });
});
// 获取栏目
router.get('/get_news_category', function(request, response) {
    var sql = "SELECT * from news_category";
    select(sql, request, response);
});
// 设置栏目权重
router.post('/set_news_category_weight', function(request, response) {
    var sql = "UPDATE news_category SET plus_weight = ?,minus_weight = ?,plus_init = ? WHERE cid = ?";
    var jsonData = "";
    request.on('data', function(chunk) {
        jsonData += chunk;
    });
    request.on('end', function() {
        var reqObj = JSON.parse(jsonData);
        var resObj = {
            plus_weight: reqObj.plus_weight,
            minus_weight: reqObj.minus_weight,
            plus_init: reqObj.plus_init,
            cid: reqObj.cid
        };
        var arr = []
        for (var i in resObj) {
            arr.push(resObj[i]);
        }
        select(sql, request, response, arr);
    });
});
// 设置栏目位置
router.post('/set_news_category_status', function(request, response) {
    var sql = "UPDATE news_category SET pos = ?,status = ? WHERE cid = ?";
    var jsonData = "";
    request.on('data', function(chunk) {
        jsonData += chunk;
    });
    request.on('end', function() {
        var reqObj = JSON.parse(jsonData);
        var resObj = {
            pos: reqObj.pos,
            status: reqObj.status,
            cid: reqObj.cid
        };
        var arr = []
        for (var i in resObj) {
            arr.push(resObj[i]);
        }
        select(sql, request, response, arr);
    });
});
// 新增栏目
router.post('/insert_news_category', function(request, response) {
    var sql = "INSERT INTO news_category(cid,channel,pos,status,fixed,icon,plus_weight,minus_weight,plus_init) VALUES(?,?,?,?,0,?,?,?,?)";
    var jsonData = "";
    request.on('data', function(chunk) {
        jsonData += chunk;
    });
    request.on('end', function() {
        var reqObj = JSON.parse(jsonData);
        var resObj = {
            cid: reqObj.cid,
            channel: reqObj.channel,
            pos: reqObj.pos,
            status: reqObj.status,
            icon: reqObj.icon,
            plus_weight: reqObj.plus_weight,
            minus_weight: reqObj.minus_weight,
            plus_init: reqObj.plus_init
        };
        var arr = []
        for (var i in resObj) {
            arr.push(resObj[i]);
        }
        select(sql, request, response, arr);
    });
});
// 专题
router.get('/news_special_topic', function(request, response) {
    var sql = "SELECT * FROM news_special_topic";
    select(sql, request, response);
});
router.get('/news_special_topic_active', function(request, response) {
    var sql = "UPDATE news_special_topic set active = " + request.query.value + " WHERE id = " + request.query.id;
    select(sql, request, response);
});
router.post('/set_news_special_topic', function(request, response) {
    var sql = "INSERT INTO news_category(cid,channel,pos,status,fixed,icon,plus_weight,minus_weight,plus_init) VALUES(?,?,?,?,0,?,?,?,?)";
    var reqObj = request.body;
        var resObj = {
            title: reqObj.title,
            cid: reqObj.cid,
            topic_time: reqObj.topic_time,
            bg_img: reqObj.bg_img,
            pos: reqObj.pos,
            keyword_inclusion: reqObj.keyword_inclusion,
            keyword_exclusion: reqObj.keyword_exclusion,
            detail_desc: reqObj.detail_desc,
            is_toplist: reqObj.is_toplist,
            topic_cid: reqObj.topic_cid
        };
        if (reqObj.id) {
            resObj.id = reqObj.id;
            var sql = "UPDATE news_special_topic SET title = ?,cid = ?,topic_time = ?,bg_img = ?,pos = ?,keyword_inclusion = ?,keyword_exclusion = ?,detail_desc = ?,is_toplist = ?,topic_cid = ? WHERE id = ?";
        } else {
            var sql = "INSERT INTO news_special_topic(title,cid,topic_time,bg_img,pos,keyword_inclusion,keyword_exclusion,detail_desc,is_toplist,topic_cid) VALUES(?,?,?,?,?,?,?,?,?,?)";
        }
        var arr = []
        for (var i in resObj) {
            arr.push(resObj[i]);
        }
        select(sql, request, response, arr);
    // });
});
// 专题新闻
router.get('/news_special_topic_info', function(request, response) {
    var sql = "SELECT * FROM news_special_topic_info WHERE topic_id = " + request.query.id + " order by news_time desc";
    select(sql, request, response);
});
router.get('/news_special_topic_info_active', function(request, response) {
    var sql = "UPDATE news_special_topic_info set active = " + request.query.value + " WHERE id = " + request.query.id;
    select(sql, request, response);
});
router.get('/news_special_topic_info_top', function(request, response) {
    var sql = "UPDATE news_special_topic_info set stick_at_top = " + request.query.value + " WHERE id = " + request.query.id;
    select(sql, request, response);
});
// tab配置
router.get('/switch_appbottom_tab', function(request, response) {
    var sql = "SELECT * FROM switch_appbottom_tab";
    select(sql, request, response);
});
router.post('/set_switch_appbottom_tab', function(request, response) {
    var sql = "INSERT INTO news_category(cid,channel,pos,status,fixed,icon,plus_weight,minus_weight,plus_init,app_version) VALUES(?,?,?,?,0,?,?,?,?,?,?)";
    var jsonData = "";

    request.on('data', function(chunk) {
        jsonData += chunk;
    });
    request.on('end', function() {
        var reqObj = JSON.parse(jsonData);
        var resObj = {
            btn_text: reqObj.btn_text,
            position: reqObj.position,
            btn_text_argb: reqObj.btn_text_argb,
            btn_text_argb_hl: reqObj.btn_text_argb_hl,
            btn_image2x: reqObj.btn_image2x,
            btn_image2x_hl: reqObj.btn_image2x_hl,
            btn_image3x: reqObj.btn_image3x,
            btn_image3x_hl: reqObj.btn_image3x_hl,
            btn_uri: reqObj.btn_uri,
            badge_argb: reqObj.badge_argb,
            badge_showtype: reqObj.badge_showtype,
            app_version: reqObj.app_version
        };
        if (reqObj.id) {
            resObj.id = reqObj.id;
            var sql = "UPDATE switch_appbottom_tab SET btn_text = ?,position = ?,btn_text_argb = ?,btn_text_argb_hl = ?,btn_image2x = ?,btn_image2x_hl = ?,btn_image3x = ?,btn_image3x_hl = ?,btn_uri = ?,badge_argb = ?,badge_showtype = ? WHERE id = ?";
        } else {
            var sql = "INSERT INTO switch_appbottom_tab(btn_text,position,btn_text_argb,btn_text_argb_hl,btn_image2x,btn_image2x_hl,btn_image3x,btn_image3x_hl,btn_uri,badge_argb,badge_showtype,app_version) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
        }
        var arr = []
        for (var i in resObj) {
            arr.push(resObj[i]);
        }
        console.log('插入数据');
        console.log(arr);
        select(sql, request, response, arr);
    });
});
router.get('/switch_appbottom_tab_active', function(request, response) {
    var sql = "UPDATE switch_appbottom_tab set active = "+ request.query.value +" WHERE id = " + request.query.id;
    select(sql, request, response);
});
// 获取已有评论
router.get('/get_comments', function(request, response) {
    var sql = "SELECT aid, content, likes from post_greped where aid = ?";
    var arr = request.query.aid;
    select(sql, request, response, arr);
});
// 获取机器人账户
router.get('/get_username', function(request, response) {
    var sql = "select * from user where id BETWEEN 1100 and 1170 OR id BETWEEN 2020 and 2068";
    select(sql, request, response);
});
// 获取源评论链接
router.get('/get_sourceLinks', function(request, response) {
    var sql = "SELECT url from post_greped_url where aid = ?";
    var arr = request.query.aid;
    select(sql, request, response, arr);
});
// 获取扒取评论
router.get('/get_postGreped', function(request, response) {
    var sql = "SELECT aid, count(1) FROM post_greped WHERE aid IN (" + request.query.aid + ") GROUP BY aid";
    select(sql, request, response);
});
// 删除评论
router.get('/del_comments', function(request, response) {
    var sql = "DELETE FROM post where id = " + request.query.id;
    select(sql, request, response);
});

// 筛选GIF图
router.get('/update_gif', function(request, response) {
    var sql = "UPDATE material_gif set status = "+ request.query.status +" WHERE aid = " + request.query.aid;
    select(sql, request, response);
});
router.get('/select_gif', function(request, response) {
    if(request.query.status && request.query.status != '') {
        var sql = "select aid, url, status from material_gif where status = "+ request.query.status +" order by aid desc limit "+ request.query.start +", 50";
    }else {
        var sql = "select aid, url, status from material_gif order by aid desc limit "+ request.query.start+ ", 50";
    }
    console.log(sql)
    select(sql, request, response);
});

// 获取视频
router.get('/select_video', function(request, response) {
    if(request.query.aid && request.query.aid != '') {
        var sql = "select * from material_video where id = "+ request.query.aid;
    }else {
        var sql = "select * from material_video order by id desc limit "+ request.query.start+ ", "+ request.query.rows;
    }
    console.log(sql)
    select(sql, request, response);
});

// 设置/更新视频
router.get('/del_splash', function(request, response) {
    var sql = "DELETE FROM switch_activity_splash where id = " + request.query.id;
    select(sql, request, response);
});
module.exports = router;
