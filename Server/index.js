const express = require('express');
const app = express();


// when the localhost is initialised, then this line will be displayed as we are not entering 
// any link to it.
app.get('/', (req, res) => {
    res.send("Welcome to the back end, here all the database queries will be handled.");
})


// to run and to check on if this listen is working or not, you need
// go on chrome and write localhost:3001, it will start working
app.listen(3001, () => {
    console.log('running on port 3001');
})                // as the app is running on local host