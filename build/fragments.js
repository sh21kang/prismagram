"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROOM_FRAGMENT = exports.FULL_POST_FRAGMENT = exports.MESSAGE_FRAGMENT = exports.FILE_FRAGMENT = exports.COMMENT_FRAGMENT = exports.USER_FRAGMENT = void 0;
const USER_FRAGMENT = `
    id
    username
    avatar
`;
exports.USER_FRAGMENT = USER_FRAGMENT;
const COMMENT_FRAGMENT = `
    id
    text
    user {
        ${USER_FRAGMENT}
    }
`;
exports.COMMENT_FRAGMENT = COMMENT_FRAGMENT;
const FILE_FRAGMENT = `
    id
    url
`;
exports.FILE_FRAGMENT = FILE_FRAGMENT;
const MESSAGE_FRAGMENT = `
    id
    text
    to {
        ${USER_FRAGMENT}
    }
    from {
        ${USER_FRAGMENT}
    }
`;
exports.MESSAGE_FRAGMENT = MESSAGE_FRAGMENT;
const FULL_POST_FRAGMENT = `
    fragment PostParts on Post{
        id
        location
        caption
        files {
            ${FILE_FRAGMENT}
        }
        comments {
            ${COMMENT_FRAGMENT}
        }
        user {
            ${USER_FRAGMENT}
        }
    }
`;
exports.FULL_POST_FRAGMENT = FULL_POST_FRAGMENT;
const ROOM_FRAGMENT = `
    fragment RoomParts on Room {
        id
        participants {
            ${USER_FRAGMENT}
        }
        messages { 
            ${MESSAGE_FRAGMENT}
        }
    }
`;
exports.ROOM_FRAGMENT = ROOM_FRAGMENT;