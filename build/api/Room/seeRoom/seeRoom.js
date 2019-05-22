"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    seeRoom: async (_, args, {
      request,
      isAuthenticated
    }) => {
      isAuthenticated(request);
      const {
        id
      } = args;
      const {
        user
      } = request;
      const canSee = await _prismaClient.prisma.$exists.room({
        participants_some: {
          id: user.id
        }
      });

      if (canSee) {
        return _prismaClient.prisma.room({
          id
        });
      } else {
        throw Error("You can't see this");
      }
    }
  }
};
exports.default = _default;