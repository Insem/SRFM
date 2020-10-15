   const mongoose = require("mongoose");
   const CONSTS = require("../Consts.js");
   const logger = require("../logger/logger.js");

   mongoose.connection.on('disconnected', function () {
     logger.warning('Db disconnected', CONSTS.DB.CONNECT);
   });
   mongoose.connection.on('error', function (e) {
     logger.err('003', e);
     process.exit(0);
   });
   class DB {
     init() {
       mongoose.connect(CONSTS.DB.CONNECT, {
           user: CONSTS.DB.AUTH.USER,
           pass: CONSTS.DB.AUTH.PASS,
           useNewUrlParser: true,
           useUnifiedTopology: true
         })
         .catch((e) => {
           logger.info('Db consts', CONSTS.DB.CONNECT);
           logger.err('002', e);
           console.log('App', app)
           process.exit(0);
           reject(e);
         });
       console.log('DB connection OK');
     }
   }

   module.exports = new DB();
