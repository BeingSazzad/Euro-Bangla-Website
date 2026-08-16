import LegalPage from "@/components/pages/legal/LegalPage";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Privacy Policy | Euro Bangla Travels",
};

const page = () => (
  <Wrapper>
    <LegalPage kind="privacy" />
  </Wrapper>
);

export default page;
