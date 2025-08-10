---
title: -ant-design-vue 随笔03
date: 2025-05-26
categories: 
- ant-design-vue
tags:
- ant-design-vue
---
ant-design-vue 随笔03,基本`form`表单使用

<!-- more -->

技术背景:

- 前端框架：vue2 

### form表单使用

主要代码: v-decorator, setFieldsValue, getFieldsValue, resetFields, validateFields

```js
// 注意：使用 getFieldsValue getFieldValue setFieldsValue 等时，应确保对应的 field 已经用 getFieldDecorator 或 v-decorator 注册过了。

this.form.setFieldsValue({"username":['username_ddddd'],"nickname":['nickname_ddddd']}); //设置值   
this.form.setFieldsValue({"username": 'username_ddddd', "nickname": 'nickname_ddddd'}); //设置值

this.form.getFieldsValue();// 获取所有值
this.form.getFieldsValue(['username','nickname']); // 获取某些个值
this.form.getFieldValue(['username']) // 获取某一个值

this.form.resetFields();  // 重置表单值

this.form.validateFields((err,fieldsValue) => {  // 校验所有的值
  if (!err) {
    console.log(fieldsValue); //获取数据 {nickname: "实际值", username: "实际值"}
  }else {
    console.log(err);
  }
});

this.form.validateFields(['nickname'],(err,fieldsValue)=>{ // 校验某个值
  if (!err) {
    console.log(fieldsValue); //获取数据 {nickname: "实际值"}
  }else {
    console.log(err);
  }
});
```

### demo 练习

```vue
<template>
  <div>
    <a-form :form="form">

      <a-form-item label="Name">
        <a-input placeholder="Please input your name"
                 v-decorator="username" />
      </a-form-item>

      <a-form-item  label="Nickname">
        <a-input  placeholder="Please input your nickname"
                  v-decorator="['nickname',{ rules: [{ required: true, message: 'Please input your nickname' }] },]"/>
      </a-form-item>

      <button @click="fei_form">form功能测试</button>
    </a-form>
  </div>
</template>
<script>

/* 这是ant-design-vue */
import Vue from 'vue'
import Antd, { message,Select } from 'ant-design-vue'  //这是ant-design-vue
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd);
/* 这是ant-design-vue */


export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: 'form_rule' }), // 定义form
      username: ['username', {rules: [{required: true, message: 'Please input your username'}]}]
    }
  },
  methods: {
    fei_form() {
      this.form.setFieldsValue({"username":['username_ddddd'],"nickname":['nickname_ddddd']}); //设置值

      this.form.getFieldsValue();// 获取所有值
      this.form.getFieldsValue(['username','nickname']); // 获取某一个值

      this.form.resetFields();  // 重置表单值

      this.form.validateFields((err,fieldsValue) => {  // 校验所有的值
        if (!err) {
          console.log(fieldsValue); //获取数据 {nickname: "实际值", username: "实际值"}
        }else {
          console.log(err);
        }
      });

      this.form.validateFields(['nickname'],(err,fieldsValue)=>{ // 校验某个值
        if (!err) {
          console.log(fieldsValue); //获取数据  {nickname: "实际值"}
        }else {
          console.log(err);
        }
      });

    }
  },
  watch: {},
};
</script>

<style scoped></style>

```

### demo2练习

