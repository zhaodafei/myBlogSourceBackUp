---
title: ai技巧
date: 2026-07-19
categories: 
- 编辑器
tags:
- 编辑器
---
`ai编程技巧`基本使用
`ai编程技巧`基本使用
`ai编程技巧`基本使用

<!-- more -->

### 关键注释

在程序关键位置写 `bookmarkPin_具体业务单词` 注释,方便后期查找和`ai`阅读,同时减少`token`消耗 

### 基础三件套

原则:   `Agents`管流程[ 输出长什么样 ], `Rules`管行为[ 必须怎么做 ],`Skills`管领域任务

> 几个踩坑提醒（省得你返工）
>
> - **alwaysApply 别滥用**：全局规则加起来建议 < 60 行，否则每轮对话都烧 token。
>
> - **globs 用对**：`src/**/*.tsx` 才递归，`src/*.tsx` 只匹配一层。
>
> - **Rules 不写长文档**：整本 style guide 别贴进来，指向项目里的真实示例文件（如 `see src/components/Button.tsx`）比抄文档管用。
>
> - **和 Skills 分工**：Rules 管“永远遵守的纪律”，Skills（`.cursor/skills/*/SKILL.md`）管“部署/建组件/跑审计”这种多步流程，别把流程性东西写进 rules。
>
> - 简单项目不想搞 `.mdc`，根目录放一个 `AGENTS.md` 纯 markdown 也行，但就没有 globs/分类能力了







### 底部

没有了

