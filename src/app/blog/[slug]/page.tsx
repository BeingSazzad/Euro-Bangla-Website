import BlogDetailsPage from "@/components/pages/blog/BlogDetailsPage";
import Wrapper from "@/layouts/Wrapper";
import { blogPosts, findBlog } from "@/data/blogPosts";

export const generateStaticParams = () => blogPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
   const { slug } = await params;
   const post = findBlog(slug);
   return {
      title: post ? "Blog Details | Euro Bangla Travels" : "Blog | Euro Bangla Travels",
   };
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
   const { slug } = await params;
   return (
      <Wrapper>
         <BlogDetailsPage slug={slug} />
      </Wrapper>
   );
};

export default page;
