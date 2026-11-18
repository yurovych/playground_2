import { Suspense } from 'react'
import RandomCards from '@/components/RandomCards'
import Divider from '@/components/Divider'
import AskCircle from '@/components/AskCircle'
import ProductCard from '@/components/ProductCard'
import { ProductType } from '@/lib/types'

async function TestData() {
  const response = await fetch('https://dummyjson.com/carts')

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const posts = await response.json()

  console.log(posts.carts[0], 'asd')

  return (
    <div className={'flex gap-2 justify-center'}>
      {posts.carts[0].products.map((item: ProductType) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main className="h-full">
      <RandomCards />
      <Divider />
      <AskCircle />
      <Divider />

      <Suspense fallback={<p>Loading data...</p>}>
        <TestData />
      </Suspense>
    </main>
  )
}
