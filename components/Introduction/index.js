"use client";

import Image from "next/image";
import styled from "styled-components";
import { alumniSansPinstripe } from "/styles";

export default function Introduction() {

    return (
        <>
            <StyledContentContainer>
                <StyledImageLayer />
                <StyledTextWrapper>
                    <StyledComment>{'// I am'}</StyledComment>
                    <h1>Web Developer</h1>
                    <StyledSubtTitle>{'Carmen Müller'}</StyledSubtTitle>
                </StyledTextWrapper>
                
                <StyledImageWrapper>
                    <StyledImage 
                    src="/profile_portfolio.jpg"
                    alt="photo of Carmen"
                    fill={true}
                    // loading="eager"
                    />
                </StyledImageWrapper>
            </StyledContentContainer>
            
        </>
    )
}


const StyledContentContainer = styled.article`
    display: flex;
    overflow: hidden;
    position: relative;
    width: 100%;
`;

const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    background-color: rgb(var(--bg-color-main));
    width: 50vw;
    z-index: 2;
    flex-grow: 1;
    position: relative;
    padding-right: 12px;
    border-bottom: 2px solid rgba(var(--bg-color-highlight), 0.8);
    text-align: right;

    @media(max-width: 576px){
        padding-right: 10px;
        padding-left: 10px;
        align-items: flex-start;
        text-align: left;
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

const StyledSubtTitle = styled.h2`
    font-family: ${alumniSansPinstripe.style.fontFamily};
    text-transform: none;
    font-size: 38px;
    font-weight: bold;
    
    @media(min-width: 992px){
        font-size: 50px;
    }

    @media(min-width: 1710px){
        font-size: 60px;
    }
    `;

const StyledImageWrapper = styled.div`
    width: 50vw;
    max-width: 586px;
    flex-grow: 1;
    height: 50vh;
    overflow: hidden;
    position: relative;
    border-bottom: 2px solid rgba(var(--bg-color-highlight), 0.5);
`;

const StyledImageLayer = styled.div`
    width: 100%;
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(var(--bg-color-highlight), 0.5);
    transition: background-color 0.45s ease-in-out;

&:hover {
    background-color: rgba(var(--bg-color-highlight), 0.15);
}
`;

const StyledImage = styled(Image)`
    width: 50vw;
    height: auto;
    object-fit: cover;
    object-position: top;
`;
