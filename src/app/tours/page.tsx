import ToursPage from "@/components/services/tours";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Tours & Holidays | Euro Bangla Travels",
  description: "Europe, Dubai, KSA and Turkey tours for families, honeymoons and groups.",
};

const page = () => (
  <Wrapper>
    <ToursPage />
  </Wrapper>
);

export default page;
