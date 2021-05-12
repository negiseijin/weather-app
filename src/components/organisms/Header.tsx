import Link from 'next/link'
import React from 'react'

const Header: React.VFC = React.memo(() => (
  <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl items-center text-gray-900 mb-4 md:mb-0">
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
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
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
