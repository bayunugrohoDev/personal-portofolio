import React from "react";
import Blog from "./_components/Blog";

export const metadata = {
  title: "Blog - M Bayu Dwi Nugroho ",
  description: "Welcome to my blog",
};

export default function Page() {
  // url https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bayunugrohodev
  return (
    <>
      <Blog />
    </>
  );
}
