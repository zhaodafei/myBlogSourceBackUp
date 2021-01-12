---
title: linux ubuntu 磁盘扩容
---
### 在虚拟机`VMware`上增加磁盘空间

使用了一段时间虚拟机后发现磁盘不够用了,需要扩容。在客户端操作扩容出现`磁盘已成功扩展。您必须从客户机操作系统内部对磁盘重新进行分区和扩展文件系统。`  然后进ubuntu系统进行操作

![扩容](/img/centos/lvm_01.jgp "扩容")

### 查看现有的磁盘空间

```
df -h   #查看当前磁盘空间,没有看到变化
fdisk -l  #查看硬盘信息
```

#### 创建新分区

不同操作系统命名方式不一样, 我的是 /dev/sda  , 有的可能是  /dev/vda,具体使用看 df -h 出来的信息

```
root@ubuntu:/# fdisk /dev/sda

Welcome to fdisk (util-linux 2.31.1).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.


Command (m for help): m      ------------------获取帮助
Help:

  DOS (MBR)
   a   toggle a bootable flag
   b   edit nested BSD disklabel
   c   toggle the dos compatibility flag

  Generic
   d   delete a partition
   F   list free unpartitioned space
   l   list known partition types
   n   add a new partition
   p   print the partition table
   t   change a partition type
   v   verify the partition table
   i   print information about a partition

  Misc
   m   print this menu
   u   change display/entry units
   x   extra functionality (experts only)

  Script
   I   load disk layout from sfdisk script file
   O   dump disk layout to sfdisk script file

  Save & Exit
   w   write table to disk and exit
   q   quit without saving changes

  Create a new label
   g   create a new empty GPT partition table
   G   create a new empty SGI (IRIX) partition table
   o   create a new empty DOS partition table
   s   create a new empty Sun partition table
Command (m for help): n                  ----------创建新分区
   Partition type
   p   primary (1 primary, 0 extended, 3 free)
   e   extended (container for logical partitions)
Select (default p):  p    --------------选择主分区
Partition number (2-4, default 2): 2     -------------分区号,默认是2(系统不一样,默认值不一样)
First sector (41940992-52428799, default 41940992):       --------直接回城选择默认
Last sector, +sectors or +size{K,M,G,T,P} (41940992-52428799, default 52428799):  ----直接回城选择默认

Created a new partition 2 of type 'Linux' and of size 5 GiB.

Command (m for help): t   -----------修改分区格式
Partition number (1,2, default 2): 2   ----------刚才选择的分区号(对应上面的2)
Hex code (type L to list all codes): 8e  --------8e是lvm磁盘类型

Changed type of partition 'Linux' to 'Linux LVM'.

Command (m for help): p     ------打印分享信息(可以看到刚才选择的2,多出/dev/sda2,也就是要增加的5G空间)
Disk /dev/sda: 25 GiB, 26843545600 bytes, 52428800 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x4a53929f

Device     Boot    Start      End  Sectors Size Id Type
/dev/sda1  *        2048 41940991 41938944  20G 83 Linux
/dev/sda2       41940992 52428799 10487808   5G 8e Linux LVM

Command (m for help): w        -----------------保存
The partition table has been altered.
Syncing disks.

root@ubuntu:/# reboot  -----------重启系统
```

#### 创建物理卷

```
df -h   #查看当前磁盘空间,没有看到变化
fdisk -l  #查看硬盘信息,-------------------这时候这里会多出一个 /dev/sda2,说明上面的操作成功
```

![扩容](/img/centos/lvm_01.jgp "扩容")

```
------------------这里出现问题?????????????------------

root@ubuntu:/# pvcreate /dev/sda2      --------------创建物理卷(pv组成vg，vg组成lv)
  Physical volume "/dev/sda2" successfully created.
root@ubuntu:/# pvdisplay              --------查看物理卷和大小
  "/dev/sda2" is a new physical volume of "5.00 GiB"
  --- NEW Physical volume ---
  PV Name               /dev/sda2
  VG Name                              -----------这里没有VG name(如果这里有值怎下面不需要穿件)
  PV Size               5.00 GiB
  Allocatable           NO
  PE Size               0   
  Total PE              0
  Free PE               0
  Allocated PE          0
  PV UUID               xVmELU-F8si-LN9g-t4Ur-TWvR-u2Hp-nemrbb
   
-------- 由于我上面VG name 为空,所以创建------   
root@ubuntu:/# vgcreate data_fei /dev/sda2    -----------创建vg
root@ubuntu:/# vgdisplay   ----------------查看vg状态,查看卷组信息
root@ubuntu:/# pvdisplay    ------------(再次查看)查看物理卷和大小
  --- Physical volume ---
  PV Name               /dev/sda2
  VG Name               data_fei        ------------现在这里有VG name 的值
  PV Size               5.00 GiB / not usable 0   
  Allocatable           yes 
  PE Size               4.00 MiB
  Total PE              1280            ----------这个值在下面 lvextend 会用到 ↓↓↓
  Free PE               1280
  Allocated PE          0
  PV UUID               xVmELU-F8si-LN9g-t4Ur-TWvR-u2Hp-nemrbb
   
root@ubuntu:/#
-------------------------------------------------

root@ubuntu:/# vgextend data_fei  /dev/sda2  --------把创建的PV加入到相应的CG
  Physical volume '/dev/sda2' is already in volume group 'data_fei'
  Unable to add physical volume '/dev/sda2' to volume group 'data_fei'
  /dev/sda2: physical volume not initialized.
  
-------------------------------  
root@ubuntu:/# lvcreate -L100 -n data_001 data_fei    -----我这里lvdisplay没有,所以创建一个
  Logical volume "data_001" created.
root@ubuntu:/# lvdisplay 
  --- Logical volume ---
  LV Path                /dev/data_fei/data_001
  LV Name                data_001
  VG Name                data_fei
  LV UUID                dpmINm-4qE4-TX8G-wC72-Z4kO-XsVP-zhdKZs
  LV Write Access        read/write
  LV Creation host, time ubuntu, 2019-07-01 06:29:51 -0700
  LV Status              available
  # open                 0
  LV Size                100.00 MiB
  Current LE             25
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device
-------------------------
  
root@ubuntu:/# lvresize  -l +1280 /dev/mapper/data_fei-data_001  ---1280为上面pvdisplay中的free PE数量↑↑↑
root@ubuntu:/# lvdisplay resize2fs /dev/mapper/data_fei-data_001



```







 [我是a里面的内容](http://example.com/ "这里是title")





























