import React from "react"
import styled from "styled-components"
import myColors from "../Styles.tsx"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function IndexPage({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <div id="post">
        <PostTitle id="PostTitle">{ frontmatter.title }</PostTitle>
      </div>
      <Link to="/page-2/">Next Post</Link> <br />
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
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`