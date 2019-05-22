"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    searchPost: async (_, args) => _prismaClient.prisma.posts({
      where: {
        OR: [{
          location_starts_with: args.term
        }, {
          caption_starts_with: args.term
        }]
      }
    })
  }
};
exports.default = _default;