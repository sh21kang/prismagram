"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    seeUser: async (_, args) => {
      const {
        username
      } = args;
      return _prismaClient.prisma.user({
        username
      });
    }
  }
};
exports.default = _default;