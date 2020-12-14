const fs = require("fs");
let data = [];
const combinedResultsFileName = "./data/combined.json";
const filesToMerge = [
  "./data/overview_2020-12-01.json",
  "./data/overview_2020-12-02.json",
  "./data/overview_2020-12-03.json",
  "./data/overview_2020-12-04.json",
  "./data/overview_2020-12-05.json",
  "./data/overview_2020-12-06.json",
  "./data/overview_2020-12-07.json",
  "./data/overview_2020-12-08.json",
  "./data/overview_2020-12-09.json",
  "./data/overview_2020-12-10.json",
  "./data/overview_2020-12-11.json",
  "./data/overview_2020-12-12.json",
  "./data/overview_2020-12-13.json",
];

filesToMerge.forEach((fileName) => {
  data.push(...JSON.parse(fs.readFileSync(fileName)).body);
});

fs.writeFileSync(combinedResultsFileName, JSON.stringify([...data], null, 0));
