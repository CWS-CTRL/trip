import rts from "../request";

const reqCityAllData = () => rts.get({ url: "/city/all" });

export default reqCityAllData;
