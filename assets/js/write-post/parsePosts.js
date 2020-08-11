export default function parsePost(data) {
  for (let i = 0; i < data.blocks.length; i++) {
    if (data.blocks[i].type == "image") {
      data.mainImg = data.blocks[i].data;
      data.blocks.splice(i, 1);
      break;
    }
  }
  for (let i = 0; i < data.blocks.length; i++) {
    if (data.blocks[i].type == "header") {
      data.header = data.blocks[i].data.text;
      data.blocks.splice(i, 1);
      break;
    }
  }

  for (let i = 0; i < data.blocks.length; i++) {
    if (data.blocks[i].type == "author") {
      data.author = data.blocks[i].data.text;
      data.blocks.splice(i, 1);
      break;
    }
  }
}
