"use client";

import styled from "styled-components";

export default function About() {
    return (
        <>
            <StyledContentContainer>
                <StyledTextWrapper>
                    <h2>About</h2>
                </StyledTextWrapper>
                
                <StyledTextRightWrapper>
                    <StyledComment>{'// Persona'}</StyledComment>
                    <StyledInfoText>Web developer with a Bachelor degree in Environmental Engineering. Through absolving the Web Dev Bootcamp at neue fische and my experiences in a tech startup, I have acquired not only technical skills but also competencies in agile project management and teamwork. Passionate about developing digital solutions that are both user-friendly and sustainable.</StyledInfoText>
                    <StyledComment>{'// Tech Stack'}</StyledComment>
                    <StyledList>
                        <StyledListItem>HTML</StyledListItem>
                        <StyledListItem>CSS</StyledListItem>
                        <StyledListItem>JavaScript</StyledListItem>
                        <StyledListItem>React</StyledListItem>
                        <StyledListItem>Next.js</StyledListItem>
                        <StyledListItem>Node.js</StyledListItem>
                        <StyledListItem>noSQL</StyledListItem>
                        <StyledListItem>mongoDB</StyledListItem>
                        <StyledListItem>git</StyledListItem>
                        <StyledListItem>GitHub</StyledListItem>
                        <StyledListItem>Miro</StyledListItem>
                    </StyledList>
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
    background-color: rgba(var(--bg-color-highlight), 0.5);
    z-index: 2;
    position: relative;
    padding-left: 20px;
    padding-right: 12px;
    width: 30%;
    transition: width 0.45s ease-in-out;

    &:hover {
        width: 35%;
    }

    @media(max-width: 576px){
        width: 20%;
        justify-content: flex-start;
        align-items: center;
        padding: 0 10px;
        writing-mode: vertical-lr;
        transform: rotate(180deg);
    }
`;

const StyledComment = styled.p`
    font-size: 18px;
    text-transform: uppercase;
    color: rgb(var(--font-color-comment));
    padding-bottom: 8px;

    @media(max-width: 576px){
        font-size: 14px;
        padding-bottom: 5px;
    }

    @media(max-width: 768px){
        padding-bottom: 5px;
    }
`;

const StyledTextRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    width: 70%;
    height: 50vh;
    position: relative;
    flex-grow: 1;
    text-align: left;
    padding-left: 12px;
    padding-right: 20px;

    @media(max-width: 576px){
        width: 65%;
        padding: 30px 10px 0;
    }

    @media(max-width: 768px){
        padding: 30px 10px 0;
    }
`;

const StyledInfoText = styled.p`
    text-align: left;
    padding-bottom: 25px;
    line-height: 1.5;

    @media(max-width: 576px){
        font-size: 12px;
        padding-bottom: 10px;
    }
`;

const StyledList = styled.ul`
    display: flex;
    list-style: none;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    @media(max-width: 576px){
        gap: 5px;
    }
`;

const StyledListItem = styled.li`
    text-transform: uppercase;
    background-color: rgba(var(--bg-color-highlight), 0.5);
    padding: 2px 6px;
    transition: background-color 0.45s ease;

&:hover {
    background-color: rgba(var(--bg-color-highlight), 0.8);
}

@media(max-width: 576px){
        font-size: 10px;
    }

@media(max-width: 768px){
        font-size: 12px;
    }
`;