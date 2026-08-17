import InquiryPage from "@/components/services/inquiry";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Request a Quote | Euro Bangla Travels",
  description: "Send a flight, Hajj, tour, hotel, bus or visa inquiry and receive a quote with a reference number.",
};

const page = () => (
  <Wrapper>
    <InquiryPage />
  </Wrapper>
);

export default page;
