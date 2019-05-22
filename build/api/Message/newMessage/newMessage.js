"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Subscription: {
    newMessage: {
      subscribe: (_, args) => {
        const {
          roomId
        } = args;
        return _prismaClient.prisma.$subscribe.message({
          AND: [{
            mutation_in: "CREATED"
          }, {
            node: {
              room: {
                id: roomId
              }
            }
          }]
        }).node();
      },
      resolve: payload => payload
    }
  }
};
exports.default = _default;