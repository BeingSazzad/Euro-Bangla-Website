import Contact from "@/components/contact";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Contact | Euro Bangla Travels",
  description: "Call, email or WhatsApp Euro Bangla Travels for flights, Hajj, tours, hotels, bus and visa inquiries.",
};
const page = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  )
}

export default page