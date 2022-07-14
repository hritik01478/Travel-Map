const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const pinRoute = require("./routes/pins.js");
const userRoute = require("./routes/users.js");


dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB connected!"))
    .catch(err => console.log(err));

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);


app.listen(8888, () => {
    console.log("backend is running");
})