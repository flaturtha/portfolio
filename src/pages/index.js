import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Mug from "../components/mug"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex align-center justify-center flex-col lg:flex-row items-center">
      <div className="mx-auto">
        <Mug />
      </div>
      <div className="mt-4 lg:mt-0 lg:mx-auto">
        <h1 className="text-center text-3xl lg:text-6xl">I'm a writer &hellip;</h1>
        <h2 className="text-center text-shark-400 lg:text-lg"><Link to="#copywriting" className="underline">copywriting</Link> &middot; <Link to="#screenwriting" className="underline">screenwriting</Link> &middot; <Link to="#prose-fiction" className="underline">prose fiction</Link></h2>
      </div>
    </div>

    <hr className="mt-8 mb-2 text-shark-300 w-1/2 mx-auto" />

    <div className="container mx-auto p-6 lg:w-1/2">
      <p>I wrote my first book in the 4th grade, a magical little thing called <em>The Wide World of Sharks</em>, a #1 Bestseller in its category (books written by me in the 4th grade) and sold out its 1st printing (of one copy).</p>
      <div className="text-shark-100 bg-shark-400 h-64 w-40 border mx-auto mt-8 p-2 pt-20 font-bold text-center">THE WIDE WORLD OF SHARKS</div>
      <p className="italic lg:text-center mt-8 mb-0">But that was the beginning of a writing career &hellip;</p>
    </div>

    <hr className="my-4 lg:mb-8 text-shark-300 w-1/2 mx-auto" />


    <div className="flex flex-col">
    <section id="copywriting" className="border m-4 p-4 bg-shark-100 shadow-xl">
      <h2 className="font-black text-3xl mb-4 text-center lg:text-left">COPYWRITING</h2>
      <p>For more than 20 years, I've worked for a variety of business, corporations, trade &amp; government organizations providing copywriting services including email copywriting, newsletter &amp; magazine writing/editing, video ad scripts, and more.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ex ipsa maxime modi molestias, temporibus at placeat velit quia natus reprehenderit amet obcaecati quod, dicta numquam aut esse repellendus tenetur?</p>
      <p>Obcaecati maiores hic, omnis, placeat mollitia aliquam fugiat fugit nemo corporis quod dolore ea unde voluptatum? Sunt dolorum blanditiis consectetur numquam dolorem consequatur aliquam, temporibus ea fuga fugit tempore nam!</p>
      <p>Odit deserunt suscipit expedita, sit voluptatum blanditiis veniam soluta saepe nihil ipsam eum corporis culpa fuga ducimus dolorum nisi magni laborum dicta magnam optio amet dolore. Rerum quos tempora rem?</p>
      <p className="text-shark-400 font-bold">To hire me and to see examples of my work &rarr; <Link to="/copywriting/" className="underline uppercase italic">Copywriting</Link>.</p>
    </section>

    <section id="screenwriting" className="border m-4 p-4 bg-shark-100 shadow-xl">
      <h2 className="font-black text-center lg:text-right text-3xl mb-4">SCREENWRITING</h2>
      <p>I discovered the unique style of writing screenplays in college and have dabbled in the form ever since. To date, I've completed three spec scripts:</p>
      <ol className="mb-4 list-decimal ml-5 lg:ml-12">
        <li><span className="font-bold uppercase">The Illustrated Man</span> [<span className="italic">thriller</span>]</li>
        <li><span className="font-bold uppercase">The Geriatric Squad</span> [<span className="italic">comedy</span>]</li>
        <li><span className="font-bold uppercase">The Briny Deep</span> [<span className="italic">creature feature horror</span>]</li>
      </ol>
      <p>I write both spec and assignments. If you have a need for logline help, treatment, or a full script written based on your idea or intellectual property, click the <Link to="/hire-me/" className="underline">HIRE ME</Link> and fill out the contact form.</p>
      <p className="text-shark-400 font-bold">Learn more &rarr; <Link to="/screenwriting" className="underline uppercase italic">screenwriting</Link>.</p>
    </section>

    <section id="prose-fiction" className="border m-4 p-4 bg-shark-100 shadow-xl">
      <h2 className="font-black text-center lg:text-left text-3xl mb-4">PROSE FICTION</h2>
      <p>Storytelling has always been my first love in writing, starting when I penned short stories in high school. In 2012, I finished a 1st draft of my hardboiled detective novel (soon to be a series) called <span className="font-bold uppercase">The Joe Sputnik Chronicles</span>.</p>
      <p>I am currently (as of 2020) working on a cosmic horror series called <span className="font-bold uppercase"><a href="https://tentaclecult.com/" className="underline">The Tentacle Cult</a></span>.</p>
      <p className="text-shark-400 font-bold">Learn more or read my prose &rarr; <a href="/fiction" className="underline uppercase italic">Prose Fiction</a>.</p>
    </section>
    
  </div>

    <div className="hidden bg-shark-300 flex flex-col lg:flex-row my-8 align-center p-4 pb-2">
      <p className="lg:w-1/2">“<em>I need to bring Rich in to teach my editors how to run a magazine.</em>”<br/><strong>&mdash; Ron Higgins, Publisher, World Oil</strong></p>

      <p className="lg:w-1/2">“<em>Rich did a great job on a sales letter I’d struggled with for awhile. He delivered a great letter on time and to my specifications. Thanks, Rich.</em>”<br/><strong>&mdash; Phillip Cordova, Chiropractor</strong></p>
      
      <p className="hidden flex-grow-0">“<em>Rich was a pleasure to work with the 5+ years that we worked together on the Momentum Magazine, where Rich was the Editor. His skills at writing and photography were top notch, and his attitude and demeanor made each issue a pleasure to produce.</em>”<br/>&mdash; Curtis Weeks, Business Development Director at RR Donnelley</p>
    </div>

    <hr className="mt-8 text-shark-300 w-1/2 mx-auto" />

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
