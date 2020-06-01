import React from 'react'

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const TestimonialsPage = () => (
  <Layout>
    <SEO title="testimonials" />
    <h1 className="text-3xl font-black mb-8 pl-2 lg:pl-0 lg:text-center">Enough about me &hellip; what others have said about me!</h1>
    <div className="flex flex-col w-3/4 mx-auto">
      <p>“<em>I need to bring Rich in to teach my editors how to run a magazine.</em>”<br/>&mdash; Ron Higgins, Publisher, World Oil</p>

      <p>“<em>Rich did a great job on a sales letter I’d struggled with for awhile. He delivered a great letter on time and to my specifications. Thanks, Rich.</em>”<br/>&mdash; Phillip Cordova, Chiropractor</p>
      
      <p>“<em>Rich was a pleasure to work with the 5+ years that we worked together on the Momentum Magazine, where Rich was the Editor. His skills at writing and photography were top notch, and his attitude and demeanor made each issue a pleasure to produce.</em>”<br/>&mdash; Curtis Weeks, Business Development Director at RR Donnelley</p>

      <p><em>I met Rich via a digital marketing course we both took, where I learned that he's a writer.

      I reached out to him subsequently with an idea for a video series I thought might be interesting. Gave him a very rough outline and set of ideas, and by the next day, he had a concept pulled together.
      
      It wasn't quite what I was looking for. Based on my comments, he came back again a day later with a revised concept and a pretty much full dialogue script. And, frankly, he pretty much nailed it. I couldn't believe how well he heard me (and it was via text... so that adds to the remarkableness!)
      
      I'm producing the concept he/we came up with, am super-excited about it, and can't wait to throw some ideas at him for vid #2 of this series!</em><br/>&mdash; John Snippe, H2Only</p>

      <p><em>As part of a writing assignment, Rich and I swapped treatments. Although my main genre is fantasy, I wrote a thriller. Rich immediately started filling in gaps and creating segues for me in places where I was struggling. Adding elements that I hadn't considered like an addition to my opening scene, enhanced my story. He even went so far as to change a situation that would reduce the budget yet keep the impact that I wanted for that scene.

      Rich was easy to work with, encouraging, and willing to take the time to help me get my script to a much higher level. I would co-write with him anytime.</em><br/>&mdash; Ann Jagger, screenwriter</p>
    </div>

  </Layout>
)

export default TestimonialsPage