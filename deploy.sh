#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ./vuepress

git init
git add -A
git commit -m '发布更新'
git push

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/town2016/talking_blog.git master

cd -