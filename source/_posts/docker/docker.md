---
title: ubuntu -docker
date: 2015-04-04
categories: 
- Docker
tags:
- Docker
---

`docker`使用建议,一个`docker` 容器中运行一种服务

<!-- more -->

### ubuntu  安装 `docker`

```
sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
    
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

#这条命令修改文件位置:       /etc/apt/sources.list
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
   
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io

#验证:  https://docs.docker.com/get-started/
sudo docker run hello-world
此命令下载测试映像并在容器中运行它。当容器运行时，它会打印一条信息性消息并退出
```

 [官网Ubuntu安装Docker CE](https://docs.docker.com/install/linux/docker-ce/ubuntu/ "官网Ubuntu安装Docker CE")

![docker hello world](/img/docker/docker_helloWorld.png "hello world")

### 配置 `docker`加速

```
cd /etc/docker/ 
touch daemon.json  #没有这个文件手动创建
文件里面内容如下:
-----------使用docker官方镜像-----以后下载镜像会慢-----
{
    "registry-mirrors": [
        "https://registry.docker-cn.com"
    ],
    "insecure-registries": []
}

--------- 使用阿里云进行加速----先到阿里云申请,这里我已经申请好了------
{
    "registry-mirrors": [
        "https://qlc9qgml.mirror.aliyuncs.com"     
    ],
    "insecure-registries": []
}

-----------------------------------
sudo systemctl daemon-reload
sudo systemctl restart docker   #重启docker
```

 [阿里云官方镜像加速文档](https://help.aliyun.com/document_detail/60750.html?spm=a2c4g.11186623.6.549.65384685bRPs0U "阿里云官方镜像加速文档")

### `docker`安装`nginx`01

```
docker search nginx  #查看nginx镜像
docker pull nginx    #拉取官方镜像,上面没有配置好docker加速器这里会下非常慢
docker images nginx  #查看镜像
docker run --name container01 -p 8081:80 -d nginx   #container01 这个名随便起
#--name 容器名字(自己定义)
#-p 端口映射
#-d  后台运行

docker ps       #列出所又正在运行的容器 containers 
#这里列出的容器id记下来,下面会用到

#访问测试,这里是端口8081
http://127.0.0.1:8081/
```

![nginx 镜像](/img/docker/nginx_image.png "nginx 镜像")

![nginx ok](/img/docker/nginx_ok.png "nginx ok")

### `docker`安装`nginx`02 部署

```
#宿主机中创建目录
mkdir -p /data/server/docker_fei/nginx/www \
/data/server/docker_fei/nginx/logs \
/data/server/docker_fei/nginx/conf

#拷贝容器内 nginx 默认配置文件到本地目录,e765b2939521 容器id可以用 docker ps 查看
docker cp e765b2939521:/etc/nginx/nginx.conf /data/server/docker_fei/nginx/conf

#部署, 把宿主机中的目录挂载(映射)到docker容器中,这里会!!!重新在创建一个容器!!!
docker run -d -p 8082:80 \
--name container04 \
-v /data/server/docker_fei/nginx/www:/usr/share/nginx/html \
-v /data/server/docker_fei/nginx/conf/nginx.conf:/etc/nginx/nginx.conf  \
-v /data/server/docker_fei/nginx/logs:/var/log/nginx \
nginx
#-p 8082:80： 将容器的 80 端口映射到主机的 8082 端口
# -v 将宿主机目录挂载(映射)到容器中

cd /data/server/docker_fei/nginx/www
touch index.html
vim index.html #内容如下
hello world test /data/server/docker_fei/nginx/www 

#访问测试,这里是端口8082
http://127.0.0.1:8082/


docker stop container04     #关闭 container04 这个容器
docker start container04    #启动 container04 这个容器
docker restart  container04  #重启 container04 这个容器

##问题  宿主机中的目录挂载(映射)到docker容器中,
```

![nginx ok2](/img/docker/container_nginx.png "nginx ok2")

### 修改挂载(映射)文件、端口??????

```
文件地址:
/var/lib/docker/containers/容器的hash值
在这个目录下修改文件 hostconfig.json 
Binds  挂载目录
PortBindings  端口


修改完注意保持原来的格式,还是一行json
```



### 进入`docker`容器没有vim命令

```
docker exec -it container01 /bin/bash  #进入container01这个容器
docker exec -it e765b2939521 /bin/bash  #进入e765b2939521这个容器

在docker容器中安装vim 命令,先同步在安装
apt-get update  #同步 /etc/apt/sources.list 和 /etc/apt/sources.list.d 中列出的源的索引
apt-get install vim  #这个时候安装
```



### 其他

```
docker --version
docker info
docker image ls  #列出所有的镜像
docker ps       #查看已经运行容器
docker ps -a    #查看所有容器
docker rm 容器名字(或者容器id)   #删除容器

docker container --help    #容器帮助命令
docker container ls        #查看在运行容器
docker container ls -a      #查看所有容器
docker container ls -aq     #查看所有容器id
docker container ls --all   #查看所有容器      
docker stop container04     #关闭 container04 这个容器
docker start container04    #启动 container04 这个容器
docker restart  container04  #重启 container04 这个容器

docker exec -it container01 /bin/bash  #进入container01这个容器
docker exec -it e765b2939521 /bin/bash  #进入e765b2939521这个容器
docker attach e765b2939521    #进入e765b2939521这个容器

#docker inspect container_name | grep -A10 -n Mounts  #查看容器已经挂载的目录
docker inspect container04 | grep  -A10 -n   Mounts

#docker create ubuntu:latest  #可以指定版本
docker run --name 容器名字

移除所有容器和镜像(大扫除)
docker kill $(docker ps -q) ; docker rm $(docker ps -a -q) ; docker rmi $(docker images -q -a)
```



 [Docker 资源汇总](https://www.runoob.com/docker/docker-resources.html"Docker 资源汇总")