"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _utils = require("../../../utils");

var _default = {
  Mutation: {
    confirmSecret: async (_, args) => {
      const {
        email,
        secret
      } = args;
      const user = await _prismaClient.prisma.user({
        email
      });

      if (user.loginSecret === secret) {
        await _prismaClient.prisma.updateUser({
          where: {
            id: user.id
          },
          data: {
            loginSecret: ""
          }
        });
        return (0, _utils.generateToken)(user.id);
      } else {
        throw Error("Wrong email/secret combination");
      }
    }
  }
};
exports.default = _default;