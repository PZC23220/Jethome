var http = require('http');
var url = require('url');
var process = require('child_process');

var MySQLUtil = require('./jetModules/MySQLUtil');
var PORT = 9000;

var mySQLUtil = new MySQLUtil();
var connection = mySQLUtil.getConnectionProd();
// var connection = mySQLUtil.getConnectionTest();
connection.connect();

var server = http.createServer(function(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    var params = url.parse(request.url, true);
    // 前端传来的信息
    var query = params.query;
    // console.log(query);
    var resText = [];
    response.writeHead(200, {
        'content-type': 'text/plain;charset=utf8'
            // 允许跨域请求数据CORS
            // "Access-Control-Allow-Origin": "*"
    });
    if (params.pathname == '/get_comments') {
        connection.query('SELECT aid, content, likes from post_greped where aid = ?', query.aid, function(err, rows, fields) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            console.log(rows);
            response.write(JSON.stringify(rows));
            response.end();
        });
        // connection.end();
    } else if (params.pathname == '/get_username') {
        connection.query("select * from user where id BETWEEN 1100 and 1170 OR id BETWEEN 2020 and 2068", function(err, rows, fields) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            // console.log('The solution is: ', rows);
            resText = rows;
            response.write(JSON.stringify(resText));
            response.end();
        });
    } else if (params.pathname == '/get_sourceLinks') {
        connection.query("SELECT url from post_greped_url where aid = ?", query.aid, function(err, rows, fields) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            response.write(JSON.stringify(rows));
            response.end();
        });
    } else if (params.pathname == '/get_postGreped') {
        var sql = "SELECT aid, count(1) FROM post_greped WHERE aid IN (" + query.aid + ") GROUP BY aid";
        connection.query(sql, function(err, rows, fields) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            response.write(JSON.stringify(rows));
            response.end();
        });
    } else if (params.pathname == '/del_comments') {
        var sql = "DELETE FROM post where id = " + query.id;
        connection.query(sql, function(err, result) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
            response.write(JSON.stringify(result));
            response.end();
        });
    } else if (params.pathname == '/people_push') {
        // console.log(query.pushtype,query.aid,query.type);
        var cmd = "cd /home/ec2-user/api/MobiScripts; java -jar build/libs/MobiScripts-1.0-SNAPSHOT-all.jar notification_surprise_news " + query.pushtype + " " + query.aid + " " + query.type;
        if(query.title) {
            cmd += " " + query.title;
        }
        if(query.body) {
            cmd += " " + query.body;
        }
        console.log(cmd);
        process.exec(cmd, function(error, stdout, stderr) {
            if (error) {
                console.log('exec error: ' + error);
            }

            response.write(JSON.stringify(stdout));
            response.end();
        });
    } else if (params.pathname == '/notification_baseball') {
        // console.log(query.pushtype,query.aid,query.type);
        var cmd = "cd /home/ec2-user/api/MobiScripts; java -jar build/libs/MobiScripts-1.0-SNAPSHOT-all.jar notification_base111 match" + query.pushContentType + " " + query.pushTargetId + " 0 true " + query.title;
        if(query.body) {
            cmd += " " + query.body;
        }
        console.log(cmd);
        process.exec(cmd, function(error, stdout, stderr) {
            if (error) {
                console.log('exec error: ' + error);
            }

            response.write(JSON.stringify(stdout));
            response.end();
        });
    } else if (params.pathname == '/add_push') {
        var sql = "INSERT INTO pushSetting(aid,type,createTime,isPush) VALUES(?,?,?,0)";
        var jsonData = "";
        request.on('data', function(chunk) {
            jsonData += chunk;
        });
        request.on('end', function() {
            var reqObj = JSON.parse(jsonData);
            var resObj = {
                aid: reqObj.aid,
                type: reqObj.type,
                time: reqObj.time
            };
            var arr = [resObj.aid, resObj.type, resObj.time];
            connection.query(sql, arr, function(err, result) {
                if (err) {
                    console.log(err, result);
                    return;
                }

                response.write(JSON.stringify(result));
                response.end();
            });
        });
    } else if (params.pathname == '/del_push') {
        var sql = "DELETE FROM pushSetting where aid = " + query.aid;
        connection.query(sql, function(err, result) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
            response.write(JSON.stringify(result));
            response.end();
        });
    } else if (params.pathname == '/sel_push') {
        var sql = "SELECT aid, type, isPush from pushSetting where aid IN (" + query.aid + ") GROUP BY aid";
        console.log(sql);
        connection.query(sql, function(err, rows, fields) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            response.write(JSON.stringify(rows));
            response.end();
        });
    } else if (params.pathname == '/push_log') {
        connection.query("SELECT * from pushLog", function(err, rows, fields) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            // console.log('The solution is: ', rows);
            resText = rows;
            response.write(JSON.stringify(resText));
            response.end();
        });
    } else if (params.pathname == '/push_log_news') {
        var sql = "SELECT * from pushLog where aid = " + query.aid;
        connection.query(sql, function(err, rows, fields) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            // console.log('The solution is: ', rows);
            resText = rows;
            response.write(JSON.stringify(resText));
            response.end();
        });
    } else if (params.pathname == '/get_newsupload') {
        var sql = "SELECT * from news_upload";
        connection.query(sql, function(err, rows, fields) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            // console.log('The solution is: ', rows);
            resText = rows;
            response.write(JSON.stringify(resText));
            response.end();
        });
    } else if (params.pathname == '/set_newsupload') {
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
            for(var i in resObj) {
                arr.push(resObj[i]);
            }
            console.log(arr);
            connection.query(sql, arr, function(err, result) {
                if (err) {
                    console.log(err, result);
                    return;
                }

                response.write(JSON.stringify(result));
                response.end();
            });
        });
    } else if (params.pathname == '/get_news_category') {
        var sql = "SELECT * from news_category";
        connection.query(sql, function(err, rows, fields) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            // console.log('The solution is: ', rows);
            resText = rows;
            response.write(JSON.stringify(resText));
            response.end();
        });
    } else if (params.pathname == '/set_news_category_weight') {
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
            for(var i in resObj) {
                arr.push(resObj[i]);
            }
            console.log(arr);
            connection.query(sql, arr, function(err, result) {
                if (err) {
                    console.log(err, result);
                    return;
                }

                response.write(JSON.stringify(result));
                response.end();
            });
        });
    } else if (params.pathname == '/set_news_category_status') {
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
            for(var i in resObj) {
                arr.push(resObj[i]);
            }
            console.log(arr);
            connection.query(sql, arr, function(err, result) {
                if (err) {
                    console.log(err, result);
                    return;
                }

                response.write(JSON.stringify(result));
                response.end();
            });
        });
    } else if (params.pathname == '/insert_news_category') {
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
            for(var i in resObj) {
                arr.push(resObj[i]);
            }
            console.log(arr);
            connection.query(sql, arr, function(err, result) {
                if (err) {
                    console.log(err, result);
                    return;
                }

                response.write(JSON.stringify(result));
                response.end();
            });
        });
    } else if (params.pathname == '/news_special_topic') {
        var sql = "SELECT * FROM news_special_topic";
        connection.query(sql, function(err, rows, fields) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            response.write(JSON.stringify(rows));
            response.end();
        });
    } else if (params.pathname == '/news_special_topic_active') {
        var sql = "UPDATE news_special_topic set active = "+ query.value +" WHERE id = " + query.id;
        connection.query(sql, function(err, rows, fields) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            response.write(JSON.stringify(rows));
            response.end();
        });
    } else if (params.pathname == '/set_news_special_topic') {
        // if(reqObj.id) {
        // } 
        var jsonData = "";
        request.on('data', function(chunk) {
            jsonData += chunk;
        });
        request.on('end', function() {
            var reqObj = JSON.parse(jsonData);
            console.log(reqObj);
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
            for(var i in resObj) {
                arr.push(resObj[i]);
            }
            // console.log(arr);
            connection.query(sql, arr, function(err, result) {
                if (err) {
                    console.log(err, result);
                    return;
                }

                response.write(JSON.stringify(result));
                response.end();
            });
        });
    }  else if (params.pathname == '/news_special_topic_info') {
        var sql = "SELECT * FROM news_special_topic_info WHERE topic_id = " + query.id + "order by news_time desc";
        connection.query(sql, function(err, rows, fields) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            response.write(JSON.stringify(rows));
            response.end();
        });
    } else if (params.pathname == '/news_special_topic_info_active') {
        var sql = "UPDATE news_special_topic_info set active = "+ query.value +" WHERE id = " + query.id;
        connection.query(sql, function(err, rows, fields) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            response.write(JSON.stringify(rows));
            response.end();
        });
    } else if (params.pathname == '/news_special_topic_info_top') {
        var sql = "UPDATE news_special_topic_info set stick_at_top = "+ query.value +" WHERE id = " + query.id;
        connection.query(sql, function(err, rows, fields) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            response.write(JSON.stringify(rows));
            response.end();
        });
    } else if (params.pathname == '/switch_appbottom_tab') {
        var sql = "SELECT * FROM switch_appbottom_tab";
        connection.query(sql, function(err, rows, fields) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            response.write(JSON.stringify(rows));
            response.end();
        });
    } else if (params.pathname == '/set_switch_appbottom_tab') {
        // if(reqObj.id) {
        // } 
        var jsonData = "";
        request.on('data', function(chunk) {
            jsonData += chunk;
        });
        request.on('end', function() {
            var reqObj = JSON.parse(jsonData);
            console.log(reqObj);
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
                badge_showtype: reqObj.badge_showtype
            };
            if (reqObj.id) {
                resObj.id = reqObj.id;
                var sql = "UPDATE switch_appbottom_tab SET btn_text = ?,position = ?,btn_text_argb = ?,btn_text_argb_hl = ?,btn_image2x = ?,btn_image2x_hl = ?,btn_image3x = ?,btn_image3x_hl = ?,btn_uri = ?,badge_argb = ?,badge_showtype = ? WHERE id = ?";
            } else {
                var sql = "INSERT INTO switch_appbottom_tab(btn_text,position,btn_text_argb,btn_text_argb_hl,btn_image2x,btn_image2x_hl,btn_image3x,btn_image3x_hl,btn_uri,badge_argb,badge_showtype) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
            }
            var arr = []
            for(var i in resObj) {
                arr.push(resObj[i]);
            }
            // console.log(arr);
            connection.query(sql, arr, function(err, result) {
                if (err) {
                    console.log(err, result);
                    return;
                }

                response.write(JSON.stringify(result));
                response.end();
            });
        });
    } else if (params.pathname == '/switch_appbottom_tab_active') {
        var sql = "UPDATE switch_appbottom_tab set active = "+ query.value +" WHERE id = " + query.id;
        connection.query(sql, function(err, rows, fields) {
            //处理你的结果
            if (err) {
                console.log(err);
                return;
            }
            response.write(JSON.stringify(rows));
            response.end();
        });
    };
}).listen(PORT, function() {
    console.log('服务器创建成功，请打开http://localhost:' + PORT);
});
