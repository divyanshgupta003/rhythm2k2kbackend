const express = require("express");
const port = process.env.PORT;
const app = express();
const keys = require("./keys");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passportLocalStrategy = require("./config/passport-local-strategy");
const middle = require("./event-add");
const flash = require("connect-flash");
const flashMiddleware = require("./config/flash-middleware");

app.use(express.urlencoded());
app.use(expressLayouts);

//setting static file access
app.use(express.static("./assets"));

//extract styles and scripts from sub pages into layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use(
  session({
    secret: "rhythm",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 100
    },
    store: new MongoStore(
      {
        mongooseConnection: mongoose.connection,
        autoRemove: "disabled"
      },
      function(err) {
        if (err) {
          console.log(err || "connect mongo-store OK");
        }
      }
    )
  })
);

app.use(passport.initialize());
app.use(passport.session());

//setting flash messages
app.use(flash());
app.use(flashMiddleware.setFlash);

app.use(passport.setAuthenticatedUser);

//setting the view engine
app.set("view engine", "ejs");

// for the views files(ejs)
app.set("views", "./views");

//middleware for adding the event once
// app.use(middle.add);

//handling the routes
app.use("/", require("./routes"));

// const db = mongoose.connection;

mongoose.connect(
  keys.mongouri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log("database working");

    app.listen(port, function(err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Port running fine on " + port);
    });
  }
);

// mongoose.connect(keys.mongouri,(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log("connected");

// })
