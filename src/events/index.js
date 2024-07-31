/** socket.io events */

export default {
  Auth: "auth:token",
  WaitingForAdmin: "waiting:for:admin",
  // admin
  AdminJoin: "admin:join",
  AdminLeave: "admin:leave",
  AdminOnline: "admin:online",
  AdminOffline: "admin:offline",
  AdminCachedMessage: "admin:cached:message",
  // user
  Users: "user:list",
  ActiveUsers: "user:online:list",
  UserJoin: "user:joined",
  UserLeave: "user:leave",
  UserCachedMessage: "user:cached:message",
  // message
  AdminMessage: "message:from:admin",
  UserMessage: "message:from:user",
  ServerMessage: "message:from:server",
  MessageIn: "message:to:server",
  MessageOut: "message:to:client",
  MessageCached: "message:cached",
  // room
  RoomId: "room:id",
  JoinRoom: "room:join",
};
