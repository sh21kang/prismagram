"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    upload: async (_, args, {
      request,
      isAuthenticated
    }) => {
      isAuthenticated(request);
      const {
        user
      } = request;
      const {
        caption,
        files,
        location
      } = args;
      const post = await _prismaClient.prisma.createPost({
        caption,
        location,
        user: {
          connect: {
            id: user.id
          }
        }
      });
      files.forEach(async file => await _prismaClient.prisma.createFile({
        url: file,
        post: {
          connect: {
            id: post.id
          }
        }
      }));
      return post;
    }
  }
};
exports.default = _default;