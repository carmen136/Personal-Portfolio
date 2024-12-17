"use client";

import styled from "styled-components";

export default function Projects({ noHover }) {
    return (
        <>
            <StyledContentContainer>
                <StyledTextWrapper className={noHover ? "no-hover" : ""}>
                    <h2>Projects</h2>
                    <StyledComment>{'// Explore'}</StyledComment>
                </StyledTextWrapper>
                
                <StyledTextBottomWrapper>
                    <StyledList>
                        <StyledListItem>I am still working on this website.</StyledListItem>
                        <StyledListItem>Some content and features may not be available yet.</StyledListItem>
                        <StyledListItem>Thank you for your patience!</StyledListItem>
                    </StyledList>
                </StyledTextBottomWrapper>
            </StyledContentContainer>
        </>
    )
};


const StyledContentContainer = styled.article`
    display: flex;
    flex-direction: column;
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
    background-color: rgb(var(--bg-color-main));
    flex-grow: 1;
    position: relative;
    padding: 0px 50px 0 20px;
    width: 100%;
    height: 20vh;
    transition: width 0.45s ease-in-out;

    &:hover {
        width: 98%;
    }

    &.no-hover {
        &:hover {
            width: 100%;
        }
    }

    @media(max-width: 576px){
        font-size: 14px;
        padding: 0 10px 0 20px;
    }
`;

const StyledComment = styled.p`
    font-size: 18px;
    text-transform: uppercase;
    color: rgb(var(--font-color-comment));
    padding-bottom: 8px;
    text-align: right;

    @media(max-width: 576px){
        font-size: 14px;
    }
`;

const StyledTextBottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40vh;
    position: relative;
    flex-grow: 1;
    padding-left: 12px;
    padding-right: 20px;
`;

const StyledList = styled.ul`
    display: flex;
    list-style: none;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media(min-width: 503px){
        gap: 15px;
    }
`;

const StyledListItem = styled.li`
    text-transform: uppercase;
    font-style: italic;
    background-color: rgba(var(--bg-color-highlight), 0.5);
    padding: 2px 6px;
    width: 150px;
    height: 125px;

    @media(min-width: 503px){
        width: 200px;
        height: 160px;
    }

    @media(min-width: 813px){
        width: 250px;
        height: 250px;
    }


`;