const express = require('express');

const app = express();
const port = 1245;
const { readFile } = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().replace('\r', '').split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().replace('\r', '').split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = length - 1;
        output += `Number of students: ${l}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2]).then((output) => {
    const print = output;
    console.log(print);
    res.end(print);
  }).catch(() => {
    res.end('Cannot load the database');
  });
});
app.listen(port, () => {
});

module.exports = app;
