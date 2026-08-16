import FlightsPage from "@/components/services/flights";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Air Tickets | Euro Bangla Travels",
  description: "Domestic and international flight inquiries — one way, round trip and multi-city.",
};

const page = () => (
  <Wrapper>
    <FlightsPage />
  </Wrapper>
);

export default page;
