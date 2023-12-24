const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const cors = require("cors");
const Connetcdb = require("./congif/db");
const userRoutes=require("./routes/userRoutes");
dotenv.config();

Connetcdb();
const app = express();

app.use(cors());
app.use(express.json())

app.get("/", (req, resp) => {
  resp.send("api running");
});

app.use("/api/user",userRoutes );


const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`server started on port ${PORT}`));
