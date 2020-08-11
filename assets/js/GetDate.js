export default function getDate(time) {
  const date = new Date(time);
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  if (month.length == 1) {
    month = "0" + month;
  }
  if (day.length == 1) {
    day = "0" + day;
  }
  return `${day}.${month}.${date.getFullYear()}`;
}
