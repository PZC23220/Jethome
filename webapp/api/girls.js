var express = require('express');
var router = express.Router();
var models = require('../models');
var _ = require('lodash');

// 获取girls list
router.get('/api/girls/list', function(req, res){
    var data = [];
    var page = req.query.page || 1;
    var pageNum = req.query.pageNum || 10;
    models.girls_album.findAndCount({
        where:{active: 1},
        attributes: ['id', 'cid'],
        limit: Number(pageNum),
        offset: (pageNum * page) - pageNum,
        row: true
    }).then(function(result){
        console.log(result.count);
        return result;
    }).catch(function(err){
        res.send(err);
    }).then(function(result){
        var total = result.count;
        var data = result.rows;

        var albumidList = _.map(data, function(item, index){
            return item.id;
        });
        models.girls_single.findAll({
            where:{albumid: albumidList},
            attributes: ['id', 'cid', 'thumbnail', 'albumid'],
            row: true
        }).then(function(result2){
            var tempObj = {};
            _.map(result2, function(item, index){
                var keys = item.albumid;
                if(tempObj[keys] == undefined){
                    tempObj[keys] = new Array();
                    tempObj[keys].push(item);
                }else{
                    tempObj[keys].push(item);
                }
            });
            // transform
            data.forEach(function(element){
                var albumid = element.id;
                _.map(tempObj, function(values, keys){
                    if(keys == albumid){
                        element.setDataValue('img', values);
                    }
                });
            });
            res.send({total: total, data: data});
        })
    });
});

// girls category
router.get('/api/girls/category', function(req, res, next){
    models.girls_category.findAll({
        attributes: ['cid','name_cn']
    }).then(function(result){
        console.log(result);
        res.send(result);
    }).catch(function(err){
        res.send(err);
        return false;
    });
});

// 修改girls分类
router.post("/api/girls/category/edit", function(req, res, next){
    var data = req.body;
    models.girls_album.update(data, {
        where: {id: data.id},
        fields: ['cid'],
    }).then(function(result){
        console.log(result);
        if(result[0] === 1){
            res.send({success: true, code: 200, msg: '修改分类成功'});
        }
    }).catch(function(err){
        res.send(err);
    })
});

// girls delete
router.post('/api/girls/delete', function(req, res, next){
    var data = req.body;
    models.girls_album.update({active:0}, {
        where: {id: data.id},
        fields: ['active']
    }).then(function(result){
        console.log(result);
        if(result[0] === 1){
            res.send({success: true, code: 200, msg: '删除成功'});
        }else{
            res.send({success: false, code: 200, msg: '删除失败'});
        }
    }).catch(function(err){
        res.send(err);
    })
})


module.exports = router;
