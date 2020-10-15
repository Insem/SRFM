const app = require("./app.js");
const CONSTS = require("./Consts.js");
const logger = require("./logger/logger.js");

app.listen(CONSTS.SERVER.PORT, CONSTS.SERVER.HOST, (err) => {
  if (err) {
    return logger.err('001', err);
  }
  logger.info(`server is listening on ${CONSTS.SERVER.PORT} with host ${CONSTS.SERVER.HOST}`)
});
