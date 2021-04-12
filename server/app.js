const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require('custom-env').env('staging')


mongoose.connect(`mongodb+srv://Books_DB:${process.env.DB_PASSWORD}@clusterbooks.ffvfr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
        console.log("Successfully connect to MongoDB.");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });
const app = express();
const PORT = 8000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("It works!");
});
require('./routes/book.js')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

