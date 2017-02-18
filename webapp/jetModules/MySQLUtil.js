var mysql = require('mysql');

function MySQLUtil() {
    var connectionProd = mysql.createConnection({
        host: 'newsjet-1.cluster-cjrqtvo4y0v6.ap-northeast-1.rds.amazonaws.com',
        user: 'newsjet',
        password: 'WcG32wxQVhHK3iI4',
        database: 'newsjet'
    });
    var connectionTest = mysql.createConnection({
        host: 'newsjet-test3.cluster-cjrqtvo4y0v6.ap-northeast-1.rds.amazonaws.com',
        user: 'newsjet',
        password: 'NewsJetTest1234',
        database: 'newsjet'
    });
    this.getConnectionProd = function() {
        return connectionProd;
    }
    this.getConnectionTest = function() {
        return connectionTest;
    }
};

module.exports = MySQLUtil;