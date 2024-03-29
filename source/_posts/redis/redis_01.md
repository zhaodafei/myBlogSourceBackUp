---
title:  -Redis 设计与实现
date: 2023-08-04
categories: 
- Redis
tags:
- Redis
---
Redis（Remote Dictionary Server )，即远程字典服务

`redis` 设计与实现
`redis` 设计与实现
`redis` 设计与实现



`Redis`五种数据类型分别是string（字符串），hash（哈希），list（列表），set（集合）及sort set （有序集合）。

<!-- more -->

不同类型值对象的TYPE命令输出

|     对象     | 对象type属性的值 | TYPE命令的输出 |
| :----------: | :--------------: | :------------: |
|  字符串对象  |   REDIS_STRING   |    "string"    |
|   列表对象   |    REDIS_LIST    |     "list"     |
|   哈希对象   |    REDIS_HASH    |     "hash"     |
|   集合对象   |    REDIS_SET     |     "set"      |
| 有序集合对象 |    REDIS_ZSET    |     "zset"     |



### 内存溢出和内存泄露

如果程序执行的是**增长**字符串的操作，比如拼接操作(append，那么在执行这个操作之前，程序需要先通过内存重分配来扩展底层数组的空间大小一一如果忘了这一步就会产生**缓冲区溢出**。

如果序执行的是**缩短**字符的操作，比如截断操作(tim那在行这个操作之后，程序需要通过内存重分配来释放字符串不再使用的那部分空间一-如果忘了这一步就会产生**内存泄漏**。

### 空间预分配

1. 如果对 SDS 进行修改之后，SDS 的长度(也即是 len 属性的值)将小于1MB那么序分配和 len 属性同样大小的未使用空间，这时 SDS n 属性的值将和free 属性的值相同。举个例子，如果进行修改之后，SDS的 len 将变成13 字节，那么程序也会分配 13 字节的使用空间，SDS 的 buf 数组的实际度将变成13+13+1=27字节(额外的一字节用于保空字符)。
2. 如果对SDS 进行修之后，SDS 的长度将大于等于1MB，那么序会分配1MB的未使用空间。举个例子，如果进行修改之后，SDS的len 将变成30MB，那么程序会分配1MB的未使用空间，SDS的buf 数组的实际长度将为30MB +1MB +1byte



数据结构与对象: 简单动态字符串、链表、字典、跳跃表、整数集合、压缩列表、对象

### 字符串

`Redis` 只会使用C字符申作为字面量，在大多数情况下，Redis 使用 SDS(SimpleDynamic String，简单动态字符申作为字符串表示。比起 C 字符串，SDS 具有以下优点

1. 常数复杂度获取字符串长度。
2. 杜绝缓冲区溢出。
3. 减少修改字符串长度时所需的内存重分配次数
4. 二进制安全。
5. 兼容部分C字符函数。

### 链表

1. 链表被广泛用于实现 Redis 的各种功能，比如列表键、发布与订阅、慢查询、监视器等。
2. 每个链表节点由一个listNode 结构来表示，每个节点都有一个指向前置节点和后置节点的指针，所以 Redis 的表实现是双端链表。
3. 每个链表使用一个list 结来表示，这个构带有表头节点指针尾节点指针以及链表长度等信息。
4. 因为链表表头节点的前置节点和表尾节点的后置节点都指 NULL，所 Redis 的表实现是无环链表。
5. 通过为链表设置不同的类型特定函数，Redis 的链表可以用于保存各种不同类型的值

### 字典

1. 字典被广泛用于实现 Redis 的各种功能，其中包括数据库和哈希键。
2. Redis 中的字典使用哈希表作为底层实现，每个字典带有两个哈希表，一个平时使用，另一个仅在进行 rehash 时使用。
3. 当字典被用作数据库的底层实现，或者哈希键的底层实现时，Redis使用MurmurHash2算法来计算键的哈希值。
4. 哈希表使用**链地址**法来解决键冲突，被分配到同一个索引上的多个键值对会连接成一个单向链表。
5. 在对哈希表进行扩展或者收缩操作时，程序需要将现有哈希表包含的所有键值对rehash 到新哈希表里面，并且这个 rehash 过程并不是一次性地完成的，而是进式地完成的。

### 跳跃表

在大部分情况下，跳跃表的效率可以和平衡树相媲美，并且因为跳跃表的实现比平衡树要来得更为简单，所以很多时候可以考虑使用跳跃表来代替平衡树。

1. 跳跃表是有序集合的底层实现之一。
2. Redis的跳跃表实现由 zskiplist 和skiplistNode 两个结构组成，其中zskiplist用于保存跳跃表信息(比如表头节点、表尾节点长度)而zskipistnode 则用于表示跳跃表节点。
3. 每个跳跃表节点的层高都是1至32之间的随机数。
4. 在同一个跳跃表中，多个节点可以包含相同的分值，但每个节点的成员对象必须是唯一的。
5. 跳跃表中的节点按照分值大小进行排序，当分值相同时，节点按照成员对象的大小进行排序。

### 数据库

1. 当主服务器删除一个过期键之后，它会向所有从服务器发送一条 DEL 命令，显式地删除过期键。
2. 从服务器即使发现过期键也不会自作主张删除它，而是等待主节点发来DEL命令这种统一、中心化的过期键删除策略可以保证主从服务器数据的一致性。



### 常见命令

```bash
#查看所有keys
keys *
keys fei*
keys bar*
```





