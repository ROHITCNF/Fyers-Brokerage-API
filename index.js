const { response } = require("express");
const fyers = require("fyers-api-v2");

fyers.setAppId("LQV0FJ1VF8-100");
fyers.setRedirectUrl("https://youtube.com");

fyers.generateAuthCode();

