import React from "react"
import styled from "styled-components"
import myColors from "../Styles.tsx"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Footer from "../components/sections/Footer"

function IndexPage({ data, pageContext }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  
  return (
    <Layout>
      <SEO title={ frontmatter.date } />
      <div id="post">
        <PostTitle id="PostTitle">{ frontmatter.title }</PostTitle>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      <Footer currentPage={pageContext.currentPage} lastPage={pageContext.lastPage} />
      
      <br />
    </Layout>
  )
}

const PostTitle = styled.h1`
  font-size: 36;
  font-weight: 700;
  color: ${myColors.orange};
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