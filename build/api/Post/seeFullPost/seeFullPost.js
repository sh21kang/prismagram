"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    seeFullPost: async (_, args) => {
      const {
        id
      } = args;
      return _prismaClient.prisma.post({
        id
      });
    }
  }
};
exports.default = _default;