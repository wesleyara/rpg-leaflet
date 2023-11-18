/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const { writeFileSync } = require("fs");

const supply_depot = require("./public/map-json/supply_depot.json");

const readJSONArray = obj => {
  const area = obj.area;

  const result = area.map(element => {
    const [x, y] = element;

    const tempArray = [x + 97, y - 160];

    return tempArray;
  });

  const tempObj = {
    ...obj,
    area: result,
  };

  return tempObj;
};

(() => {
  const publicPath = "./public/map-json/";
  const file = "supply_depot.json";

  const response = readJSONArray(supply_depot);

  writeFileSync(publicPath + file, JSON.stringify(response));
})();
