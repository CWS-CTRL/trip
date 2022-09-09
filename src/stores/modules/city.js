import { defineStore } from "pinia";

import reqCityAllData from "@/services/modules/city";

const useCityStore = defineStore("city", {
  state: () => ({
    cityAllData: {},
    cityData: { cityName: "深圳" },
  }),
  actions: {
    async getCityAllData() {
      const res = await reqCityAllData();
      this.cityAllData = res.data;
    },
  },
});

export default useCityStore;
