import RandomCards from '@/components/RandomCards'
import Divider from '@/components/Divider'
import AskCircle from '@/components/AskCircle'

export default function Home() {
  return (
    <main className="h-full">
      <RandomCards />
      <Divider />
      <AskCircle />
    </main>
  )
}
