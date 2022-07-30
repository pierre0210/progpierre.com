// src from: https://github.com/vercel/next.js/blob/canary/examples/blog-starter/lib/api.ts
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

	return {
		slug: realSlug,
		data,
		content,
	}
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))
  return posts
}

/*
At the start of all posts must contain meta
---
title: 'Some Title'
date: '2022-07-30T07:33:55.520Z'
author: 'Pierre'
---
*/