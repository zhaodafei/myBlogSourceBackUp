---
title: -jjwt 在 Java 中简单使用
date: 2022-02-07
categories: 
- jjwt
tags:
- jjwt
---
`jjwt` 在 `Java` 中简单使用
`jjwt` 在 `Java` 中简单使用
`jjwt` 在 `Java` 中简单使用

<!-- more -->

### demo

```java
package com.example.fei.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.util.Date;


/**
 * 参考资料:
 *    https://github.com/jwtk/jjwt
 *    https://stormpath.com/blog/jwt-java-create-verify
 */
@Component
public class TokenService {

    private final static String myApiKeySecret = "fei_Secret_123456"; // 这里写入你的Secret

    /**
     * 创建 token
     * @return {}
     */
    public String createToken() {
        long nowMillis  = System.currentTimeMillis();
        Date now = new Date(nowMillis);
        Date exp = new Date(nowMillis + 1000 * 30); // 过期时间 30秒

        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256; // 签名算法
        // 设置秘钥
        byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(myApiKeySecret);
        Key signKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());


        JwtBuilder builder = Jwts.builder()
                .setId("fei123") // 置唯一编号
                .setIssuedAt(now)  //设置签发日期
                .setExpiration(exp) // 设置过期时间
                // .setAudience("iot")
                // .setIssuer("fei") // 设置发行人
                .setSubject( "fei_setSubject" )
                .claim("userName", "username_01")
                .claim("userPwd", "123456")
                .signWith(signatureAlgorithm, signKey); // 设置签名 使用HS256算法，并设置SecretKey(字符串)

        return builder.compact();
    }

    /**
     * 获取 token
     * @param jwt String
     * @return {}
     */
    public Boolean parseJWT(String jwt) {
        try {
            Claims claims = Jwts.parser()
                    .setSigningKey(DatatypeConverter.parseBase64Binary(myApiKeySecret))
                    .parseClaimsJws(jwt)
                    .getBody();

            Object userName = claims.get("userName");
            Object userPwd = claims.get("userPwd");
            String subject = claims.getSubject();

            System.out.println(userName.toString());
            System.out.println(userPwd.toString());
            System.out.println(subject);

            return true;
        } catch (Exception e) {
            System.out.println("Token格式有误");
            return false;
        }
    }
}

```

### footer 底部

[jjwt官方文档](https://github.com/jwtk/jjwt#install-jdk)
[jwt-demo](https://stormpath.com/blog/jwt-java-create-verify)













