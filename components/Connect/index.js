"use client";

import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Connect() {
    return (
        <>
            <StyledContentContainer>
                <StyledTextWrapper>
                <StyledComment>{'// Let`s'}</StyledComment>
                    <h2>Connect</h2>
                </StyledTextWrapper>
                
                <StyledTextRightWrapper>
                    <StyledList>
                        <StyledListItem>
                            <StyledExternalLink href="https://github.com/carmen136">
                                <IoLogoGithub />
                            </StyledExternalLink>
                            </StyledListItem>
                        <StyledListItem>
                            <StyledExternalLink href="https://www.linkedin.com/in/carmen-a-m%C3%BCller/">
                                <IoLogoLinkedin />
                            </StyledExternalLink>
                        </StyledListItem>
                    </StyledList>
                    <StyledComment>{'// Network'}</StyledComment>
                </StyledTextRightWrapper>
            </StyledContentContainer>
        </>
    )
};


const StyledContentContainer = styled.article`
    display: flex;
    overflow: hidden;
    position: relative;
    z-index: 0;
    width: 100%;
`;

const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    flex-grow: 1;
    position: relative;
    padding: 0px 12px 0px 20px;
    width: 50%;
    transition: padding-top 0.45s ease-in-out;

    &:hover {
        padding-top: 25px;
    }
`;

const StyledComment = styled.p`
    font-size: 18px;
    text-transform: uppercase;
    color: rgb(var(--font-color-comment));

    @media(max-width: 576px){
        font-size: 14px;
    }
`;

const StyledTextRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
    height: 30vh;
    position: relative;
    flex-grow: 1;
    text-align: left;
    padding-left: 12px;
    padding-right: 20px;
`;


const StyledList = styled.ul`
    display: flex;
    list-style: none;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    @media(max-width: 576px){
        gap: 0px;
    }
`;

const StyledListItem = styled.li`
    text-transform: uppercase;
    font-size: 3rem;
    color: black;
    padding: 2px 6px;

    @media(max-width: 576px){
        font-size: 2.5rem;
    }
`;


const StyledExternalLink = styled.a`

&:visited {
    color: rgb(var(--bg-color-variant));
}

&:active {
    color: rgb(var(--icon-color-highlight));
}

&:hover {
    color: rgb(var(--icon-color-highlight));
}

`;
