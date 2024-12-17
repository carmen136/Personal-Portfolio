"use client";

import Link from "next/link";
import styled from "styled-components";

export default function Header({ noHover }) {
 
    return(
        <StyledHeader>
            <StyledLink href="/#introduction" className={noHover ? "no-hover" : ""}>Home</StyledLink>
            <StyledLink href="/#about" className={noHover ? "no-hover" : ""}>About</StyledLink>
            <StyledLink href="/#projects" className={noHover ? "no-hover" : ""}>Projects</StyledLink>
            <StyledLink href="/#connect" className={noHover ? "no-hover" : ""}>Connect</StyledLink>
        </StyledHeader>
    )

}


const StyledHeader = styled.header`
    width: 100%;
    height: 40px;
    background-color: rgba(var(--bg-color-variant), 0.1);
    position: fixed;
    top: 0;
    z-index: 5;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
    padding: 0 65px;

    @media(max-width: 576px){
        gap: 10px;
        padding: 0 10px;
        font-size: 16px;
    }

    @media(max-width: 768px){
        gap: 10px;
        padding: 0 40px;
        font-size: 16px;
    }
`;



const StyledLink = styled(Link)`
    text-decoration: none;
    color: rgb(var(--bg-color-variant));
    text-transform: uppercase;

    &:hover {
        color: rgb(var(--font-color-highlight));
    }

    &.no-hover {
        &:hover {
            color: rgb(var(--bg-color-variant));
        }
    }
`;