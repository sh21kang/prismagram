"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  Comment: {
    user: ({
      id
    }) => _prismaClient.prisma.comment({
      id
    }).user(),
    post: ({
      id
    }) => _prismaClient.prisma.comment({
      id
    }).post()
  }
};
exports.default = _default;