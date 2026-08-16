import LegalPage from "@/components/pages/legal/LegalPage";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Terms & Conditions | Euro Bangla Travels",
};

const page = () => (
  <Wrapper>
    <LegalPage kind="terms" />
  </Wrapper>
);

export default page;