```vue
<template>
  <div class="表单基本操作">
    <a-form :form="form" layout="inline">

      <a-form-item label="姓名">
        <a-input v-decorator="['xxx1', { rules:rules.xxx1 }]" placeholder="请输入" allowClear />
      </a-form-item>

      <a-form-item label="昵称">
        <a-input v-decorator="['xxx2', { rules:rules.xxx2 }]" placeholder="请输入" allowClear />
      </a-form-item>

      <a-form-item label="地址">
        <a-select v-decorator="['xxx3', { rules:rules.xxx3 }]" placeholder="请选择" allowClear
                  style="width: 120px"
                  @change="handleChange" >
          <a-select-option
              v-for="(item, key) in [{value:'a1',label:'选择A'},{value:'b1',label:'选择B'}]"
              :value="item.value"
              :key="item.value">
            {{item.label}}
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="日期">
        <a-range-picker v-decorator="['WEB_xxx3', { rules:rules.WEB_xxx3 }]"
                        :placeholder="['Start month', 'End month']"
                        show-time
                        format="YYYY-MM-DD HH:mm:ss"
        />
      </a-form-item>

      <a-form-item>
        <a-button type="primary" icon="plus" @click="handleSubmit">提交</a-button>

        <a-button type="primary" icon="close" @click="handleReset">重置</a-button>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" icon="plus" @click="handleGetVal">获取值</a-button>

        <a-button type="primary" icon="close" @click="handleSetVal">赋值</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  components: {},
  data() {
    return {
      form: this.$form.createForm(this, { name: 'form_rule' }), // 定义form
      rules: {
        xxx1: [
          { required: true, message: '内容不能为空' }
        ],
        xxx2: [
          { required: true, message: '内容不能为空' },
          { min: 3, max: 255, message: '长度3到255', trigger: 'blur' }
        ],
        xxx3: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        WEB_xxx3: [
          { type: 'array', required: true, message: '请选择' }
        ]
      }
    }
  },
  methods: {
    handleChange(val) {
      console.log('选中数据', val)
    },
    handleSubmit() {
      this.form.validateFields((err, values) => {
        if (err) {
          return
        }
        console.log('获取表单值', values)
      })
    },
    handleReset() {
      this.form.resetFields() // 重置表单值
    },
    handleGetVal() {
      const fei = this.form.getFieldsValue()// 获取所有值
      const fei2 = this.form.getFieldsValue(['xxx1', 'WEB_xxx3']) // 获取某些个值
      const fei3 = this.form.getFieldValue(['xxx1']) // 获取某一个值
    },
    handleSetVal() {
      // 设置值
      this.form.setFieldsValue({
        xxx1: '第一个值',
        xxx2: '第2个值'
      })
    }
  }
}
</script>

```



### setFields 设置一组输入控件的值与错误状态

```js
this.form.setFields({
    "username": {
        value: "xxx_可以给一个默认值",
        errors: [{"message": "请选择输入用户名"}]
    }
});
```

### 长度校验

```js
export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: 'form_rule' }), // 定义form
      // username: ['username', {rules: [{required: true, message: 'Please input your username'}]}],
      // xxx3: ['xxx3', { rules: [{ type: 'array', required: true, message: '必须是个数组' }] }]
      username: ['username', {
        initialValue: '', // 默认值
        rules: [
          {required: true, message: 'Please input your username'}, // 必填校验
          {type: 'string', message: '最大长度50', max:50,}, // 长度校验
        ]
      }],
    }
  },
}
```

### 密码校验(回调)

```js
export default {
  data() {
    const validateOldPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入原始密码'))
      } else {
        callback()
      }
    }

    const validateNewPass = (rule, value, callback) => {
      const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(.{8,20})$/
      if (value === '') {
        callback(new Error('请输入新密码'))
      } else if (!pattern.test(value)) {
        callback(new Error('密码长度为8-20个字符、包含字母和数字，字母区分大小写'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }

    const confirmNewPwd = (rule, value, callback) => {
      const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(.{8,20})$/
      const otherPwd = this.ruleForm.newPass

      if (!value) {
        callback(new Error('请再次输入密码'))
      } else if (value.length < 8 || value.length > 20) {
        callback(new Error('用户密码长度为8-20位'))
      } else if (!pattern.test(value)) {
        callback(new Error('必须满足数字、小写字母、大写字母、特殊符号中至少三种'))
      } else if (value !== otherPwd) {
        callback(new Error('两次输入的密码不同!'))
      } else {
        callback()
      }
    }

    const localCheckPwd = (rule, value, callback) => {
      // 这样可以放到外部校验
      // validVal(rule, value, callback,'这里传个值')
    }

    return {
      form: this.$form.createForm(this, { name: 'form_rule' }), // 定义form
      ruleForm: {
        oldPwd: '', // 老密码
        newPwd: '', // 新密码
        confirmPwd: '', // 确认密码
        checkPwd: '' // 检查密码
      },
      rules: {
        oldPwd: [{ validator: validateOldPass, trigger: 'change' }],
        newPwd: [{ validator: validateNewPass, trigger: 'change' }],
        confirmNewPwd: [{ validator: confirmNewPwd, trigger: 'change' }],
        checkPwd: [{ validator: localCheckPwd, trigger: 'change' }]
      },
    }
  },
}
```





### 其他

没有了

[自己博客中介绍](https://www.cnblogs.com/dafei4/p/13424918.html)



























