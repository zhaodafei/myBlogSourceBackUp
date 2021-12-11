---
title: -ESX 基本使用
date: 2015-06-04
categories: 
- ESX
tags:
- ESX
---
简单说明:

`esxi` 中安装了多个`vm`,其中的某一台死机并且`esxi`控制台开始不能使用,这个时候就可以使用`esxi`的命令操作,重启其中某一台死机的机器,不影响其他机器。利用`ssh`登录`esxi`

<!-- more -->


### 使用 `esxcli`命令操作

```
esxcli vm process list   #获取`正在`运行vm的信息
esxcli vm process kill --type=hard --world-id=1190332   ##关闭指定world-id虚拟机
Data_fei_200
   World ID: 1190332
   Process ID: 0
   VMX Cartel ID: 35124
   UUID: 56 4d 0b 4f d5 61 33 03-5e 41 43 d8 43 78 fb d8
   Display Name: Data_fei_200
   Config File: /vmfs/volumes/57518d68-cbf78024-3a0a-14187743ea91/Data_fei_200/Data_fei_200.vmx

```

### 使用`vim-cmd` 操作

```
 vim-cmd vmsvc/getallvms         #获取`所有`vm的信息,格式如下图
 vim-cmd vmsvc/power.on 2        #打开虚拟机 (这里的2是下面的 Vimd)
 vim-cmd vmsvc/power.off 2       #关闭虚拟机 (这里的2是下面的 Vimd)
 vim-cmd vmsvc/power.reset 2     #重启虚拟机 (这里的2是下面的 Vimd)
 vim-cmd vmsvc/power.getstate 2  #查看虚拟机状态
```

| Vimd | Name         | File                          | Guest OS      | Version |
| ---- | ------------ | ----------------------------- | ------------- | ------- |
| 1    | Data_fei_200 | Data_fei_200/Data_fei_200.vmx | centos64Guest | vmx-08  |
| 2    | Data_fei_220 | Data_fei_200/Data_fei_220.vmx | rhel7_64Guest | vmx-10  |



### 常用命令

```
esxcli vm process list   #获取正在运行vm的信息
esxcli vm process kill --type=hard --world-id=你的world-id

 vim-cmd vmsvc/getallvms         #获取`所有`vm的信息,格式如下图
 vim-cmd vmsvc/power.on 2        #打开虚拟机 (这里的2是下面的 Vimd)
 vim-cmd vmsvc/power.off 2       #关闭虚拟机 (这里的2是下面的 Vimd)
 vim-cmd vmsvc/power.reset 2     #重启虚拟机 (这里的2是下面的 Vimd)
 vim-cmd vmsvc/power.getstate 2  #查看虚拟机状态
```



























