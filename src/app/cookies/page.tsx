import LegalPage from "@/components/pages/legal/LegalPage";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Cookie Policy | Euro Bangla Travels",
};

const page = () => (
  <Wrapper>
    <LegalPage kind="cookies" />
  </Wrapper>
);

export default page;
