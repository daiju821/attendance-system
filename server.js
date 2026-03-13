const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Attendance server running");
});

app.post("/attendance", (req, res) => {

    const student = req.body;

    console.log("Attendance received:", student);

    res.send("Attendance saved");

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});