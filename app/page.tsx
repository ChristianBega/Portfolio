import HomeLayout from '@/layouts/HomeLayout'
import PersonaColumn from '@/components/organisms/PersonaColumn'
import MobileFooterBar from '@/components/organisms/MobileFooterBar'
import RightColumnContent from '@/components/organisms/RightColumnContent'

export default function Home() {
  return (
    <>
    <HomeLayout
      left={<PersonaColumn />}
      right={<RightColumnContent />}
    />

    <MobileFooterBar />
    </>
  )
}
