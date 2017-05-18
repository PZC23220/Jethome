var express = require('express');
var router = express.Router();
var models = require('../models');

/**
 * [isEmptyObj 检查对象是否为空对象，只检测对象本身的属性，不检测从原型链上继承的属性]
 * @param  {[type]} obj [object]
 * @return Boolean      [布尔值]
 */
function isEmptyObj(obj){
    var obj = obj || {};
    for(var keys in obj){
        if(obj.hasOwnProperty(keys)){
            return false;
        }
    }
    return true;
}

// 博主提交授权
router.post('/api/authorization', function(req, res, next){
    var data = req.body || {};
    if(isEmptyObj(data)){
        res.send({msg: '缺少必要的参数'});
        return false;
    }
    models.authorization.upsert(data, {validate: true}).then(function(result){
        res.send(result);
    });
});


module.exports = router;
