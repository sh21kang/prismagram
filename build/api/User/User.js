"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  User: {
    posts: ({
      id
    }) => _prismaClient.prisma.user({
      id
    }).posts(),
    following: ({
      id
    }) => _prismaClient.prisma.user({
      id
    }).following(),
    followers: ({
      id
    }) => _prismaClient.prisma.user({
      id
    }).followers(),
    likes: ({
      id
    }) => _prismaClient.prisma.user({
      id
    }).likes(),
    comments: ({
      id
    }) => _prismaClient.prisma.user({
      id
    }).comments(),
    rooms: ({
      id
    }) => _prismaClient.prisma.user({
      id
    }).rooms(),
    postsCount: ({
      id
    }) => _prismaClient.prisma.postsConnection({
      where: {
        user: {
          id
        }
      }
    }).aggregate().count(),
    followingCount: ({
      id
    }) => _prismaClient.prisma.usersConnection({
      where: {
        followers_some: {
          id
        }
      }
    }).aggregate().count(),
    followersCount: ({
      id
    }) => _prismaClient.prisma.usersConnection({
      where: {
        following_none: {
          id
        }
      }
    }).aggregate().count(),
    fullName: parent => `${parent.firstName} ${parent.lastName}`,
    isFollowing: async (parent, _, {
      request
    }) => {
      const {
        user
      } = request;
      const {
        id: parentId
      } = parent;

      try {
        return _prismaClient.prisma.$exists.user({
          AND: [{
            id: user.id
          }, {
            following_some: {
              id: parentId
            }
          }]
        });
      } catch (_unused) {
        return false;
      }
    },
    isSelf: (parent, _, {
      request
    }) => {
      const {
        user
      } = request;
      const {
        id: parentId
      } = parent;
      return user.id === parentId;
    }
  }
};
exports.default = _default;