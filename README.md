# progpierre.com

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

### Add post

Put markdown files inside `posts` folder before building. 
At the start of every post should contain meta info as follows:
```
---
title: 'Some Title'
date: '2022-07-30T07:33:55.520Z'
author: 'Pierre'
thumbtail: 'https://i.imgur.com/example.png'
---
```
Thumbtail default option only allows images from imgur, you can add more domain name in `next.config.js`.

### TODO
- [ ] Footer
- [ ] API
