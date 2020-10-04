const ObjectsToCsv = require("objects-to-csv");
const getFacultyData = require("./getFacultyData");

const main = async () => {
  const data = await getFacultyData();
  const csv = new ObjectsToCsv(data);
  await csv.toDisk("./faculty.csv");
};

main();
