import React from 'react'

function Button({title} : {
    title : string
}) {
  return (
    <div className={`p-3 font-semibold rounded-lg font-xl bg-white
        hover:bg-neutral-200 transition-all duration-300 ease-in
     text-black ${title != "Coming Soon" ? "cursor-pointer" : "cursor-not-allowed" }`}>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 400 400"
  className="w-5 h-5 fill-current text-purple-500"
>
  <linearGradient id="solana-gradient" x1="0" y1="0" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#9945FF" />
    <stop offset="50%" stopColor="#8752F3" />
    <stop offset="100%" stopColor="#5497D5" />
  </linearGradient>
  <path
    fill="url(#solana-gradient)"
    d="M71 120c1-1 2-2 4-2h249c5 0 8 6 4 10l-52 51c-1 1-2 2-4 2H23c-5 0-8-6-4-10l52-51zm0 160c1-1 2-2 4-2h249c5 0 8 6 4 10l-52 51c-1 1-2 2-4 2H23c-5 0-8-6-4-10l52-51zm0-80c1-1 2-2 4-2h249c5 0 8 6 4 10l-52 51c-1 1-2 2-4 2H23c-5 0-8-6-4-10l52-51z"
  />
</svg>

      {title}
    </div>
  )
}

export default Button
