import VisaDetailsPage from "@/components/services/visa/VisaDetailsPage";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Visa Type | Euro Bangla Travels",
};

const page = async ({ params }: { params: Promise<{ type: string }> }) => {
  const { type } = await params;
  return (
    <Wrapper>
      <VisaDetailsPage slug={type} />
    </Wrapper>
  );
};

export default page;
