"use strict";

// Config
const dotenv = require("dotenv");

// @ts-ignore
dotenv.config({ silent: true });

const cfenv = require("cfenv");

// @ts-ignore
const appEnv = cfenv.getAppEnv();

const services = appEnv.getServices();

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

// TODO Configure Watson...

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

// TODO Make our app do things...

const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

app.listen(port, () => console.log("Server listening on", port));
