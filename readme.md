# 消息系统设计

> Description: 该规范，规定了前后端应该实现的消息名称，以及消息的载荷，需严格遵守，避免随意更改  
> Author: bin-r00t  
> Date:  
> Version: 0.1  


## 事件名称概览

- `E.Auth`: "auth:token"
- `E.WaitingForAdmin`: "waiting:for:admin"

  // admin

- `E.AdminJoin`: "admin:join"
- `E.AdminLeave`: "admin:leave"
- `E.AdminOnline`: "admin:online"
- `E.AdminOffline`: "admin:offline"
- `E.AdminCachedMessage`: "admin:cached:message"

  // user

- `E.Users`: "user:list"
- `E.ActiveUsers`: "user:online:list"
- `E.UserJoin`: "user:joined"
- `E.UserLeave`: "user:leave"
- `E.UserCachedMessage`: "user:cached:message"

  // message

- `E.AdminMessage`: "message:from:admin"
- `E.UserMessage`: "message:from:user"
- `E.ServerMessage`: "message:from:server"
- `E.MessageIn`: "message:to:server"
- `E.MessageOut`: "message:to:client"
- `E.MessageCached`: "message:cached"

  // room

- `E.RoomId`: "room:id"
- `E.JoinRoom`: "room:join"

## 事件详细

### 一、Admin 发送的事件

#### 1. AdminMessage

| 解释             | 目标       | 参数                           |
| ---------------- | ---------- | ------------------------------ |
| 管理员发来了消息 | 转发给用户 | `{ type, raw, timestamp, to }` |

**Options**
- type: `text` | `image` | `video-invite` | `audio-invite` 
- raw: `String` | `ArrayBuffer` | `Buffer` | `BytesArray`  
- timestamp: `Date` |`String`  
- to: `SocketId` | `String` 



**Behaviour**

当 type 为 text / image 时，直接将 raw 内容转发给对应的 to 用户

当 type 为 video-invite / audio-invite 时，返回给 Admin 和 User 同一个`meeting room` 的链接。当使用 UserMessage（见下）事件时，type 的值无法选择为 'video-invite' 和 'audio-invite'，【User无创建Meeting Room的权限】




### 二、User 发送的事件

#### 1. UserMessage

| 解释           | 目标         | 参数                                                         |
| -------------- | ------------ | ------------------------------------------------------------ |
| 用户发来了消息 | 转发给管理员 | 同 AdminMessage，但是 User 无 video-invite / audio-invite 权限 |

### 三、服务器端推送事件

> 服务器端根据一些行为，自动推送给指定(目标)用户的事件

#### 1. ActiveUsers

| 解释               | 目标  | 参数            |
| ------------------ | ----- | --------------- |
| 当前活跃的用户列表 | Admin | userList: Array |

#### 2. UserJoin

| 解释       | 目标  | 参数      |
| ---------- | ----- | --------- |
| 新用户加入 | Admin | User Info |

#### 3. UserLeave

| 解释     | 目标  | 参数      |
| -------- | ----- | --------- |
| 用户离开 | Admin | User Info |

#### 4. AdminJoin

| 解释         | 目标 | 参数 |
| ------------ | ---- | ---- |
| 管理员已上线 | User | 无   |

#### 5. AdminLeave

| 解释         | 目标 | 参数 |
| ------------ | ---- | ---- |
| 管理员已离开 | User | 无   |

### 三、通用消息事件

### 四、房间相关事件

### 五、其他待分类/待确认功能的事件
