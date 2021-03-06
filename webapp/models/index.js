"use strict";
var fs = require('fs');
var path = require('path');
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var PORT = process.env.PORT || '9999';
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool:{
        max: 5,
        min: 0,
        idle: 100000
    },
    define:{
        timestamps: false
    }
});
var db = {};

fs.readdirSync(__dirname).filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    }).forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });
module.exports = db;
