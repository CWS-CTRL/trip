const getAssetURL = (data) => {
  return new URL(`../assets/img/${data}`, import.meta.url).href;
};

export { getAssetURL };
