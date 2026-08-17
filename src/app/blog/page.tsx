import Blog from "@/components/pages/blog";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Blog | Euro Bangla Travels",
};

const page = () => {
   return (
      <Wrapper>
         <Blog />
      </Wrapper>
   );
};

export default page;
