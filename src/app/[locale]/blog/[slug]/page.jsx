import { notFound } from "next/navigation";
import { getMediumPosts } from "@/lib/getMediumPosts";

export async function generateStaticParams() {
  const posts = await getMediumPosts();
  return posts.map((post) => ({
    slug: post.title.toLowerCase().split(" ").join("-"),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const posts = await getMediumPosts();
  const post = posts.find(
    (post) => post.title.toLowerCase().split(" ").join("-") === slug,
  );

  if (!post) {
    return {
      title: "Not Found",
      description: "The post you are looking for does not exist.",
    };
  }

  return {
    title: post.title + " - " + "- M. Bayu Dwi Nugroho",
    description:
      post["content:encodedSnippet"] || "Read this amazing blog post.",
  };
}

const BlogDetail = async ({ params }) => {
  const { slug } = params;
  const posts = await getMediumPosts();
  const post = posts.find(
    (post) => post.title.toLowerCase().split(" ").join("-") === slug,
  );

  if (!post) {
    return notFound();
  }

  return (
    <div className="blog-detail">
      <h1 className="mb-5 font-bold text-3xl">{post.title}</h1>
      <div className="mb-5 text-gray-500">
        By {post.creator} on {new Date(post.isoDate).toLocaleDateString()}
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post["content:encoded"] }}
      />
      <div className="mt-5">
        {post.categories &&
          post.categories.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-blue-100 mr-2 mb-2 px-2 py-1 rounded-full text-blue-800 text-xs"
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default BlogDetail;
