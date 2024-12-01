const http = require('http');
const app = express();
const port = 1245;
const read_file_async = require('./3-read_file_async');


app.get('/', (req, res) => {
    res.send('Hello Holberton School');
});

app.get('/students', (req, res) =>  {
    res.send('This is the list of our students', )
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

module.exports = app;
