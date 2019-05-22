"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _middlewares = require("../../../middlewares");

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    follow: async (_, args, {
      request
    }) => {
      (0, _middlewares.isAuthenticated)(request);
      const {
        id
      } = args;
      const {
        user
      } = request;

      try {
        await _prismaClient.prisma.updateUser({
          where: {
            id: user.id
          },
          data: {
            following: {
              connect: {
                id
              }
            }
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