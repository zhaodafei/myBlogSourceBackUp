---
title: Linux ubuntu docker
---
### Linux ubuntu docker

前提条件 Docker要求Ubuntu系统内核版本高于3.10，查看内核版本

```
uname -r
```

![获取docker安装包报错](/img/linux_command01_2017_1224/linux_ubuntu_docker/docker_get_error.png)

系统版本没有问题，docker安装一直包这错。试一下docker命令，检查镜像信息

```
docker images
现在Ubuntu系统提示安装docker命令，我们执行
apt-get install docker.io
```

![根据系统提示安装docker](/img/linux_command01_2017_1224/linux_ubuntu_docker/docker_instal.png)

### 查看docker版本

```
docker version

sudo docker run hello-world    【确认docker是否安装成功】
```

![却docker是否安装成功](/img/linux_command01_2017_1224/linux_ubuntu_docker/docker_v.png)



-----------------------到这里docker已经安装完成，下面试一下docker的使用命令--------------------------

-----------------------使用docker提醒： 删除images（镜像）需要性停止运行该container------------------

```
docker images
docker rm `docker ps -aq`    【删除所有状态container】
docker ps -a        
docker rm
docker stop
docker rmi   
```

docker命令参考地址   <a href="http://www.runoob.com/docker/docker-command-manual.html"  target="_blank" >Docker命令大全</a>

### 搜索可用docker镜像 && 下载容器镜像

```
docker search tutorial
docker pull learn/tutorial
```

![下载容器镜像](/img/linux_command01_2017_1224/linux_ubuntu_docker/docker_pull.png)

### 在docker镜像中运行hello world

```
docker run命令有两个参数，一个是镜像名，一个是要在镜像中运行的命令。
docker run learn/tutorial echo "hello world"
```

![docker hello world](/img/linux_command01_2017_1224/linux_ubuntu_docker/docker_run.png)



参考地址

```
docker run --name nginx -p 80:80 -d -v /data/www/html:/usr/share/nginx/html nginx

docker run --name nginx -p 80:80 -v /data/www/html:/usr/share/nginx/html -v /data/www/default.conf:/etc/nginx/conf.d/default.conf -d nginx
```

[docker 搭建nginx+ PHP + mysql 开发环境](http://www.sail.name/2017/09/26/retalk-use-docker-to-build-development-environment-of-php-mysql-nginx/ "docker 搭建nginx+ PHP + mysql 开发环境")



### 安装docker-compose

```
sudo curl -L https://github.com/docker/compose/releases/download/1.17.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

curl -L https://raw.githubusercontent.com/docker/compose/1.8.0/contrib/completion/bash/docker-compose > /etc/bash_completion.d/docker-compose    【bash 补全命令】

docker-compose -version    【检测 docker-compose 版本】

sudo rm /usr/local/bin/docker-compose    【卸载docker-compose】

-----------------------------------------------

docker-compose 命令
docker-compose ps   查看容器运行状态
docker-compose restart #重启所有容器
docker-compose restart App1  #重启App1
docker-compose stop #停止所有容器
docker-compose stop App1  #停止App1

```

![docker-compose](/img/linux_command01_2017_1224/linux_ubuntu_docker/docker_compose.png)

### 

开始使用docker compose















参考地址： 

[docker-Compose 安装与卸载](https://yeasy.gitbooks.io/docker_practice/content/compose/install.html "docker-Compose 安装与卸载")
[docker-Compose 安装与卸载](http://blog.csdn.net/ljf10010/article/details/47950339 "docker-Compose 安装与卸载")
[docker-Compose 安装与卸载官方地址](https://docs.docker.com/compose/install/#install-compose "docker-Compose 安装与卸载官方地址")















 [docker 中文](http://www.docker.org.cn/book/docker/what-is-docker-16.html "docker 中文 ")