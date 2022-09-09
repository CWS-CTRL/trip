import rts from "../request";

export function ctsHomeHotSuggests() {
  return rts.get({
    url: "/home/hotSuggests",
  });
}

export function rtsHomeCategories() {
  return rts.get({
    url: "/home/categories",
  });
}

export function rtsHomeHouseList(currentPage) {
  return rts.get({
    url: "/home/houselist",
    params: {
      page: currentPage,
    },
  });
}
