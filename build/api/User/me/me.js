"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    me: async (_, __, {
      request,
      isAuthenticated
    }) => {
      isAuthenticated(request);
      const {
        user
      } = request;
      return await _prismaClient.prisma.user({
        id: user.id
      });
    }
  }
};
exports.default = _default;