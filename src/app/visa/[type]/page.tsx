import VisaDetailsPage from "@/components/services/visa/VisaDetailsPage";
import VisaDestinationDetail from "@/components/services/visa/VisaDestinationDetail";
import { findVisaDestination } from "@/data/visaDestinations";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Visa | Euro Bangla Travels",
};

const page = async ({ params }: { params: Promise<{ type: string }> }) => {
  const { type } = await params;
  const destination = findVisaDestination(type);

  return (
    <Wrapper>
      {destination ? <VisaDestinationDetail dest={destination} /> : <VisaDetailsPage slug={type} />}
    </Wrapper>
  );
};

export default page;
