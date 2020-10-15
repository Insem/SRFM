const https = require('https');
const fs = require('fs');
const logger = require("./logger/logger.js");

const CONSTS = require("./Consts.js");
const app = require("./app.js");
const credentials = {
  key: fs.readFileSync('server.key', 'utf8'),
  cert: fs.readFileSync('server.crt', 'utf8')
};
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(CONSTS.SERVER.PORT, CONSTS.SERVER.HOST, (err) => {
  if (err) {
    return logger.err('001', err);
  }
  logger.info(`server is listening on ${CONSTS.SERVER.PORT} with host ${CONSTS.SERVER.HOST}`)
});
