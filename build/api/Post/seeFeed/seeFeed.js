"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    seeFeed: async (_, __, {
      request,
      isAuthenticated
    }) => {
      isAuthenticated(request);
      const {
        user
      } = request;
      const following = await _prismaClient.prisma.user({
        id: user.id
      }).following();
      const tmp = await _prismaClient.prisma.posts({
        where: {
          user: {
            id_in: [...following.map(user => user.id), user.id]
          }
        },
        orderBy: "createdAt_DESC"
      });
      console.log(tmp);
      return tmp;
    }
  }
};
exports.default = _default;