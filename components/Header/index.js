import Link from "next/link";
import styled from "styled-components";

export default function Header() {
 
    return(
        <StyledHeader>
            <StyledLink href="#introduction">Home</StyledLink>
            <StyledLink href="#about">About</StyledLink>
            <StyledLink href="#projects">Projects</StyledLink>
            {/* <Link href="##contact">Contact</Link> */}
        </StyledHeader>
    )

}


const StyledHeader = styled.header`
    width: 100vw;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.1);
    /* background-color: rgba(195, 155, 211, 0.3); */
    position: fixed;
    top: 0;
    z-index: 5;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
    padding: 0 100px;
`;


const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    text-transform: uppercase;

    &:hover {
        color: white;
    }
`;