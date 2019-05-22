"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

const DELETE = "DELETE";
const EDIT = "EDIT";
var _default = {
  Mutation: {
    editPost: async (_, args, {
      request,
      isAuthenticated
    }) => {
      isAuthenticated(request);
      const {
        id,
        caption,
        location,
        action
      } = args;
      const {
        user
      } = request;
      const post = await _prismaClient.prisma.$exists.post({
        id,
        user: {
          id: user.id
        }
      });

      if (post) {
        if (action === EDIT) {
          return _prismaClient.prisma.updatePost({
            data: {
              caption,
              location
            },
            where: {
              id
            }
          });
        } else if (action === DELETE) {
          return _prismaClient.prisma.deletePost({
            id
          });
        }
      } else {
        throw Error("You can't do that");
      }
    }
  }
};
exports.default = _default;