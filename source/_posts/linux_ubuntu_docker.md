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

-----------------------到这里docker已经安装完成------------------------

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
docker-compose rm   #删除所有容器
docker-compose stop App1  #停止App1
docker-compose -f docker-compose.yml down    停止并删除容器、网络、镜像、数据卷
```

![docker-compose](/img/linux_command01_2017_1224/linux_ubuntu_docker/docker_compose.png)



```
创建文件：  docker-compose.yml
运行： docker-compose up -d
```

