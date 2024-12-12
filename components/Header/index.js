import Link from "next/link";
import styled from "styled-components";

export default function Header() {
 
    return(
        <StyledHeader>
            <StyledLink href="/#introduction">Home</StyledLink>
            <StyledLink href="/#about">About</StyledLink>
            <StyledLink href="/#projects">Projects</StyledLink>
            <StyledLink href="/#connect">Connect</StyledLink>
        </StyledHeader>
    )

}


const StyledHeader = styled.header`
    width: 100%;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.1);
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
    color: black;
    text-transform: uppercase;

    &:hover {
        color: white;
    }
`;