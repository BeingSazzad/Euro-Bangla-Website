import HotelDetailsPage from "@/components/services/hotels/HotelDetailsPage";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Hotel Details | Euro Bangla Travels",
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <Wrapper>
      <HotelDetailsPage slug={slug} />
    </Wrapper>
  );
};

export default page;
