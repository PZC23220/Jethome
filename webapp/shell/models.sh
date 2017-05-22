rm -rf ../models/*
sequelize-auto -o "../models/" -d newsjet -h newsjet-test3.cluster-cjrqtvo4y0v6.ap-northeast-1.rds.amazonaws.com -u newsjet -x NewsJetTest1234 -c ../config/config.json
