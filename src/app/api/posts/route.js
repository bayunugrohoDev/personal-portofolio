import { getMediumPosts } from "@/lib/getMediumPosts";

export async function GET(request) {
  try {
    const posts = await getMediumPosts();
    console.log('posts',posts)
    return new Response(JSON.stringify(posts), {
      revalidatePath: true,
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch posts" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
