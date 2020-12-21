import React from "react"
import styled from "styled-components"
import myColors from "../Styles.tsx"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Footer from "../components/sections/Footer"
import "./post.css"

function IndexPage({ data, pageContext }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  
  return (
    <Layout>
      <SEO title={ frontmatter.date } />
      <div id="post">
        <PostTitle id="PostTitle">{ frontmatter.date }</PostTitle>
        <div className ="PostText" dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      <Footer currentPage={pageContext.currentPage} lastPage={pageContext.lastPage} />
      
      <br />
    </Layout>
  )
}

const PostTitle = styled.h1`
  font-family: Roboto;
  font-size: 36px;
  font-weight: 900;
  color: ${myColors.orange};
  margin-bottom: 40px;
  margin-top: 30px;
`

export default IndexPage

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`