var express = require('express');
var router = express.Router();
var models = require('../models');

// 新增和编辑底部导航栏
router.post('/set_switch_appbottom_tab', function(req, res, next){
    var data = req.body;
    var id = data.id;
    if(id !== undefined){
        // 编辑
        models.switch_appbottom_tab.update(data, {where: {id: id}, validate: false}).then(function(result){
            console.log(result);
            res.send({'success': true})
        });
    }else{
        // 新增
        models.switch_appbottom_tab.create(data).then(function(result){
            console.log(result);
            res.send({'success': true})
        });
    }
});

// 获取热榜新闻列表
router.get('/news/hot', function(req, res, next){
    // res.send({"name": "libp"});
    models.news_top.findAll({
        include:[models.material_news],
        attributes: ['aid'],
        limit: 10,
        order: [['update_time', 'asc']],
    }).then(function(result){
        res.send(result);
    })
});

// 修改新闻的status， 新闻去重
router.get('/news/edit_status', function(req, res, next){
    console.log(req.query.aid);
    var aid = req.query.aid;
    if(!aid){
        res.send({success: false, data: null, code: 400, msg: '缺少新闻id'});
    }else{
        models.material_news.update({status: 0}, {where: {aid: aid}}).then(function(result){
            if(result[0] > 0){
                res.send({success: true, data: null, code: 200});
            }else{
                res.send({success: false, data: null, code: 200, msg: '找不到新闻id'})
            }
        })
    }
});

// 获取新闻当前分类信息
router.get('/news/category', function(req, res, next){
    models.news_category.findAll({
        attributes: ['cid', 'channel']
    }).then(function(result){
        res.send({success: true, data: result, code: 200});
    });
});

// 根据分类查询所有新闻列表
router.get('/news/category/search', function(req, res, next){
    var cid = req.query.cid;
    if(!cid){
        res.send({success: false, data: null, code: 400, msg: '缺少cid'});
    }else{
        models.material_news.findAll({
            limit: 100,
            where:{
                cid: cid
            },
            order:[
                ['created_time', 'DESC']
            ]
        }).then(function(result){
            res.send({success: true, data: result, code: 200});
        });
    }
});
// 修改新闻分类
router.post('/news/editcid', function(req, res, next){
    var data = req.body;
    console.log(data);
    if(!data || data.aid === undefined || data.cid === undefined){
        res.send({success: false, data: null, msg: '缺少必填参数', code: 400});
        return false;
    }
    models.material_news.update(data, {where: {aid: data.aid}}).then(function(result){
        console.log(result);
        res.send({success: true, data: null, code: 200, msg: '修改新闻分类成功'});
    }).catch(function(err){
        res.send({success: false, msg: err.message, data: null, code: 500});
        return false;
    })
});

module.exports = router;
