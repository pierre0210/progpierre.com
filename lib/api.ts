// src from: https://github.com/vercel/next.js/blob/canary/examples/blog-starter/lib/api.ts
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import PostMatter from '../interfaces/PostMatter'
import Post from '../interfaces/Post'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

	return {
		slug: realSlug,
		data: data as PostMatter,
		content,
	}
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
		.filter((slug) => slug.endsWith(".md"))
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))
  return posts
}

/*
At the start of all posts must contain meta(comment)
---
title: 'Some Title'
date: '2022-07-30T07:33:55.520Z'
author: 'Pierre'
thumbnail: 'https://example.com/example.jpg'
---
*/