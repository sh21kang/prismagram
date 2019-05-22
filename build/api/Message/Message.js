"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  Message: {
    from: ({
      id
    }) => _prismaClient.prisma.message({
      id
    }).from(),
    to: ({
      id
    }) => _prismaClient.prisma.message({
      id
    }).to(),
    room: ({
      id
    }) => _prismaClient.prisma.message({
      id
    }).room()
  }
};
exports.default = _default;