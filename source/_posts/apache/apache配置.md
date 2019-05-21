---
title: -Apache 配置
---

Apache  配置.. httpd.conf 



### 配置

```apacheconf
<VirtualHost *:80>  
    #官方文档 http://httpd.apache.org/docs/2.4/

    #ServerAdmin webmaster@dummy-host.www.phpStudy.net  
    DocumentRoot "E:/selfweb/git_dev/test/"  
    ServerName fei.apache.test
    ServerAlias fei.apache.test  
    #ErrorLog "logs/dummy-host.www.phpStudy.net-error.log"  
    #CustomLog "logs/dummy-host.www.phpStudy.net-access.log" common    

	<Directory />
	    #没有index文件显示目录
		Options +Indexes +FollowSymLinks +ExecCGI  

		#没有index不显示目录,禁止访问
		#Options  -Indexes +FollowSymLinks    

		#是否禁用.htaccess 文件配置        
		AllowOverride All

        #默认index.php index.html
        DirectoryIndex index.html index.php 

		Order allow,deny
		Allow from all
		Require all granted

		#404 重定向
		#ErrorDocument 404 /test/404.html
	
	</Directory>
</VirtualHost>
```

### 配置ssl,支持https 01

```
编辑Apache根目录下 conf/httpd.conf 找到 
LoadModule ssl_module modules/mod_ssl.so
和 
Include conf/extra/httpd-ssl.conf
去掉这2行前面的注释
```

![ssl 模块](/img/apache/ssl_01.png "ssl 模块")

### 配置ssl,支持https 02-1

```apacheconf
修改 httpd-ssl.conf 文件, a_public.crt  a.key  a_chain.crt 换成你对应的证书名字
vim /data/server/apache/conf/extra/httpd-ssl.conf
内容如下:

<VirtualHost _default_:443>
    SSLProtocol all -SSLv2 -SSLv3
    SSLCipherSuite HIGH:!RC4:!MD5:!aNULL:!eNULL:!NULL:!DH:!EDH:!EXP:+MEDIUM
    SSLHonorCipherOrder on
    SSLCertificateFile       /data/server/apache/conf/extra/cert/a_public.crt
    SSLCertificateKeyFile    /data/server/apache/conf/extra/cert/a.key
    SSLCertificateChainFile  /data/server/apache/conf/extra/cert/a_chain.crt

    ServerName 你的域名:443
    DocumentRoot "/data/web/web01/"
    <Directory /data/web/web01/>
        Options FollowSymlinks
        DirectoryIndex index.php
        Allow from all
        AllowOverride All
        Require all granted
    </Directory>
    SSLEngine on
    <FilesMatch "\.(cgi|shtml|phtml|php)$">
        SSLOptions +StdEnvVars
    </FilesMatch>
    <Directory "/data/server/apache/cgi-bin">
        SSLOptions +StdEnvVars
    </Directory>
    CustomLog "/data/server/apache/logs/ssl_request_log" \
              "%t %h %{SSL_PROTOCOL}x %{SSL_CIPHER}x \"%r\" %b"

</VirtualHost>

############   同时支持http 和 https 访问,需要修改vhost ####################
vim /data/server/apache/conf/self_vhosts/vhost.conf 

<VirtualHost *:80>
        ServerName 你的域名
        DocumentRoot "/data/web/web01/"
    <Directory /data/web/web01/>
        Options FollowSymlinks
        DirectoryIndex index.php
        Allow from all
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

![ssl 模块](/img/apache/ssl_02.png "ssl 模块")

### 配置ssl,支持https 02-2

```apacheconf
编辑Apache根目录下 conf/httpd.conf 找到 
LoadModule ssl_module modules/mod_ssl.so
和 
Include conf/extra/httpd-ssl.conf
去掉这2行前面的注释

这个操作完成后可以修改 vim /data/server/apache/conf/self_vhosts/vhost.conf  文件

<VirtualHost *:80>
        ServerName 你的域名
        DocumentRoot "/data/web/web01/"
    <Directory /data/web/web01/>
        Options FollowSymlinks
        DirectoryIndex index.php
        Allow from all
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>


<VirtualHost _default_:443>
    SSLProtocol all -SSLv2 -SSLv3
    SSLCipherSuite HIGH:!RC4:!MD5:!aNULL:!eNULL:!NULL:!DH:!EDH:!EXP:+MEDIUM
    SSLHonorCipherOrder on
    SSLCertificateFile       /data/server/apache/conf/extra/cert/a_public.crt
    SSLCertificateKeyFile    /data/server/apache/conf/extra/cert/a.key
    SSLCertificateChainFile  /data/server/apache/conf/extra/cert/a_chain.crt

    ServerName 你的域名:443
    DocumentRoot "/data/web/web01/"
    <Directory /data/web/web01/>
        Options FollowSymlinks
        DirectoryIndex index.php
        Allow from all
        AllowOverride All
        Require all granted
    </Directory>
    SSLEngine on
    <FilesMatch "\.(cgi|shtml|phtml|php)$">
        SSLOptions +StdEnvVars
    </FilesMatch>
    <Directory "/data/server/apache/cgi-bin">
        SSLOptions +StdEnvVars
    </Directory>
    CustomLog "/data/server/apache/logs/ssl_request_log" \
              "%t %h %{SSL_PROTOCOL}x %{SSL_CIPHER}x \"%r\" %b"

</VirtualHost>
```

### apache 80 跳转到 443

```apacheconf
<VirtualHost *:80>
    ServerName your.domain.com
    RewriteEngine on
    RewriteCond %{SERVER_PORT} !^443$
    
    #所有 http:// 变为 https://  url的内容不会匹配
    RewriteRule ^/?(.*)$ https://%{SERVER_NAME}/$1 [L,R]
    
    #所有 http:// 变为 https://  保持url地址内容不变
    RewriteRule ^.*$ https://%{SERVER_NAME}%{REQUEST_URI} [L,R] 
</VirtualHost>
```

###  Apache 正向代理

```apacheconf
<virtualHost *:80>
         ServerName 127.0.0.1:80
         DocumentRoot /usr/local/apache2/htdocs/www
         <Directory /usr/local/apache2/htdocs/www>
                Options FollowSymLinks
                AllowOverride All
                Order allow,deny
                Allow from all
         </Directory>
         ProxyRequests Off
         <Proxy *>
                Order deny,allow
                Allow from all
         </Proxy>
         # 访问127.0.0.1/fei1/ 的时候 代理到 http://192.168.1.151/
         ProxyPass /fei1/ http://192.168.1.151/   
         ProxyPassReverse /fei1/ http://192.168.1.151/
</VirtualHost>
```

![正向代理](/img/apache/ProxyPass.png "正向代理")



[Apache 官方文档]: http://httpd.apache.org/docs/2.4/	"Apache 官方文档"

