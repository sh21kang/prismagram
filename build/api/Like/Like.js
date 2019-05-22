"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  Like: {
    post: ({
      id
    }) => _prismaClient.prisma.like({
      id
    }).post(),
    user: ({
      id
    }) => _prismaClient.prisma.like({
      id
    }).user()
  }
};
exports.default = _default;