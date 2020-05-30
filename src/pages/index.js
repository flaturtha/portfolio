import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex flex-row justify-around mt-20">
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div className="">
        <h1 className="text-6xl">I'm a writer &hellip; </h1>
        <h2>content marketing &middot; prose fiction &middot; screenwriting</h2>
      </div>
    </div>
    <hr className="mt-20 text-shark-200" />
    <div className="mt-10">
      <h2 className="font-black">My story:</h2>
      <p>I wrote my 1st book in the 4th grade, a magical little thing called <em>The Wide World of Sharks</em>, a #1 Bestseller in its category (books written by me in the 4th grade) and sold out its 1st printing (of one copy). But that was the beginning of a writing career &hellip; </p>
    </div>
    <div>
      <h2>Resume:</h2>
    </div>
    <div>
      <h2>What I write:</h2>
    </div>
  </Layout>
)

export default IndexPage
