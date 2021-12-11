---
title: ubuntu -docker
date: 2014-02-05
categories: 
- Docker
tags:
- Docker
---
ubuntu -docker
ubuntu -docker
ubuntu -docker

<!-- more -->

### Linux ubuntu docker

前提条件 Docker要求Ubuntu系统内核版本高于3.10，查看内核版本

```
uname -r
```

![获取docker安装包报错](/img/ubuntu/docker/docker_get_error.png)

系统版本没有问题，docker安装一直包这错。试一下docker命令，检查镜像信息

```
docker images
现在Ubuntu系统提示安装docker命令，我们执行
apt-get install docker.io
```

![根据系统提示安装docker](/img/ubuntu/docker/docker_instal.png)

### 查看docker版本

```
docker version

sudo docker run hello-world    【确认docker是否安装成功】
```

![却docker是否安装成功](/img/ubuntu/docker/docker_v.png)

-----------------------到这里docker已经安装完成------------------------

### 安装docker-compose

```
sudo curl -L https://github.com/docker/compose/releases/download/1.17.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

curl -L https://raw.githubusercontent.com/docker/compose/1.8.0/contrib/completion/bash/docker-compose > /etc/bash_completion.d/docker-compose    【bash 补全命令】
////////如果出现超时，加上2个参数： ///////////
--connect-timeout 100000 -m 1000000
-m为数据最大传输时间
curl -L "https://github.com/docker/compose/releases/download/1.9.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose --connect-timeout 100000 -m 1000000 
////////////////////////////////////////////

docker-compose -version    【检测 docker-compose 版本】

sudo rm /usr/local/bin/docker-compose    【卸载docker-compose】

-----------------------------------------------

docker-compose 命令
docker-compose ps   查看容器运行状态
docker-compose restart #重启所有容器
docker-compose restart App1  #重启App1
docker-compose stop #停止所有容器
docker-compose rm   #删除所有容器
docker-compose stop App1  #停止App1
docker-compose -f docker-compose.yml down    停止并删除容器、网络、镜像、数据卷
```

![docker-compose](/img/ubuntu/docker/docker_compose.png)

-----------------------到这里docker-compose已经安装完成------------------------

### Docker Compose 搭建 Rails
温馨提示： 复制粘贴命令的时候注意别丢信息

#### 创建项目目录

```
mkdir myapp
cd myapp
```

#### 创建 Dockerfile文件，包含以下内容

```
FROM ruby:2.3.3
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /myapp
WORKDIR /myapp
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
RUN bundle install
COPY . /myapp
```

#### 创建 Gemfile 文件，包含以下内容

```
source 'https://rubygems.org'
gem 'rails', '5.0.0.1'
```

#### 创建空的 Gemfile.lock 文件

```
touch Gemfile.lock
```

![docker-compose Rails02](/img/ubuntu/docker/docker_compose_Rails02.png)

#### 创建一个 docker-compose.yml ，包含以下内容

温馨提示：
docker-compose.yml  中 version: '3' 改为 version: '2'

```
version: '2'
services:
  db:
    image: postgres
  web:
    build: .
    command: bundle exec rails s -p 3000 -b '0.0.0.0'
    volumes:
      - .:/myapp
    ports:
      - "3000:3000"
    depends_on:
      - db
```

#### 接下来执行

```
docker-compose run web rails new . --force --database=postgresql
```

查看现在的目录：  ls -l   

![docker-compose Rails](/img/ubuntu/docker/docker_compose_Rails03.png)

#### 修改权限，重建 Docker 镜像

```
sudo chown -R $USER:$USER .
docker-compose build
```

![docker-compose Rails](/img/ubuntu/docker/docker_compose_Rails04.png)

#### 修改 config/database.yml 文件

如果担心修改错误，可以先备份原文件： cp database.yml database.yml_backup

```
清空 database.yml 文件
echo " ">database.yml

database.yml 文件写入以下内容

default: &default
  adapter: postgresql
  encoding: unicode
  host: db
  username: postgres
  password:
  pool: 5

development:
  <<: *default
  database: myapp_development


test:
  <<: *default
  database: myapp_test

```

![docker-compose Rails](/img/ubuntu/docker/docker_compose_Rails05.png)

#### 启动应用

```
docker-compose up
```

![docker-compose Rails](/img/ubuntu/docker/docker_compose_Rails06.png)

#### 创建数据库，在另一个终端中，执行

```
docker-compose run web rake db:create
```

![docker-compose Rails](/img/ubuntu/docker/docker_compose_Rails07.png)

用浏览器访问 [http://localhost:3000](http://localhost:3000/) ，你会看到 Rails 的欢迎信息：

![docker-compose Rails](/img/ubuntu/docker/docker_compose_Rails.png)

#### If you are using [Docker Machine](https://docs.docker.com/machine/overview/), then `docker-machine ip MACHINE_VM` returns the Docker host IP address, to which you can append the port (`<Docker-Host-IP>:3000`).

![docker-compose Rails](/img/ubuntu/docker/docker_compose_Rails08.png)

[Compose and Rail 官方文档](https://docs.docker.com/compose/rails/#rebuild-the-application "docker-compose 安装Rails官方文档")