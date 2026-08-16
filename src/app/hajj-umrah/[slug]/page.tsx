import HajjDetailsPage from "@/components/services/hajj/HajjDetailsPage";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Hajj & Umrah Package | Euro Bangla Travels",
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <Wrapper>
      <HajjDetailsPage slug={slug} />
    </Wrapper>
  );
};

export default page;
