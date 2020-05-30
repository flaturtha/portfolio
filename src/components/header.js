import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header ({ siteTitle }) {

  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="bg-transparent p-6 shadow-md mb-8">
      <div className="container mx-auto flex items-center justify-between flex-wraps">
        <Link to={'/'}>
          <div className="flex items-center flex-shrink-0 text-shark-500 mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span className="font-semibold text-xl tracking-tight uppercase">{ siteTitle }</span>
          </div>
        </Link>
        
        <div className="block lg:hidden">
          <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 text-shark-500 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        
        <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto`}>
          <div className="text-sm mr-8">
            <Link to={`/testimonials`} href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Testimonials
            </Link>
            <Link to={`/copywriting`} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Copywriting
            </Link>
            <Link to={`/fiction`} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Fiction
            </Link>
            <Link to={`/essays`} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Essays
            </Link>
            <Link to={`/blog`} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Blog
            </Link>
          </div>
          <Link to={'/hire-me'} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
