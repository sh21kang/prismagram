"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    searchUser: async (_, args) => _prismaClient.prisma.users({
      where: {
        OR: [{
          username_contains: args.term
        }, {
          firstName_contains: args.term
        }, {
          lastName_contains: args.term
        }]
      }
    })
  }
};
exports.default = _default;