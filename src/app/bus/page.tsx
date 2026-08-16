import BusPage from "@/components/services/bus";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Bus Tickets | Euro Bangla Travels",
  description: "Domestic and international bus ticket quotes for popular routes.",
};

const page = () => (
  <Wrapper>
    <BusPage />
  </Wrapper>
);

export default page;
