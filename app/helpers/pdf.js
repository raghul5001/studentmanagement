const fs = require('fs');
const PDFDocument = require('../utils/pdfkittable');
const doc = new PDFDocument();
const { pdfPath } = require('../config');

const generatePDF = async(list, fields) => {
    let sampleData = JSON.parse(JSON.stringify(list))
    const listData = sampleData.map(data => Object.values(data));
    doc.pipe(fs.createWriteStream(pdfPath));
    const table0 = {
        headers: fields,
        rows: listData
    };
    doc.table(table0, {
        prepareHeader: () => doc.font('Helvetica-Bold'),
        prepareRow: (row, i) => doc.font('Helvetica').fontSize(10)
    });
    doc.end();
};


module.exports = { generatePDF };