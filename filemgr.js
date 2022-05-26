const fs = require("fs");

async function ReadData() {
  try {
    let rawdata = fs.readFileSync("listdata.json");
    let data = JSON.parse(rawdata);
    return data;
  } catch (error) {
    throw error;
  }
}

async function WriteData(dataOut) {
  try {
    let data = JSON.stringify(dataOut);
    fs.writeFileSync("listdata.json", data);
  } catch (error) {
    throw err;
  }
}

exports.ReadData = ReadData;
exports.WriteData = WriteData;
