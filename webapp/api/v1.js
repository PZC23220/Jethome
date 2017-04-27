var express = require('express');
var router = express.Router();
var models = require('../models');

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


module.exports = router;
