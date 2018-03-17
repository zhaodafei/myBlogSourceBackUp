---
title: win server 2008 部署php
---
### 配置IIS （安装好 PHPstudy 后测试php）

在计算机右击,选择管理，出现服务器管理界面；或者打开“开始”菜单→“服务器管理”，出现服务器管理界面

![IIS](/img/win_server2008/IIS_01.png)

添加角色，下一步，选择 web 服务器（IIS）,下一步 选择 CGI,一直下一步

![IIS](/img/win_server2008/IIS_02.png)

![IIS](/img/win_server2008/IIS_03.png)

![IIS](/img/win_server2008/IIS_04.png)

安装好IIS后，需要测试一下，在浏览器中输入 localhost ，如果出现 IIS7 欢迎界面说明正常；

![IIS](/img/win_server2008/IIS_05.png)

配置一个新网站，打开 IIS 管理器（“开始”→“所有程序”→“管理工具”→“internet 信息服务（IIS）管理器”）；
备注：使用 PHPstudy 打开 IIS 管理器，需要提前安装好 PHPstudy；

![IIS](/img/win_server2008/IIS_06.png)

![IIS](/img/win_server2008/IIS_07.png)

添加好后，在 IIS 管理器中，在刚才添加的网站 “网站名称” 上右键，点击 “编辑权限” ，进入后点击“安全”选项卡，再点击其中的“编辑” 。打开“编辑”窗口后点击“添加”按钮。添加一个“用户”到权限用户列表中，然后为其勾选除了“完全控制”之外的权限。然后点击“确定” “应用”。

![IIS](/img/win_server2008/IIS_08.png)

结束后，在刚才选择的物理路径下创建 index.html ,然后用记事本打开，输入 ”hello world“ 测试；

如果是做 PHP 开发，安装好 PHPstudy 后，可出在刚才选择的物理路径下创建 index.php ,然后用记事本打开，输入 如下做测试

```
<?php
echo phpinfo();
?>
```

![IIS](/img/win_server2008/IIS_09.png)





























