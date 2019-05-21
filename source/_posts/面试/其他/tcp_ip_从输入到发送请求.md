---
title: tcp ip
---

发送消息

```
            hello world
应用层       hello world
  ↓
传输层      tcp + hello world
  ↓
IP层        IP + tcp  + hello world
  ↓
链路层    帧头 + IP + tcp  + hello world + 帧尾
```

