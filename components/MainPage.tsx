'use client'

import OneCard from '@/components/OneCard'
import clsx from 'clsx'
import { useState } from 'react'

const mockCards = [
  { value: 1, color: 'bg-blue-300' },
  { value: 2, color: 'bg-blue-400' },
  { value: 3, color: 'bg-blue-500' },
  { value: 4, color: 'bg-blue-600' },
  { value: 5, color: 'bg-blue-700' },
]

const MainPage = () => {
  const [cards, setCards] = useState(mockCards)
  const [shuffleKey, setShuffleKey] = useState(0)

  const handleShuffle = () => {
    const shuffled = [...mockCards]

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))

      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    setCards(shuffled)
    setShuffleKey((prev) => prev + 1)
  }

  return (
    <div className="flex flex-col items-center pt-30 gap-5">
      <div className={'flex bg-gray-200 w-1/2 p-2 rounded-xl gap-2'}>
        {cards.map((card) => (
          <OneCard key={`${shuffleKey}-${card.value}`} data={card} />
        ))}
      </div>

      <button
        onClick={handleShuffle}
        type={'button'}
        className={clsx(
          'bg-white border-2 border-black rounded-xl p-2',
          'hover:bg-gray-200 active:bg-gray-300 cursor-pointer',
        )}
      >
        Shuffle cards
      </button>
    </div>
  )
}

export default MainPage
