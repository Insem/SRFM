const multer = require('multer')
const upload = multer({
  dest: '../static/img/posts/'
})
const load = {
  upload: upload.array('image', 1),
  callBack: function (req, res) {
    if (!req.files[0]) return res.send(errImg);
    const errImg = {
      "success": 0
    };
    const file = req.files[0];

    switch (file.mimetype) {
      case 'image/jpeg':
        break;
      case 'image/png':
        break;
      case 'image/gif':
        break;
      default:
        return res.send(JSON.stringify(errImg));
    }
    res.send(JSON.stringify({
      "success": 1,
      "file": {
        "url": file.path.substring(10),
      }
    }))

  }
}
module.exports = load;
