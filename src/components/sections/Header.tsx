import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

function Header() {
    return <>
    <Wrapper>
        {/* Joel Clark (Click to go to most recent post) */}
        <div>
            <Link to="/">
                <Title>Joel Clark</Title>
            </Link>
        </div>

        {/* Select blog or portfolio */}
        <Nav>
            <Link to="/">
                <Selected>blog</Selected>
            </Link>

            <Link to="https://joelhenryclark123.github.io/folio/">
                <Unselected>portfolio</Unselected>
            </Link>
        </Nav>

    </Wrapper>
    </>
}

export default Header

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    margin-bottom: 30px;
`

const Title = styled.h1`
    font-size: 48px;
    font-weight: 100;
    font-family: Roboto;
    color: black;
    display: inline;
`

const Nav = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 16px;
    justify-self: end;
    align-items: end;
    padding-bottom: 8px;
`

const Selected = styled.p`
    display: inline;
    font-weight: 500;
    color: black;
`

const Unselected = styled.p`
    display: inline;
    font-weight: 300;
    color: black;
`