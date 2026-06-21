import HomeLayout from '@/components/layouts/HomeLayout'
import PersonaColumn from '@/components/organisms/PersonaColumn'

export default function Home() {
  return <HomeLayout left={<PersonaColumn />} right={<main />} />
}
