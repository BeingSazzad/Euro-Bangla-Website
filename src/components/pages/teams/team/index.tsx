import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderThree"
import TeamArea from "./TeamArea"
import FooterSix from "@/layouts/footers/FooterSix"

const Team = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb title="page.team" sub_title="page.teamShort" />
            <TeamArea />
         </main>
         <FooterSix />
      </>
   )
}

export default Team
