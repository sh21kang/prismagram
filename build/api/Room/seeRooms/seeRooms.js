"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _fragments = require("../../../fragments");

var _default = {
  Query: {
    seeRooms: (_, __, {
      request,
      isAuthenticated
    }) => {
      isAuthenticated(request);
      const {
        user
      } = request;
      return _prismaClient.prisma.rooms({
        where: {
          participants_some: {
            id: user.id
          }
        }
      }).$fragment(_fragments.ROOM_FRAGMENT);
    }
  }
};
exports.default = _default;