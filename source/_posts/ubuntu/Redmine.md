---
title: ubuntu16 Redmine
---
### Rvm+Ruby+Rails  【具体细节效果以后版本修改……】

rvm是用于管理多个ruby版本的一个管理器

```
sudo apt-get update 
sudo apt-get upgrade

gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
curl -sSL https://get.rvm.io | bash -s stable



//如果上面的连接失败，可以尝试:
curl -L https://raw.githubusercontent.com/wayneeseguin/rvm/master/binscripts/rvm-installer | bash -s stable	


载入 Rvm  环境[ 根据提示操作 ]
 source /etc/profile.d/rvm.sh
检查Rvm是否安装成功
 rvm -v
用 RVM 安装 Ruby 环境(同时把RubyGems也安装）
 rvm requirements
 rvm install 2.5.1 #可以到 Ruby(https://www.ruby-lang.org/en/downloads/)官网查看最新版本号，时间比较长
RVM装好后，可以执行以下命令将刚才安装的Ruby版本，设置系统ruby默认版本
 rvm use 2.5.1 --default
 
```

![root passwd](/img/ubuntu/Redmine/rvm01.png "rvm01")

由于某些原因，调整gem安装目录至国内镜像，有且仅有一个就好！

```
检查下Ruby和RubyGems的版本
 ruby -v
 gem -v
gem update --system 
gem -v 

换源
 gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org
 gem sources --add https://ruby.taobao.org/ --remove https://rubygems.org
 gem sources -l	//查看在用的gem源
 
 显示如下：
root@ubuntu:/data/server# gem sources -l
*** CURRENT SOURCES ***

https://rubygems.org/
https://gems.ruby-china.org/
root@ubuntu:/data/server# 

安装bundlers
 gem install bundler
安装Rails
 gem install rails  5.2.0             # 可以到rails官网查看最新版本号
 或者使用： gem install rails          #自己默认选择最新版
查看版本
 rails -v 
 
 最后检查一下所有版本
 rvm -v
 ruby -v
 rails -v
 bundler -v

适当升级
gem update --system

```

![root passwd](/img/ubuntu/Redmine/rvm02.png "rvm02")

### Redmine

```
wget http://www.redmine.org/releases/redmine-3.4.5.tar.gz
tar -zxvf  redmine-3.4.5.tar.gz -C /data/server
mv redmine-3.4.5 redmine
cd redmine
```

### 设置数据库连接

Redmine 需要 nginx 和 MySQL  自行安装这里不再安装

```
cp config/database.yml.example  config/database.yml 
vim config/database.yml
```

![Redmine database](/img/ubuntu/Redmine/Redmine_database.png "Redmine database")

### 安装依赖包

```
#查看缺少依赖包，安装完依赖后执行一次这个命令,直到到出现 Bundle complete!
bundle install --without development test   

我的值缺少依赖包如下：
apt-get install libmysqlclient-dev

不在缺少依赖，显示如下：
Bundle complete! 31 Gemfile dependencies, 55 gems now installed.
Gems in the groups development and test were not installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
```

![Redmine depend](/img/ubuntu/Redmine/Redmine_depend.png "Redmine depend")

### Session 存储秘钥

```
rake generate_secret_token
```

### 生成redmine的数据库表结构和初始化数据

```
RAILS_ENV=production rake db:migrate    //生成表结构
RAILS_ENV=production rake redmine:load_default_data //初始化数据

```

![Redmine database](/img/ubuntu/Redmine/Redmine_database2.png "Redmine database")

### 创建上传文件的目录，设置文件夹的权限

```
useradd redmine
passwd redmine  //设置redmine账户的密码

这里先不做
mkdir -p tmp tmp/pdf public/plugin_assets/
chown -R redmine:redmine files log tmp public/plugin_assets
chmod -R 755 files log tmp public/plugin_assets/

```



### 测试

```
ruby bin/rails server webrick -e production
ruby bin/rails server webrick -e production -b 0.0.0.0 -p3000  #允许远程访问
```

![Redmine test](/img/ubuntu/Redmine/Redmine_test.png "Redmine test")

### 其他

默认账户 admin/admin 初次登录需要修改密码，

![Redmine ok](/img/ubuntu/Redmine/Redmine_ok.png "Redmine ok")

关机重启后，需要再次运行 source /etc/profile.d/rvm.sh  载入环境





网站：

https://www.phusionpassenger.com/library/install/standalone/install/oss/tarball/

https://www.phusionpassenger.com/library/install/standalone/install/oss/tarball/



下载地址：

https://www.phusionpassenger.com/latest_stable_tarball

https://www.phusionpassenger.com/latest_stable_tarball

```
wget  https://www.phusionpassenger.com/latest_stable_tarball
tar -xzvf passenger-X.X.X.tar.gz -C /somewhere-permanent

```

rootroot





















内容start

代码分为行内代码和代码块

行内代码使用`<p>这里使用代码块</p>`    <p>这里没有代码块</p>



代码语法高亮

``` php
 echo "dddddd";
```


``` javascript
var abc = "123";
alert(abc);

```


![root passwd](/img/ubuntu/Redmine.png "fdfdsfd")



 [我是a里面的内容](http://example.com/ "这里是title")





























