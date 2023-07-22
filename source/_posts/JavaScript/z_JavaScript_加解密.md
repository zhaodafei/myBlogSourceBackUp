---
title: -JavaScript 加解密
date: 2023-07-20
categories: 
- JavaScript
tags:
- JavaScript
- 加解密
---
Vue使用`sm-crypto`
Vue使用`sm-crypto`

<!-- more -->

### 简介

常见密码算法。主要有SM1，SM2，SM3，SM4。密钥长度和分组长度均为128位。

1. SM1 为`对称加密`。其加密强度与AES相当。该算法不公开，调用该算法时，需要通过加密芯片的接口进行调用。
2. SM2 为`非对称加密`，基于ECC。该算法已公开。由于该算法基于ECC，故其签名速度与秘钥生成速度都快于RSA。ECC 256位（SM2采用的就是ECC 256位的一种）安全强度比RSA 2048位高，但运算速度快于RSA。
3. SM3 消息摘要。可以用MD5作为对比理解。该算法已公开。校验结果为256位。
4. SM4 无线局域网标准的分组数据算法。`对称加密`，密钥长度和分组长度均为128位。

前后端加解密原理如下：

一共有两对密钥: 一对儿服务端的;  一对儿前端的

```js
//服务端-gm公钥-用于加密和验签[服务端公钥前端拿]
let publicKeyServer = 'xxx';
//服务端-gm私钥-用于解密和生成签名[服务端私钥自己拿]
let privateKeyServer= 'xxx';


//前端-gm公钥-用于加密和验签[前端公钥后端拿]
let publicKeyWeb = 'xxx';
//前端-gm私钥-用于解密和生成签名[前端私钥自己拿]
let privateKeyWeb = 'xxx';
```

### 安装

```bash
npm install --save sm-crypto
```

### 使用SM2

```js
import { sm2 } from 'sm-crypto';

// 生成公钥和私钥
export const getGenerateKeyPairHex = () => {
  let keypair = sm2.generateKeyPairHex()
  let publicKey = keypair.publicKey // 公钥
  let privateKey = keypair.privateKey // 私钥
  let verifyResult = sm2.verifyPublicKey(publicKey) // 验证公钥返回true,false
  
  // 自定义随机数，参数会直接透传给 jsbn 库的 BigInteger 构造器
  // 注意：开发者使用自定义随机数，需要自行确保传入的随机数符合密码学安全
  // let keypair2 = sm2.generateKeyPairHex('123456789')
  // let keypair3 = sm2.generateKeyPairHex(256, SecureRandom)

  return {publicKey, privateKey, verifyResult}
}


// 加密解密
export const encryptSM2 = (publicKey,privateKey) => {
  const sm2 = require('sm-crypto').sm2
  const cipherMode = 1 // 1 - C1C3C2，0 - C1C2C3，默认为1

  let encryptData = sm2.doEncrypt("msgString", publicKey, cipherMode) // 加密结果
  let decryptData = sm2.doDecrypt(encryptData, privateKey, cipherMode) // 解密结果

  encryptData = sm2.doEncrypt("msgArray", publicKey, cipherMode) // 加密结果，输入数组
  decryptData = sm2.doDecrypt(encryptData, privateKey, cipherMode, {output: 'array'}) //解密结果,输出数组
}
```

### 使用SM4

```js
// 加密
const sm4 = require('sm-crypto').sm4
const msg = 'dafei' // 可以为 utf8 串或字节数组
const key = '0123456789abcdeffedcba9876543210' // 可以为 16 进制串或字节数组，要求为 128 比特

let encryptData = sm4.encrypt(msg, key) // 加密，默认输出 16 进制字符串，默认使用 pkcs#7 填充（传 pkcs#5 也会走 pkcs#7 填充）
let encryptData = sm4.encrypt(msg, key, {padding: 'none'}) // 加密，不使用 padding
let encryptData = sm4.encrypt(msg, key, {padding: 'none', output: 'array'}) // 加密，不使用 padding，输出为字节数组
let encryptData = sm4.encrypt(msg, key, {mode: 'cbc', iv: 'fedcba98765432100123456789abcdef'}) // 加密，cbc 模式



// 解密
const sm4 = require('sm-crypto').sm4
const encryptData = '0e395deb10f6e8a17e17823e1fd9bd98a1bff1df508b5b8a1efb79ec633d1bb129432ac1b74972dbe97bab04f024e89c' // 可以为 16 进制串或字节数组
const key = '0123456789abcdeffedcba9876543210' // 可以为 16 进制串或字节数组，要求为 128 比特

let decryptData = sm4.decrypt(encryptData, key) // 解密，默认输出 utf8 字符串，默认使用 pkcs#7 填充（传 pkcs#5 也会走 pkcs#7 填充）
let decryptData = sm4.decrypt(encryptData, key, {padding: 'none'}) // 解密，不使用 padding
let decryptData = sm4.decrypt(encryptData, key, {padding: 'none', output: 'array'}) // 解密，不使用 padding，输出为字节数组
let decryptData = sm4.decrypt(encryptData, key, {mode: 'cbc', iv: 'fedcba98765432100123456789abcdef'}) // 解密，cbc 模式

```

### 扩展,签名

```js
const sm2 = require('sm-crypto').sm2

// 纯签名 + 生成椭圆曲线点
let sigValueHex = sm2.doSignature(msg, privateKey) // 签名
let verifyResult = sm2.doVerifySignature(msg, sigValueHex, publicKey) // 验签结果

// 纯签名
let sigValueHex2 = sm2.doSignature(msg, privateKey, {
    pointPool: [sm2.getPoint(), sm2.getPoint(), sm2.getPoint(), sm2.getPoint()], // 传入事先已生成好的椭圆曲线点，可加快签名速度
}) // 签名
let verifyResult2 = sm2.doVerifySignature(msg, sigValueHex2, publicKey) // 验签结果

// 纯签名 + 生成椭圆曲线点 + der编解码
let sigValueHex3 = sm2.doSignature(msg, privateKey, {
    der: true,
}) // 签名
let verifyResult3 = sm2.doVerifySignature(msg, sigValueHex3, publicKey, {
    der: true,
}) // 验签结果

// 纯签名 + 生成椭圆曲线点 + sm3杂凑
let sigValueHex4 = sm2.doSignature(msg, privateKey, {
    hash: true,
}) // 签名
let verifyResult4 = sm2.doVerifySignature(msg, sigValueHex4, publicKey, {
    hash: true,
}) // 验签结果

// 纯签名 + 生成椭圆曲线点 + sm3杂凑（不做公钥推导）
let sigValueHex5 = sm2.doSignature(msg, privateKey, {
    hash: true,
    publicKey, // 传入公钥的话，可以去掉sm3杂凑中推导公钥的过程，速度会比纯签名 + 生成椭圆曲线点 + sm3杂凑快
})
let verifyResult5 = sm2.doVerifySignature(msg, sigValueHex5, publicKey, {
    hash: true,
    publicKey,
})

// 纯签名 + 生成椭圆曲线点 + sm3杂凑 + 不做公钥推 + 添加 userId（长度小于 8192）
// 默认 userId 值为 1234567812345678
let sigValueHex6 = sm2.doSignature(msgString, privateKey, {
    hash: true,
    publicKey,
    userId: 'testUserId',
})
let verifyResult6 = sm2.doVerifySignature(msgString, sigValueHex6, publicKey, {
    hash: true,
    userId: 'testUserId',
})
```





### 其他

```html
PS: 小程序移植版：https://github.com/wechat-miniprogram/sm-crypto
PS: java 移植版：https://github.com/antherd/sm-crypto/
```



















