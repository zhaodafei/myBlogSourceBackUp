---
title: element-plus 入门
date: 2023-11-04
categories: 
- element-plus
tags:
- element-plus
---
element-plus入门
element-plus 入门
element-plus入门

<!-- more -->

### clearable 会动态改变宽度

```wiki
"element-plus": "2.1.8"

element-plus 更新到 2.1.8之后的版本后,input输入框设置 clearable 后出现宽度跳动现象,官放没有给出合理的解决方案;

问题描述:
https://github.com/element-plus/element-plus/issues/7287
https://element-plus.gitee.io/zh-CN/component/input.html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98


#解决方案1:
PS: 由于ElInput 组件没有默认宽度，当显示 clearable 图标时, 组件的宽度将被撑开，可以通过设置固定宽度属性来解决。
<el-input v-model="input" clearable style="width: 200px" />


#解决方案2:
GuLinLing commented on Dec 22, 2023 • 不想设置宽度的可以试试，希望官方早点解决
.el-input__suffix:not(.el-select .el-input__suffix) {
	margin-left: -22px;
}
.el-input__inner:not(.el-select .el-input__inner) {
	padding-right: 22px;
}
```

### el-transfer默认宽度

```html
el-transfer默认宽度是200px
在内容较长的时候，无法展示完全; 需要修改该组件的宽度

<div class="edit_fei">
  <el-transfer
      v-loading="transLoading"
      filterable
      filter-placeholder="搜索"
      v-model="value"
      :data="transData"
      :titles="['未选择', '已选择']">
  </el-transfer>
</div>


<style scoped lang="scss">
  .edit_fei {
    :deep(.el-transfer-panel) {
      width: 550px !important;
    }
  }
</style>
```

### 日期限制

```vue
<template>
  <div>
    <el-date-picker
        v-model="feiTime"
        type="datetime"
        value-format="YYYY-MM-DD HH:mm:ss"
        format="YYYY-MM-DD HH:mm:ss"
        placeholder="请选择"
        :clearable="false"
        :disabled-date="disabledDate"
    />
  </div>
</template>

<script setup>
import {ref} from "vue";

const feiTime = ref()
const disabledDate = (time) => {
  // 01) 禁用当天之后的日期
  // return time.getTime() > Date.now()

  // 02) 2023-01-18 之后日期都可以选
  // return time.getTime() <= new Date('2023-01-18').getTime()

  // 03) 2023-01-18 到 2023-01-25 之间的都可以选
  return (
      time.getTime() <= new Date('2023-01-18').getTime() ||
      time.getTime() >= new Date('2023-01-25').getTime()
  )
}

</script>

```

### 表格合并

#### 表格合并原理

```vue
<template>
 <h3> 日期相同的会合并 </h3>

  <div class="table">
    <el-table
        :data="tableData_merge"
        :span-method="objectSpanMethod"
        border
        style="width: 100%; margin-top: 20px"
    >
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="name" label="Name" />
      <el-table-column label="序号" width="55" type="index" />
      <el-table-column prop="amount1" label="Amount 1" />
      <el-table-column prop="amount2" label="Amount 2" />
      <el-table-column prop="amount3" label="Amount 3" />
    </el-table>
  </div>
</template>
<script setup>
import {ref, reactive, onMounted, getCurrentInstance} from "vue";
const {proxy} = getCurrentInstance();

// 测试合并单元格
const tableData_merge = ref([
  { id: '2024-08-10', name: 'Tom122', amount1: '234', amount2: '3.2', amount3: 10 },
  { id: '2024-08-10', name: 'Tom122', amount1: '165', amount2: '4.4', amount3: 12 },
  { id: '2024-08-11', name: 'Tom124', amount1: '324', amount2: '1.9', amount3: 90 },
  { id: '2024-08-12', name: 'Tom125', amount1: '621', amount2: '2.2', amount3: 17 },
  { id: '2024-08-12', name: 'Tom125', amount1: '539', amount2: '4.1', amount3: 15 }
])

// 默认接受四个值 { 当前行的值, 当前列的值, 行的下标, 列的下标 }
const objectSpanMethod = ({ row, column, rowIndex, columnIndex }) => {
  // 字段列
  if (columnIndex === 0) {
    let obj = { rowspan: 0, colspan: 0 } // 如果为0则为需要合并的行
   // 字段行
    switch (rowIndex) {
      case 0:
        obj = { rowspan: 2, colspan: 1 }
        break
      case 1:
        obj = { rowspan: 0, colspan: 0 }
        break
      case 2:
        obj = { rowspan: 1, colspan: 1 }
        break
      case 3:
        obj = { rowspan: 2, colspan: 1 }
        break
      case 4:
        obj = { rowspan: 0, colspan: 0 }
        break
    }

    return obj
  }
}

</script>
<style scoped lang="scss">
.table {
  height: 100vh;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
}
</style>

```



#### 表格合并Vue2

