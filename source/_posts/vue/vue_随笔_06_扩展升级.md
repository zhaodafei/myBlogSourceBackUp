---
title: -vue 随笔06扩展升级
date: 2025-12-17
categories: 
- Vue
tags:
- Vue
---
vue 随笔06扩展升级
vue 随笔06扩展升级
vue 随笔06扩展升级

<!-- more -->

### 查看`vue`各个版本信息

通过命令查看, 直接通过 npm 查看 Vue 已发布的所有版本（包括 2.x/3.x 全系列）：

```bash
# 查看 Vue 2.x 所有版本
npm view vue@2 versions --json
# 查看 Vue 3.x 所有版本
npm view vue@3 versions --json
# 查看最新稳定版（含 2/3 分支）
npm view vue dist-tags
```

通过在线版本查询工具

- [npmjs Vue 主页](https://www.npmjs.com/package/vue)：直观展示最新版本、各分支稳定版、下载量；
- [Vue 版本历史库](https://github.com/vuejs/vue/releases)：官方 GitHub Releases，含每个版本的详细变更日志。

### 私服

核心作用:

> 覆盖 npm 默认规则，比如：
>
> - 镜像源（解决国内下载慢）；
> - 依赖安装模式（生产 / 开发依赖）；
> - 缓存路径、权限、代理等；
> - 私服 / 私有包仓库配置；
> - 自定义命令别名、注册表规则。
>
> 一个`.npmrc`私服文件
>
> ```js
> @neverendingsupport:registry=https://registry.nes.herodevs.com/npm/pkg/
> //registry.nes.herodevs.com/npm/pkg/:_authToken=<NES_ACCESS_TOKEN>
> ```
>
> 



























