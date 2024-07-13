// lib/getMediumPosts.js

import Parser from "rss-parser";

const parser = new Parser();

export async function getMediumPosts() {
  const feed = await parser.parseURL("https://medium.com/feed/@bayunugrohodev");
  return feed.items;
}
