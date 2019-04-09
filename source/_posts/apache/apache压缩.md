---
title: -Apache 压缩
---

Apache  压缩



### 压缩 开启模块

```
LoadModule deflate_module modules/mod_deflate.so
LoadModule headers_module modules/mod_headers.so
LoadModule filter_module modules/mod_filter.so
```

### 压缩配置

```
    <IfModule mod_deflate.c>
         #告诉浏览器内容进行压缩
         # https://httpd.apache.org/docs/2.4/mod/mod_deflate.html#deflatecompressionlevel
         SetOutputFilter DEFLATE

         #压缩级别1--9,默认为6
         # https://httpd.apache.org/docs/2.4/mod/mod_deflate.html#deflatecompressionlevel
         DeflateCompressionLevel 6

         #不对那些进行压缩
         # https://httpd.apache.org/docs/2.4/mod/mod_setenvif.html#setenvifnocase
         SetEnvIfNoCase Request_URI .(?:gif|jpe?g|png)$ no-gzip dont-vary
         SetEnvIfNoCase Request_URI .(?:exe|t?gz|zip|bz2|sit|rar)$ no-gzip dont-vary
         SetEnvIfNoCase Request_URI .(?:pdf|mov|avi|mp3|mp4|rm)$ no-gzip dont-vary

         #对那些压缩
         # https://httpd.apache.org/docs/2.4/mod/mod_filter.html#addoutputfilterbytype
         AddOutputFilterByType DEFLATE text/*
         AddOutputFilterByType DEFLATE application/ms* application/vnd* application/postscript application/javascript application/x-javascript
         AddOutputFilterByType DEFLATE application/x-httpd-php application/x-httpd-fastphp

         #解决一下兼容问题
         # https://httpd.apache.org/docs/2.4/mod/mod_setenvif.html#browsermatch
         BrowserMatch ^Mozilla/4 gzip-only-text/html
         BrowserMatch ^Mozilla/4.0[678] no-gzip
         BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
    </IfModule>
```

