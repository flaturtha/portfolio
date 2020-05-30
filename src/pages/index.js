import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex align-center flex-col lg:flex-row items-center">
      <div className="mx-auto">
        <Image />
      </div>
      <div className="mt-4 lg:mt-0 lg:mx-auto lg:flex lg:flex-col">
        <h1 className="text-center text-3xl lg:text-6xl">I'm a writer &hellip;</h1>
        <h2 className="text-sm text-gray-400 lg:text-base">content marketing &middot; prose fiction &middot; screenwriting</h2>
      </div>
    </div>

    <hr className="mt-8 text-shark-300 w-1/2 mx-auto" />

    <div className="container mx-auto mt-4 p-6 lg:w-1/2">
      <p>I wrote my first book in the 4th grade, a magical little thing called <em>The Wide World of Sharks</em>, a #1 Bestseller in its category (books written by me in the 4th grade) and sold out its 1st printing (of one copy).</p>
      <p className="italic">But that was the beginning of a writing career &hellip;</p>
      <div className="text-white bg-shark-400 h-64 w-40 border mx-auto mt-8 p-2 pt-20 font-bold text-center">THE WIDE WORLD OF SHARKS</div>
    </div>

    <hr className="mt-4 text-shark-300 w-1/2 mx-auto" />


  </Layout>
)

export default IndexPage
