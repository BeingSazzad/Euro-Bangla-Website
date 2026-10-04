import Wrapper from "@/layouts/Wrapper";
import InnerHeader from "@/layouts/headers/InnerHeader";
import BreadCrumb from "@/components/common/BreadCrumb";
import AboutGallery from "@/components/pages/about/AboutGallery";
import FooterThree from "@/layouts/footers/FooterThree";

export const metadata = {
  title: "Photo Gallery | Euro Bangla Travels",
  description: "Browse our moments and memories from Hajj & Umrah pilgrimages, European tours, visa events and team milestones.",
};

const GalleryPage = () => {
  return (
    <Wrapper>
      <InnerHeader />
      <main>
        <BreadCrumb title="Photo Gallery" sub_title="Gallery" raw={true} />
        <AboutGallery />
      </main>
      <FooterThree />
    </Wrapper>
  );
};

export default GalleryPage;
