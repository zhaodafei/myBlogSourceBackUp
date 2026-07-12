---
title: win_系统信息
date: 2026-06-13
categories: 
- Win
tags:
- Win
---
`Windows` 系统信息
`Windows` 系统信息
`Windows` 系统信息

<!-- more -->

### 查看电脑内存条情况

#### 快速查看插槽占用情况

```wiki
#任务管理器

按 Ctrl + Shift + Esc打开任务管理器 → 性能​ → 左侧选内存，右下角看「已使用插槽：X / Y」：
```

#### cmd 命令查看

```wiki
按 Win + R输入 cmd回车，执行：

#命令
C:\Users\fei>wmic memphysical get MaxCapacity, MemoryDevices
MaxCapacity  MemoryDevices
33554432     2
## 说明
MemoryDevices​ = 物理插槽总数（如2或4）
MaxCapacity（单位KB）÷1024÷1024 = 主板最大支持内存(GB)


#继续命令
再执行以下命令看已插了几条：
C:\Users\fei>wmic MemoryChip get BankLabel, Capacity
BankLabel                 Capacity
Controller0ChannelADimm0  8589934592
Controller1ChannelADimm0  8589934592
## 说明
行数 = 已占用插槽数

```

![电脑内存条情况](/img/win/base/base_001.png "电脑内存条情况")















