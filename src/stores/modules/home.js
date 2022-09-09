import { defineStore } from "pinia";

import {
  ctsHomeHotSuggests,
  rtsHomeCategories,
  rtsHomeHouseList,
} from "@/services/modules/home";

const useHomeStore = defineStore("home", {
  state: () => ({
    homeHotSuggestsData: [],
    homeCategoriesData: [],
    homeHouseListData: [],
    currentHouseListPage: 1,
  }),
  actions: {
    async getHomeHotSuggestsData() {
      const res = await ctsHomeHotSuggests();
      this.homeHotSuggestsData = res.data;
    },
    async getHomeCategories() {
      const res = await rtsHomeCategories();
      this.homeCategoriesData = res.data;
    },
    async getHomeHouseListData() {
      const res = await rtsHomeHouseList(this.currentHouseListPage++);
      this.homeHouseListData = res.data;
    },
  },
});

export default useHomeStore;
