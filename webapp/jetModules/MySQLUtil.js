var mysql = require('mysql');
// var testDatabase= {
//     host: 'newsjet-test3.cluster-cjrqtvo4y0v6.ap-northeast-1.rds.amazonaws.com',
//     user: 'newsjet',
//     password: 'NewsJetTest1234',
//     database: 'newsjet'
// };
// var onlineDatabase = {
//     host: 'newsjet-test3.cluster-cjrqtvo4y0v6.ap-northeast-1.rds.amazonaws.com',
//     user: 'newsjet',
//     password: 'NewsJetTest1234',
//     database: 'newsjet'
// }
// var environment = process.env.NODE_ENV || 'online';
// if(environment === 'online'){
//     config = onlineDatabase;
// }else if(environment === 'development'){
//     config = testDatabase;
// }
// var pool = mysql.createPool(config);
// module.exports = pool;



function MySQLUtil() {
    var connectionProd = mysql.createConnection({
        host: 'newsjet-1.cluster-cjrqtvo4y0v6.ap-northeast-1.rds.amazonaws.com',
        user: 'newsjet',
        password: 'WcG32wxQVhHK3iI4',
        database: 'newsjet',
        useConnectionPooling: true
    });
    var connectionTest = mysql.createConnection({
        host: 'newsjet-test3.cluster-cjrqtvo4y0v6.ap-northeast-1.rds.amazonaws.com',
        user: 'newsjet',
        password: 'NewsJetTest1234',
        database: 'newsjet',
        useConnectionPooling: true
    });
    this.getConnectionProd = function() {
        return connectionProd;
    }
    this.getConnectionTest = function() {
        return connectionTest;
    }
};

module.exports = MySQLUtil;
