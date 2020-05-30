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
        <h2 className="text-sm text-shark-300 lg:text-base">content marketing &middot; prose fiction &middot; screenwriting</h2>
      </div>
    </div>

    <hr className="mt-8 text-shark-300 w-1/2 mx-auto" />

    <div className="container mx-auto mt-4 p-6 lg:w-1/2">
      <p>I wrote my first book in the 4th grade, a magical little thing called <em>The Wide World of Sharks</em>, a #1 Bestseller in its category (books written by me in the 4th grade) and sold out its 1st printing (of one copy).</p>
      <div className="text-shark-100 bg-shark-400 h-64 w-40 border mx-auto mt-8 p-2 pt-20 font-bold text-center">THE WIDE WORLD OF SHARKS</div>
      <p className="italic lg:text-center mt-8 mb-0">But that was the beginning of a writing career &hellip;</p>
    </div>

    <hr className="my-4 lg:mb-8 text-shark-300 w-1/2 mx-auto" />

    <div className="flex flex-col lg:flex-row">
      <section className="border m-4 p-4 bg-shark-100 shadow-xl">
        <h2 className="font-black text-center mb-4">COPYWRITING</h2>
        <p>For more than 20 years, I've worked for a variety of business, corporations, trade &amp; government organizations providing copywriting services including email copywriting, newsletter &amp; magazine writing/editing, video ad scripts, and more. For details and to see examples of my work, check out <a href="/copywriting" className="underline uppercase italic">Copywriting</a></p>
      </section>

      <section className="border m-4 p-4 bg-shark-100 shadow-xl">
        <h2 className="font-black text-center mb-4">PROSE FICTION</h2>
        <p>Storytelling has always been my first love in writing, starting when I penned short stories in high school. In 2012, I finished a 1st draft of my hardboiled detective novel (soon to be a series) called <span className="font-bold uppercase">The Joe Sputnik Chronicles</span>. I am currently (as of 2020) working on a cosmic horror series called <span className="font-bold uppercase">The 64 Testaments of Col. Krill</span>. Learn more about my <a href="/fiction" className="underline uppercase italic">novels</a>.</p>
      </section>
      
      <section className="border m-4 p-4 bg-shark-100 shadow-xl">
        <h2 className="font-black text-center mb-4">SCREENWRITING</h2>
        <p>I discovered the unique style of writing screenplays in college and have dabbled in the form ever since. To date, I've completed three spec scripts: (1) <span className="font-bold uppercase">The Illustrated Man</span>, [2] <span className="font-bold uppercase">The Geriatric Squad</span>, and [3] <span className="font-bold uppercase">The Briny Deep</span>. Learn more about my <a href="/screenwriting" className="underline uppercase italic">screenplays</a>.</p>
      </section>
    </div>

    <hr className="my-8 text-shark-300 w-1/2 mx-auto" />

    <div className="mb-8 p-6 pt-0">
      <h2 className="font-bold text-2xl mb-2">My story &rarr;</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo at magnam unde debitis quibusdam, architecto a voluptatem enim eos corporis, atque ipsum tempora sunt eligendi tempore labore veritatis! Vero, nobis.</p>
      <p>Odit, dicta cupiditate quo earum unde eos aliquid fugiat consequuntur, vero qui ut distinctio quasi molestias corrupti amet atque voluptates sed praesentium facilis expedita similique quod in accusantium. Expedita, dolor!</p>
      <p>Assumenda quidem quia rerum cumque sint libero incidunt, cum quos ab dolorem nulla excepturi hic nesciunt odio dignissimos, distinctio perferendis architecto consequatur esse id. Minima distinctio voluptatem quam beatae molestias!</p>
      <p className="underline font-medium">View my full resume as a PDF file.</p>  
    </div>

  </Layout>
)

export default IndexPage
