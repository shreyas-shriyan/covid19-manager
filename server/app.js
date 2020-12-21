const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes")
const User = require("./models/user");
const employees = require("./employees");

dotenv.config();

const app = express();

app.use(cors());

mongoose.connect(
    process.env.MONGODB_URL,
    {
        useUnifiedTopology: "true",
        useNewUrlParser: "true",
        useCreateIndex: "true",
    },
    (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("connected to database")
        }
    }
)

const db = mongoose.connection;
db.once("open", async () => {
    if ((await User.countDocuments().exec()) > 0) {
        return;
    }
    User.insertMany(employees)
        .then(() => console.log("employees added Successfully"))
        .catch((err) => console.log(err));
});

app.use("/api", apiRoutes)

app.listen(5000, () => {
    console.log("server live on port 5000")
})
