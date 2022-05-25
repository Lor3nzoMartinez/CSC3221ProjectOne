const fs = require("fs");

async function ReadData() {
  try {
    fs.readFile("./listdata.json");
  } catch (error) {}
}

async function WriteData(dataOut) {
  try {
  } catch (error) {}
}

exports.ReadData = ReadData;
exports.WriteData = WriteData;
