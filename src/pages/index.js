import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div id="post">
        <h1>October 16, 2020</h1>
        
        <p>
          This is a post. In this window, you’ll be able to read, scroll, whatever. Here’s where it is. I’ll figure out my type style later. I really need to be able to get a medium-style editor here.
        </p>
        
        <h2>Design</h2>
                
        <p>
          There’s clearly some conflict with line height, paragraph spacing, and visual heirarchy all around. However, I think I can Figure shit out. I’ll do that later. This is just the first iteration.
        </p>

        <p>        
          I want this to be scrolling, and keep the header static. If you want to change the day, just click the October 16, 2020 part? I need to figure out how to navigate posts, but I want to keep this like a normal web app. Simple. clean, compartmentalized...
        </p>
      </div>
      <Link to="/page-2/">Next Post</Link> <br />
    </Layout>
  )
}

export default IndexPage
