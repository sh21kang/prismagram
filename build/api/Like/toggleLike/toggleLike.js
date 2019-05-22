"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _middlewares = require("../../../middlewares");

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    toggleLike: async (_, args, {
      request
    }) => {
      (0, _middlewares.isAuthenticated)(request);
      const {
        postId
      } = args;
      const {
        user
      } = request;
      const filterOptions = {
        AND: [{
          user: {
            id: user.id
          }
        }, {
          post: {
            id: postId
          }
        }]
      };

      try {
        const existingLike = await _prismaClient.prisma.$exists.like(filterOptions);

        if (existingLike) {
          await _prismaClient.prisma.deleteManyLikes(filterOptions);
        } else {
          await _prismaClient.prisma.createLike({
            user: {
              connect: {
                id: user.id
              }
            },
            post: {
              connect: {
                id: postId
              }
            }
          });
        }

        return true;
      } catch (_unused) {
        return false;
      }
    }
  }
};
exports.default = _default;