const { Parser } = require('json2csv');
const fs = require('fs');

const csvFile = async(path, list, fields = []) => {
    const json2csv = new Parser({ fields });
    let csv = json2csv.parse(list);
    await new Promise((resolve, reject) => {
        fs.writeFile(path, csv, function(err) {
            if (err) reject(err);
            resolve();
        })
    })
    return{}
}

module.exports = { csvFile };