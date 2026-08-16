import HotelsPage from "@/components/services/hotels";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Hotels | Euro Bangla Travels",
  description: "Hotel quotes for city stays, Haram-side rooms and transit nights.",
};

const page = () => (
  <Wrapper>
    <HotelsPage />
  </Wrapper>
);

export default page;
