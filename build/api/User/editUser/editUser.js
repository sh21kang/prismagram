"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    editUser: (_, args, {
      request,
      isAuthenticated
    }) => {
      isAuthenticated(request);
      const {
        username,
        email,
        firstName,
        lastName,
        bio,
        avatar
      } = args;
      const {
        user
      } = request;
      return _prismaClient.prisma.updateUser({
        where: {
          id: user.id
        },
        data: {
          username,
          email,
          firstName,
          lastName,
          bio,
          avatar
        }
      });
    }
  }
};
exports.default = _default;