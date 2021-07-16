const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();

app.use(cors());
app.use(express.json());

const users = [
  {
    id: "2",
    username: "sandun",
    password: "sandun123",
    isAdmin: false,
    print: [
      {
        stockCode: 1234567,
        description: "Description",
        pattern: "Pattern H/L",
        binCode: "AA01A",
        groupName: "VREDESTEIN OH",
        plyinfo: "30PR",
        loadindex: "108/112(A8)",
        pickConfig: 24,
        palletConfig: "A2X6(+2)",
        barCode:
          "https://jet-marking.com/wp-content/uploads/2017/04/pasted-image-0-1.png",
      },
    ],
  },
];

let refreshTokens = [];

app.post("/api/refresh", (req, res) => {
  const refreshToken = req.body.token;

  if (!refreshToken) return res.status(401).json("yor are not");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("refresh token is not valid");
  }
  jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
    err && console.log(err);

    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefershToken(user);

    refreshTokens.push(newRefreshToken);

    res
      .status(200)
      .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  });
});

const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, isAdmin: user.isAdmin, print: user.print },
    "mySecretKey",
    { expiresIn: "5m" }
  );
};

const generateRefershToken = (user) => {
  return jwt.sign(
    { id: user.id, isAdmin: user.isAdmin, print: user.print },
    "myRefreshSecretKey",
    { expiresIn: "5m" }
  );
};

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  //console.log('login');
  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  if (user) {
    //res.json(user)

    const accessToken = generateAccessToken(user);

    const refreshToken = generateRefershToken(user);

    refreshTokens.push(refreshToken);

    res.json({
      username: user.username,
      print: user.print,
      isAdmin: user.isAdmin,
      accessToken,
      refreshToken,
    });
  } else {
    res.status(400).json("no user");
  }
});

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  //console.log(authHeader);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    //console.log(token);
    jwt.verify(token, "mySecretKey", (err, data) => {
     // console.log(data);
      if (err) {
        return res.status(403).json("TOKEN IS NOT VALID");
      }
      req.user = data;
      next();
    });
  } else {
    res.status(401).json("not authanticate");
  }
};

app.post("/api/detail", verify, (req, res) => {
  res.json({ msg: "ok", data: req.user });
});

app.post("/api/logout", verify, (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((tok) => tok !== refreshToken);
  res.status(200).json("yoy logged out sucessfully");
});

app.listen(5000, () => {
  console.log("start 5000");
});
