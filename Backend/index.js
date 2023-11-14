
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3004;
const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todo");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

mongoose.connect('mongodb+srv://prasannakumarbhursu:1prasanna324@course-selling.wbpwzsr.mongodb.net/Todos');
