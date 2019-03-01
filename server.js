const express = require('express');
const app = express();

app.get('/students', (req, res) => {
    const students = [
        {id: 1, Name: "Vishal Soni", Country: "India"},
        {id: 2, Name: "Arpit Soni", Country: "Canada"},
        {id: 3, Name: "Kenil Soni Patel", Country: "UK"},
    ];
    res.json(students);
});

app.listen(5000, () => {
    console.log('Example app listening on port port!');
});
