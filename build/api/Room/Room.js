"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  Room: {
    participants: ({
      id
    }) => _prismaClient.prisma.room({
      id
    }).participants(),
    messages: ({
      id
    }) => _prismaClient.prisma.room({
      id
    }).messages()
  }
};
exports.default = _default;