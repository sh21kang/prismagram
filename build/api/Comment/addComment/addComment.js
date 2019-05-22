"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _middlewares = require("../../../middlewares");

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    addComment: async (_, args, {
      request
    }) => {
      (0, _middlewares.isAuthenticated)(request);
      const {
        text,
        postId
      } = args;
      const {
        user
      } = request;
      const comment = await _prismaClient.prisma.createComment({
        user: {
          connect: {
            id: user.id
          }
        },
        post: {
          connect: {
            id: postId
          }
        },
        text
      });
      return comment;
    }
  }
};
exports.default = _default;