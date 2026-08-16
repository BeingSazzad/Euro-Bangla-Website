import TourDetailsPage from "@/components/services/tours/TourDetailsPage";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Tour Details | Euro Bangla Travels",
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <Wrapper>
      <TourDetailsPage slug={slug} />
    </Wrapper>
  );
};

export default page;
