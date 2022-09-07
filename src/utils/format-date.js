const getTen = (num) => {
  num = Number(num);

  return num < 10 ? `0${num}` : `${num}`;
};

const getTourD = (start, end) => {
  const timestampD = 24 * 60 * 60 * 1000;
  const diffs = (end.getTime() - start.getTime()) / timestampD;

  return parseInt(diffs);
};

const getMD = (date) => {
  const month = getTen(date.getMonth() + 1);
  const day = getTen(date.getDate());

  return `${month}月${day}日`;
};

export { getMD, getTourD };
