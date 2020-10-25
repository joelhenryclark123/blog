import React from "react"
import styled from "styled-components"
import myColors from "../Styles.tsx"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

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

      <Footer>
        {
          pageContext.currentPage == 1 ? <div/> : <Link to={ 
            pageContext.currentPage == 2 ? `/` : 
            `/${parseInt(pageContext.currentPage) - 1}/` 
          }>Newer Post</Link> 
        }

        {
          pageContext.lastPage ? <div/> : <Link to={ `/${parseInt(pageContext.currentPage) + 1}/` }>Older Post</Link> 
        }
      </Footer>
      <br />
    </Layout>
  )
}

const PostTitle = styled.h1`
  font-size: 36;
  font-weight: 700;
  color: ${myColors.orange};
`

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  & ${Footer}:nth-child(1) {
    justify-self: start;
  }

  & ${Footer}:nth-child(2) {
    justify-self: end;
  }
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