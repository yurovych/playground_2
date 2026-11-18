import { ProductType } from '@/lib/types'
import React from 'react'
import clsx from 'clsx'

interface ProductCardProps {
  item: ProductType
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div className={clsx('flex flex-col gap-2', 'border-2 rounded-xl p-2')} key={item.id}>
      <p className={'text-2xl'}>{item.title}</p>
      <p className={'text-3xl w-full text-end'}>{item.price}</p>
    </div>
  )
}

export default ProductCard
