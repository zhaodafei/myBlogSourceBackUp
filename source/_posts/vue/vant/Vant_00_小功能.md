---
title: Vant 小功能
date: 2024-10-26
categories: 
- Vant
tags:
- Vant
---
`vant`中常用小功能
`vant`中常用小功能
`vant`中常用小功能
官网地址: [vant](https://vant.pro/vant/#/zh-CN/button "vant")



<!-- more -->

### 基础模板

```vue
<template>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
```



### 标签多选

```vue
<template>
  <van-button type="default" color="-" size="small" plain>无</van-button>
  <van-button type="primary" color="#ff6b81" size="small" plain>无</van-button>
  <van-button type="default" color="#ff6b81" size="small">选中</van-button>

  <van-tag
    v-for="tag in tagArr"
    :key="tag.tagName"
    class="tag-item"
    size="large"
    type="default"
    :color="selectedTags.includes(tag.tagName) ? '#ff6b81' : '-'"
    :plain="!selectedTags.includes(tag.tagName)"
    @click="onClick(tag.tagName)"
  >{{ tag.tagName }}
  </van-tag>

  <van-button
    v-for="tag in tagArr"
    :key="tag.tagName"
    class="tag-item"
    size="small"
    type="default"
    :color="selectedTags.includes(tag.tagName) ? '#ff6b81' : '-'"
    :plain="!selectedTags.includes(tag.tagName)"
    @click="onClick(tag.tagName)"
  >{{ tag.tagName }}
  </van-button>
</template>

<script setup>
  const selectedTags = ref(['001'])
  const tagArr = [
    { id: '001', tagName: '001' },
    { id: '002', tagName: '002' },
    { id: '003', tagName: '003' }
  ]
  const onClick = name => {
    const index = selectedTags.value.indexOf(name)
    if (index === -1) {
      selectedTags.value.push(name)
    } else {
      selectedTags.value.splice(index, 1)
    }
  }
</script>
```

#### 自定义标签选择(省略号)

```vue
<template>
  <div>
    <div> 标签选中, 最多显示2行超出后显示省略号</div>
    <div class="content">
      <span
        v-for="tag in tagArr"
        :key="tag.tagName"
        class="tag-item"
        :class="selectedTags.includes(tag.tagName) ? 'active' : ''"
        @click="onClick(tag.tagName)"
      >
        <span class="tag-name">{{ tag.tagName }}</span>
      </span>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const tagArr = ref([
    { tagName: '标签001' },
    { tagName: '标签002' },
    { tagName: '标签003' },
    { tagName: '标签004' },
    { tagName: '标签005标签005标签005标签005标签005' },
    { tagName: '标签006' },
    { tagName: '标签007' }
  ])

  // 多选标签
  const selectedTags = ref([])
  const onClick = name => {
    // 多选用这个
    // const index = selectedTags.value.indexOf(name)
    // if (index === -1) {
    //   selectedTags.value.push(name)
    // } else {
    //   selectedTags.value.splice(index, 1)
    // }
    selectedTags.value = [name]
  }
</script>

<style scoped lang="scss">
  .content {
    font-size: 24px;
    display: grid;
    gap: 10px; /* 调整间距 */
    grid-template-columns: 32% 32% 32%;

    .tag-item {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;

      background: #fff;
      color: #969799;
      padding: 4px 8px;
      border: 1px solid #969799;
      border-radius: 8px;
    }
    .tag-item.active {
      background: #ff6b81;
      color: #fff;
      padding: 4px 8px;
      border: unset;
      border-radius: 8px;
    }

    .tag-name {
      white-space: normal;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
</style>

```



### pop弹窗自定义内容

自定义`pop`弹窗,`头部`和`底部`固定,`中间`可以滚动

```vue
<van-button @click="feiPicker = true">popup弹窗</van-button>
<van-popup v-model:show="feiPicker" position="bottom" class="popup-wrapper">
  <div class="popup-body">
    <div class="header"> 头部 </div>

    <div class="content">
      <div class="content-main">
        HTML的全称为超文本标记语言，是一种标记语言。它包括一系列标签，通过这些标签可以将网络上的文档格式统一，
        使分散的Internet资源连接为一个逻辑整体。
        HTML文本是由HTML命令组成的描述性文本，HTML命令可以说明文字，
        图形、动画、声音、表格、链接等。 [1]
        超文本是一种组织信息的方式，它通过超级链接方法将文本中的文字、图表与其他信息媒体相关联。
          这些相互关联的信息媒体可能在同一文本中，
        也可能是其他文件，或是地理位置相距遥远的某台计算机上的文件。这种组织信息方式将分布在不
          同位置的信息资源用随机方式进行连接，
        为人们查找，检索信息提供方便。 [11]
        HTML是一种基础技术，常与CSS、JavaScript一起被众多网站用于设计网页、
        网页应用程序以及移动应用程序的用户界面
        [12]。网页浏览器可以读取HTML文件，并将其渲染成可视化网页。
        HTML描述了一个网站的结构语义随着线索的呈现，使之成为一种标记语言而非编程语言。
        HTML元素是构建网站的基石。
        HTML允许嵌入图像与对象，并且可以用于创建交互式表单，它被用来结构化信息——例如标题、段落和列表等等，
        也可用来在一定程度上描述文档的外观和语义。HTML的语言形式为尖括号包围的HTML元素（如html），
        浏览器使用HTML标签和脚本来诠释网页内容，但不会将它们显示在页面上。
      </div>
    </div>

    <div class="footer">
      <button class="van-picker__cancel van-haptics-feedback">取消</button>
      <button class="van-picker__confirm van-haptics-feedback">确认</button>
    </div>
  </div>
</van-popup>
<style lang="scss" scoped>
  .popup-wrapper {
    height: 60%;
    overflow: hidden;
    .popup-body {
      margin: 10px;
      height: 100%;
      display: flex;
      flex-direction: column;

      .header {
        padding: 0 20px;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .content {
        flex-grow: 1;
        height: 0;
        display: flex;
        .content-main {
          background-color: #fff;
          overflow-y: auto;
        }
      }
      .footer {
        height: 64px;
        padding: 0 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
</style>
```



### 底部

没有了























