"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../../utils");

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    requestSecret: async (_, args) => {
      const {
        email
      } = args;
      const loginSecret = (0, _utils.generateSecret)();

      try {
        await (0, _utils.sendSecretMail)(email, loginSecret);
        await _prismaClient.prisma.updateUser({
          data: {
            loginSecret
          },
          where: {
            email
          }
        });
        return true;
      } catch (_unused) {
        return false;
      }
    }
  }
};
exports.default = _default;