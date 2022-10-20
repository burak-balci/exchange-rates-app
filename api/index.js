const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const parseString = require("xml2js").parseString;

app.use(express.json());
app.use(cors());

const users = [
  {
    id: "1",
    username: "burak",
    password: "123456burak",
  },
  {
    id: "2",
    username: "ahmet",
    password: "123456ahmet",
  },
];

app.get("/api/exchangerates", async function (req, res) {

  try {
    await axios
      .get("https://www.tcmb.gov.tr/kurlar/today.xml", {
        "Content-Type": "application/xml; charset=utf-8",
      })
      .then((response) => {

        parseString(response.data, function (err, result) {
          res.json(result);
        });
      });
  } catch (error) {
    res.json(error);
  }
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });
  if (user) {

    const token = jwt.sign({ id: user.id }, "mySecretKey");
    res.json({
      username: user.username,
      token,
    });
  } else {
    res.status(400).json("Username or password incorrect");
  }
});

app.listen(process.env.PORT || 3001, () =>
  console.log("Backend server is running")
);
