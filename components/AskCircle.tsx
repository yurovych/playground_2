'use client'

import clsx from 'clsx'
import { useState } from 'react'

const AskCircle = () => {
  const [rotation, setRotation] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)

  const handleSpin = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setRotation((prev) => prev + 360 * 5)
  }

  const handleTransitionEnd = () => {
    setIsSpinning(false)
  }

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Wheel */}
      <div className="relative flex h-64 w-64 items-center justify-center">
        {/* Chart */}
        <div
          className={clsx(
            'h-56 w-56 rounded-full relative',
            'bg-[conic-gradient(from_-14deg,#dc2626_0deg_34deg,#16a34a_34deg_360deg)]',
            'shadow-lg',
          )}
        />

        <p className={'absolute z-1 left-28 top-7 text-2xl'}>Yes</p>
        <p className={'absolute z-1 left-30 top-14 text-2xl'}>😈</p>
        <p className={'absolute z-1 left-28 bottom-17 text-2xl'}>No</p>
        <p className={'absolute z-1 left-27 bottom-7 text-4xl'}>🤩</p>

        {/* Arrow */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full drop-shadow-lg z-2"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 3s cubic-bezier(0.15, 0.85, 0.15, 1)',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {/* Arrow body */}
          <path
            d="M100 12 L110 94 L100 85 L90 94 Z"
            fill="#ffffff"
            stroke="#1f2937"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Center axis */}
          <circle cx="100" cy="100" r="11" fill="#ffffff" stroke="#1f2937" strokeWidth="4" />

          <circle cx="100" cy="100" r="4" fill="#dc2626" />
        </svg>
      </div>

      <button
        type="button"
        onClick={handleSpin}
        disabled={isSpinning}
        className={clsx(
          'rounded-xl border-2 border-black bg-white p-3',
          'font-semibold transition-colors',
          'hover:bg-gray-200 active:bg-gray-300',
          'disabled:cursor-not-allowed disabled:opacity-50',
        )}
      >
        {isSpinning ? 'Spinning...' : 'Is William balding?'}
      </button>
    </div>
  )
}

export default AskCircle