```vue
<template>
  <div class="table">
    <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%">
      <el-table-column label="时间" prop="time"  />
      <el-table-column label="年级" prop="grade"  />
      <el-table-column label="姓名" prop="name"  />
      <el-table-column label="科目" prop="subjects"  />
      <el-table-column label="成绩" prop="score"  />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      tableData: [
        { time: '2024-08-10', grade: '五年级二班', name: '张三', subjects: '语文', score: 80 },
        { time: '2024-08-10', grade: '五年级二班', name: '张三', subjects: '数学', score: 80 },
        { time: '2024-08-10', grade: '五年级一班', name: '李四', subjects: '语文', score: 70 },
        { time: '2024-08-10', grade: '五年级一班', name: '李四', subjects: '数学', score: 80 },
        { time: '2024-08-11', grade: '五年级三班', name: '大飞', subjects: '语文', score: 60 },
        { time: '2024-08-11', grade: '五年级三班', name: '大飞', subjects: '数学', score: 60 },
      ],
      mergeObj: {},   // 用来记录需要合并行的下标
      mergeArr: ['time', 'grade', 'name', 'subjects', 'score'],  // 表格中的列名
      // mergeArr: ['time', 'subjects'],  // 表格中的列名
    };
  },
  methods: {
    getSpanArr(data) {
      this.mergeArr.forEach((key, index1) => {
        let count = 0; // 用来记录需要合并行的起始位置
        this.mergeObj[key] = []; // 记录每一列的合并信息
        data.forEach((item, index) => {
          // index == 0表示数据为第一行，直接 push 一个 1
          if(index === 0) {
            this.mergeObj[key].push(1);
          } else {
            // 判断当前行是否与上一行其值相等 如果相等 在 count 记录的位置其值 +1 表示当前行需要合并 并push 一个 0 作为占位
            if(item[key] === data[index - 1][key]) {
              this.mergeObj[key][count] += 1;
              this.mergeObj[key].push(0);
            } else {
              // 如果当前行和上一行其值不相等
              count = index; // 记录当前位置
              this.mergeObj[key].push(1); // 重新push 一个 1
            }
          }
        })
      })
    },
    // 默认接受四个值 { 当前行的值, 当前列的值, 行的下标, 列的下标 }
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      // 判断列的属性
      if(this.mergeArr.indexOf(column.property) !== -1) {
        // 判断其值是不是为0
        if(this.mergeObj[column.property][rowIndex]) {
          return [this.mergeObj[column.property][rowIndex], 1]
        } else {
          // 如果为0则为需要合并的行
          return [0, 0];
        }
      }
    }
  },
  mounted() {
    this.getSpanArr(this.tableData);
  }
};
</script>

<style scoped lang="scss">
.table {
  height: 100vh;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;

}
</style>

```



#### 表格合并Vue3

```vue
<template>
  <div class="table">
    <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%">
      <el-table-column label="时间" prop="time"  />
      <el-table-column label="年级" prop="grade"  />
      <el-table-column label="姓名" prop="name"  />
      <el-table-column label="科目" prop="subjects"  />
      <el-table-column label="成绩" prop="score"  />
    </el-table>
  </div>
</template>
<script setup>
import {ref, reactive, onMounted, getCurrentInstance} from "vue";

const {proxy} = getCurrentInstance();


const tableData = ref([
  { time: '2024-08-10', grade: '五年级二班', name: '张三', subjects: '语文', score: 80 },
  { time: '2024-08-10', grade: '五年级二班', name: '张三', subjects: '数学', score: 80 },
  { time: '2024-08-10', grade: '五年级一班', name: '李四', subjects: '语文', score: 70 },
  { time: '2024-08-10', grade: '五年级一班', name: '李四', subjects: '数学', score: 80 },
  { time: '2024-08-11', grade: '五年级三班', name: '大飞', subjects: '语文', score: 60 },
  { time: '2024-08-11', grade: '五年级三班', name: '大飞', subjects: '数学', score: 60 },
])

const mergeObj = ref({})  // 用来记录需要合并行的下标
// const mergeArr = ref(['time', 'grade', 'name', 'subjects', 'score'])  // 表格中的列名
const mergeArr = ref(['time', 'subjects'])  // 表格中的列名

// 默认接受四个值 { 当前行的值, 当前列的值, 行的下标, 列的下标 }
const objectSpanMethod = ({ row, column, rowIndex, columnIndex }) => {
  // 判断列的属性
  if(mergeArr.value.indexOf(column.property) !== -1) {
    // 判断其值是不是为0
    if(mergeObj.value[column.property][rowIndex]) {
      return [mergeObj.value[column.property][rowIndex], 1]
    } else {
      // 如果为0则为需要合并的行
      return [0, 0];
    }
  }
}

onMounted(()=>{
  mergeArr.value.forEach(key=>{
    let count = 0; // 用来记录需要合并行的起始位置
    mergeObj.value[key] = []; // 记录每一列的合并信息


    tableData.value.forEach((item,index)=>{
      // index == 0表示数据为第一行，直接 push 一个 1
      if (index === 0) {
        mergeObj.value[key].push(1);
      }else{
        // 判断当前行是否与上一行其值相等 如果相等 在 count 记录的位置其值 +1 表示当前行需要合并 并push 一个 0 作为占位
        if (item[key] === tableData.value[index - 1][key]) {
          mergeObj.value[key][count] += 1;
          mergeObj.value[key].push(0);
        }else{
          // 如果当前行和上一行其值不相等
          count = index; // 记录当前位置
          mergeObj.value[key].push(1); // 重新push 一个 1
        }
      }
    })
  })
})

</script>
<style scoped lang="scss">
.table {
  height: 100vh;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
}
</style>

```

时间列相同时间,会自动合并

| 2024-08-10 | 五年级二班 | 张三 | 语文 | 80   |
| ---------- | ---------- | ---- | ---- | ---- |
| 2024-08-10 | 五年级二班 | 张三 | 数学 | 80   |
| 2024-08-10 | 五年级一班 | 李四 | 语文 | 70   |
| 2024-08-10 | 五年级一班 | 李四 | 数学 | 80   |
| 2024-08-11 | 五年级三班 | 大飞 | 语文 | 60   |
| 2024-08-11 | 五年级三班 | 大飞 | 数学 | 60   |



### 表单校验

```html

```



### 文件上传

```vue

```













