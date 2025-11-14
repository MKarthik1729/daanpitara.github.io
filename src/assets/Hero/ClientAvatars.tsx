import React from 'react'

type Avatar = {
  src: string
  alt?: string
}

type Props = {
  avatars: Avatar[]
  countLabel?: string
}

export const ClientAvatars: React.FC<Props> = ({ avatars, countLabel }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center -space-x-3">
        {avatars.slice(0, 5).map((a, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={a.src}
            alt={a.alt || `avatar-${i}`}
            className={`h-[42px] w-[42px] rounded-full border-[0.77px] border-[#6A7282] object-cover`}
          />
        ))}

      {countLabel ? (
        <div 
          className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-[0.77px] border-[#6A7282] bg-white font-['Satoshi'] text-[15px] font-black leading-[20.813px] text-[#0F71A8]"
        >
          {countLabel}
        </div>
      ) : null}
            </div>
    </div>
  )
}

export default ClientAvatars
