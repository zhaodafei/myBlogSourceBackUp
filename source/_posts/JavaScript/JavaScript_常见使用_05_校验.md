---
title: JavaScript_常见使用_05_校验
date: 2015-08-04
categories: 
- JavaScript
tags:
- JavaScript
---

JavaScript_常见使用_05_校验

JavaScript_常见使用_05_校验

JavaScript_常见使用_05_校验

<!-- more -->



### 发票税号校验

```html
<script type="text/javascript" src="./jquery-3.5.1.js"></script>
<script>
    let taxId =''; // 税号
    // 过滤特殊字符（税号专用）
    // 18位纳税人识别号编码规定:与数字混淆的字母,一律不列入编码,这些抛弃的字母是IOZS,所以开票时应注意.
    function taxScript(value) {
        var pattern = new RegExp(
            "[IOZS]"
        );
        if (pattern.test(value)) {
            return true;
        }
        return false;
    }
    
    function validateTaxId() {
        let result = true;
        var taxIdObject = $("#taxId");
        var taxId = taxIdObject.val().replace(/\s+/g, "");
        taxIdObject.val(taxId.toLocaleUpperCase());
        var reg_number=/(^([A-Z0-9]){15,20}$)/;
        if (taxId=="") {
            console.log("纳税人识别号不能为空");
            result = false;
        }else if (!reg_number.test(taxId) ) {
            console.log("纳税人识别号位数限制为15到20位，请检查");
            result = false;
        }else if(taxScript(taxId)){
            console.log('纳税人识别号包含特殊字符');
            result = false;
        }
        return result;
    }
</script>

<p> 税号:  <input type="text" id="taxId" value="" onblur="validateTaxId();"> </p>
```

### 注册电话

广范围电话校验: 座机,手机号都校验

```html
<script type="text/javascript" src="./jquery-3.5.1.js"></script>
<script>
    function isChinese(temp) {
        var re=/[^\u4e00-\u9fa5]/;
        if(re.test(temp)) return false;
        return true;
    }
    function checkLength(txtObj) {
        var val = txtObj || '';
        var valLength = 0;
        for (var ii = 0; ii < val.length; ii++) {
            var word=val.charAt(ii)+""

            if (isChinese(word)) {
                valLength += 2;
            } else {
                valLength++;
            }
        }
        return valLength;
    }
    function validatePhone() {
        var result = true;
        var phone = $("#phone");
        var reg_phone=/^\d[\d\-]*$/;
        if(phone.val()==null || phone.val()==""){
            console.log("电话号码不能为空1");
            result = false;
        }else if (checkLength(phone.val())>20) {
            console.log("注册电话总长度不能超过20个字");
            result = false;
        }else if(!reg_phone.test(phone.val())){
            console.log("注册电话格式输入有误，请重新输入");
            result = false;
        }
        return result;
    }
</script>
<p> 电话:  <input type="text" id="phone" onblur="validatePhone();"> </p>
```

### 开户行

```html
<script type="text/javascript" src="./jquery-3.5.1.js"></script>
<script>
    //过滤特殊字符:过滤开户行，注册地址
    function stripscriptForAddressAndKHH(value) {
        var pattern = new RegExp("[`~!@$%^&*=|':;'\\\\<>?~！￥……&*&;|‘；：”“'，？]");
        if(pattern.test(value)){
            return true;
        }
        return false;
    }
    function validateBank() {
        var result = true;
        var bank = $("#bank");
        if (bank.val().replace(/[^\x00-\xff]/g, "**").length < 2) {
            console.log("开户银行错误");
            result = false;
        }else if (checkLength(bank.val()) >100) {
            console.log('开户银行过长，请重新输入');
            result = false;
        }else if (stripscriptForAddressAndKHH(bank.val())){
            console.log("含有特殊字符，请重新输入");
            result = false;
        } else if(!(/.*[\u4e00-\u9fa5]+.*$/.test(bank.val()))){
            console.log("开户银行必须包含汉字，请重新输入");
            result = false;
        }

        return result;
    }
</script>
<p> 开户银行:  <input type="text" id="bank" onblur="validateBank();"> </p>
```

### 银行账户

```html
<script>
    function checkLength(txtObj) {
        var val = txtObj || '';
        var valLength = 0;
        for (var ii = 0; ii < val.length; ii++) {
            var word=val.charAt(ii)+""

            if (isChinese(word)) {
                valLength += 2;
            } else {
                valLength++;
            }
        }
        return valLength;
    }
    //过滤特殊字符
    function stripscript(value) {
        var pattern = new RegExp("[`~!@$%^&*=|':;',\\\\<>?~！￥……&*&;|‘；：”“'，？]");
        if(pattern.test(value)){
            return true;
        }
        return false;
    }
    function validateAccount() {
        var result = true;
        var account = $("#account");
        var reg_number=/^[0-9-]*$/;
        if(account.val()==null || account.val()==""){
            console.log("银行账号不能为空");
            result = false;
        }else if (checkLength(account.val()) < 5) {
            console.log("银行账号长度过短，请重新输入");
            result = false;
        }else if (!reg_number.test(account.val())){
            console.log("银行账号只能输入数字，请重新输入");
            result = false;
        }else if (stripscript(account.val())){
            console.log("含有特殊字符，请重新输入");
            result = false;
        }else if(checkLength(account.val())>50){
            console.log("银行账号总长度不能超过50个字");
            result = false;
        }

        return result;
    }
</script>
<p> 银行账户:  <input type="text" id="account" onblur="validateAccount();"> </p>

```







