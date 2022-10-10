const express = require("express");
const app = express();
const helmet = require("helmet");
const cookieparser = require("cookie-parser");
var cors = require("cors");

const configs = require("./configs.json");

const PORT = configs.PORT;
const HOST = configs.HOST;

app.use(helmet());
app.use(cookieparser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

app.use(cors(corsOptions))

app.post("/api/login", (res, req) => {
    console.log('login')
    console.log(res.body.params)
    req.json({"method": "login"})
})

app.get("/api/logout", (res, req) => {
    console.log('logout')
    console.log(res.query)
    req.json({"method": "logout", "logout": true})
})

app.get("/", (res,req) => {
    req.json({name: "homepage"});
});

app.listen(PORT, HOST, () => {
    console.log(`Server listening on ${HOST}:${PORT}`);
});
