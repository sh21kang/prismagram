"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = exports.sendSecretMail = exports.generateSecret = void 0;

var _words = require("./words");

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _nodemailerSendgridTransport = _interopRequireDefault(require("nodemailer-sendgrid-transport"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * _words.adjectives.length);
  return `${_words.adjectives[randomNumber]} ${_words.nouns[randomNumber]}`;
};

exports.generateSecret = generateSecret;

const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENGRID_PASSWORD
    }
  };

  const client = _nodemailer.default.createTransport((0, _nodemailerSendgridTransport.default)(options));

  return client.sendMail(email);
};

const sendSecretMail = (adress, secret) => {
  const email = {
    from: "nico@prismagram.com",
    to: adress,
    subject: "🔒Login Secret for Prismagram🔒",
    html: `Hello! Your login secret is <strong>${secret}</strong><br/>Copy paste on the app/website to log in`
  };
  return sendMail(email);
};

exports.sendSecretMail = sendSecretMail;

const generateToken = id => _jsonwebtoken.default.sign({
  id
}, process.env.JWT_SECRET);

exports.generateToken = generateToken;