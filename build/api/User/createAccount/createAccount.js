"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    createAccount: async (_, args) => {
      const {
        username,
        email,
        firstName = "",
        lastName = "",
        bio = ""
      } = args;
      const exists = await _prismaClient.prisma.$exists.user({
        OR: [{
          username
        }, {
          email
        }]
      });

      if (exists) {
        throw Error("This username / email is already taken");
      }

      await _prismaClient.prisma.createUser({
        username,
        email,
        firstName,
        lastName,
        bio
      });
      return true;
    }
  }
};
exports.default = _default;