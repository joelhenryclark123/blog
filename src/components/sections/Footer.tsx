import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


function Footer(pageContext) {
    return<>
    <Wrapper>
        <LeftLink>
        {
          pageContext.currentPage == 1 ? <div/> : <Link to={ 
            pageContext.currentPage == 2 ? `/` : 
            `/${parseInt(pageContext.currentPage) - 1}/` 
          }>Newer Post</Link> 
        }
        </LeftLink>

        <RightLink>
        {
          pageContext.lastPage ? <div/> : <Link to={ `/${parseInt(pageContext.currentPage) + 1}/` }>Older Post</Link> 
        }
        </RightLink>
    </Wrapper>
    </>
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const LeftLink = styled.div`
    text-align: left;
    font-size: 24px;
`

const RightLink = styled.div`
    text-align: right;
    font-size: 24px;
`

export default Footer