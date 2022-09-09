const getTen = (num) => {
  num = Number(num);

  return num < 10 ? `0${num}` : `${num}`;
};

const getTourD = (start, end) => {
  const timestampD = 24 * 60 * 60 * 1000;
  const diffs = (end.getTime() - start.getTime()) / timestampD;

  return parseInt(diffs);
};

const getMD = (date, format = "MM月DD日") => {
  const month = getTen(date.getMonth() + 1);
  const day = getTen(date.getDate());

  const res = format
    .toUpperCase()
    .replace(/(MM|DD)/gi, (node, key) => ({ MM: month, DD: day }[key]));
  return res;
};

export { getMD, getTourD };
