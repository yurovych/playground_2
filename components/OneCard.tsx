import clsx from 'clsx'

interface OneCardProps {
  data: { value: number; color: string }
}

const OneCard: React.FC<OneCardProps> = ({ data }) => {
  return (
    <div
      className={clsx(
        'h-30 flex justify-center items-center w-full',
        'rounded-xl',
        'animate-[flipCard_1.5s_ease_forwards]',
        data.color,
      )}
    >
      <p className={'text-4xl'}>{data.value}</p>
    </div>
  )
}

export default OneCard
