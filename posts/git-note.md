---
title: 'Git command note'
date: '2022-07-30T14:20:31.122Z'
author: 'Pierre'
thumbtail: 'https://i.imgur.com/p9A17VW.png'
---
# Git筆記
## 使用者設定
```
//設定使用者
$ git config --global user.name "YourName"
$ git config --global user.email "YourMail@gmail.com"
//查看使用者名稱
$ cat ~/.gitconfig
```

## ssh設定
```
$ ssh-keygen
//連按三次enter
//查看鑰匙
$ cat ~/.ssh/id_rsa.pub
```

## 初始化git
```
$ cd <目錄>
$ git init
$ echo "# reponame" >> README.md
$ git add README.md
$ git commit -m "first commit"
$ git remote add origin <github 網址>
$ git push -u origin master
```
