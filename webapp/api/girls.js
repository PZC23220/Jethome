var express = require('express');
var router = express.Router();
var models = require('../models');
var _ = require('lodash');

router.get('/api/girls/list', function(req, res){
    var data = [];
    models.girls_album.findAll({
        where:{},
        attributes: ['id', 'cid'],
        limit: 10,
        row: true
    }).then(function(result){
        return result;
        // console.log('test');
        // console.log(result);
        // console.log(result.get());
        // res.send(result);
    }).catch(function(err){
        res.send(err);
    }).then(function(result){
        var data = result;
        // return false;
        // console.log(result);
        // console.error(result);
        // data = result.toJSON();
        var albumidList = _.map(result, function(item, index){
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
            res.send(data);
        })
    });
});

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


module.exports = router;
