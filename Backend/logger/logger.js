const fs = require("fs");
class Logger {
  write(data) {
    const date = new Date();
    fs.appendFile(`logs/app ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}_.log`, data, function () {});
  }
  err(info, data) {
    const str = data ? `\nERROR: ${info} ${data} ${new Date()}` : `\nERROR: ${info} ${new Date()}`;
    console.log(str);
    this.write(str);
  }

  info(info, data) {
    const str = data ? `\nINFO: ${info} ${data} ${new Date()}` : `\nINFO: ${info } ${new Date()}`;
    console.log(str);
    this.write(str);
  }
  warning(info, data) {
    const str = data ? `\nWARNING: ${info} ${data} ${new Date()}` : `\nWARNING: ${info } ${new Date()}`;
    console.log(str);
    this.write(str);
  }
}
module.exports = new Logger();
