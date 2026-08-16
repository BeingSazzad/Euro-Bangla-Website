import About from "@/components/pages/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "About Us | Euro Bangla Travels",
  description: "Euro Bangla Travels plans flights, Hajj & Umrah, tours, hotels, bus tickets and visa support.",
};
const page = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}

export default page