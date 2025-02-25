require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/contactRoute");

const app = express();

app.use(express.json());
app.use(cors());


app.use("/", contactRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));  // Serving static files from the 'client/build' folder
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))  // Make sure the path to index.html is correct
  );
}

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server listing to port 5000 only`));
