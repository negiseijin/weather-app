import Link from 'next/link'
import React from 'react'

const Header: React.VFC = React.memo(() => (
  <header className="text-gray-600 body-font">
    <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
      <a className="flex items-center mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl md:mb-0">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <span className="ml-3 text-xl">weater</span>
      </a>
      <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
        <Link href="/">
          <a className="mr-5 hover:text-gray-900">Home</a>
        </Link>
        <Link href="/about">
          <a className="mr-5 hover:text-gray-900">About</a>
        </Link>
        <Link href="/users">
          <a className="mr-5 hover:text-gray-900">Users List</a>
        </Link>
        <a href="/api/users" className="mr-5 hover:text-gray-900">
          Users API
        </a>
      </nav>
    </div>
  </header>
))

export default Header
