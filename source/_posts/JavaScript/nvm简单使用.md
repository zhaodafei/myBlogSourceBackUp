01) 下载 nvm  nvm-setup.zip
https://github.com/coreybutler/nvm-windows/releases  选择 nvm-setup.zip 版本
https://github.com/coreybutler/nvm-windows/releases/download/1.1.8/nvm-setup.zip
https://github.com/coreybutler/nvm-windows/releases/download/1.1.8/nvm-setup.zip

02) nvm version 查看版本
03) 修改配置文件settings.txt,设置下载源
    node_mirror: https://npm.taobao.org/mirrors/node/ 
    npm_mirror: https://npm.taobao.org/mirrors/npm/

04) 安装node.js 版本
    nvm install 14.18.0
    nvm install 8.17.0

05) 列出已经安装的node版本 
    nvm ls

06) 选择使用 node 版本
    nvm use 14.18.0
    nvm use 8.17.0

07) 查看node 版本
    node -v
    npm -v

08) 查看远程所有可以用的node版本
    nvm ls available (windows中命令)
    
    
    

************************** node 8.17.0 ***********
本文采用局部安装使用,所以用的命令带 npx hexo,如果是全局安装的可以直接使用 hexo 命令
比如 npx hexo g   ;   hexo g

01) 局部安装 hexo 包
npm install hexo

02) 查看 hexo 版本
npx hexo -v 

03) 开始使用 
npx hexo g