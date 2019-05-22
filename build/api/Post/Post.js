"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  Post: {
    files: ({
      id
    }) => _prismaClient.prisma.post({
      id
    }).files(),
    comments: ({
      id
    }) => _prismaClient.prisma.post({
      id
    }).comments(),
    user: ({
      id
    }) => _prismaClient.prisma.post({
      id
    }).user(),
    likes: ({
      id
    }) => _prismaClient.prisma.post({
      id
    }).likes(),
    isLiked: (parent, _, {
      request
    }) => {
      const {
        user
      } = request;
      const {
        id
      } = parent;
      return _prismaClient.prisma.$exists.like({
        AND: [{
          user: {
            id: user.id
          }
        }, {
          post: {
            id
          }
        }]
      });
    },
    likeCount: parent => _prismaClient.prisma.likesConnection({
      where: {
        post: {
          id: parent.id
        }
      }
    }).aggregate().count(),
    commentCount: parent => _prismaClient.prisma.commentsConnection({
      where: {
        post: {
          id: parent.id
        }
      }
    }).aggregate().count()
  }
};
exports.default = _default;