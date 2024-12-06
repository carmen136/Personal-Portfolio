import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Connect() {
    return (
        <>
            <StyledContentContainer>
                <StyledTextWrapper>
                {/* <StyledComment>{'// Let`s'}</StyledComment> */}
                    <h2>Connect</h2>
                </StyledTextWrapper>
                
                <StyledTextRightWrapper>
                    <StyledComment>{'// Network'}</StyledComment>
                    <StyledList>
                        <StyledListItem>
                            <a href="https://github.com/carmen136">
                            <IoLogoGithub />
                            </a>
                            </StyledListItem>
                        <StyledListItem><IoLogoLinkedin /></StyledListItem>
                    </StyledList>
                    <p>This site is built with React and Next.js</p>
                    <StyledComment>{'// Tech Stack'}</StyledComment>
                    <p> {'(c) 2024 Carmen Müller. All rights reserved.'}</p>
                    <p>Impressum</p>
                </StyledTextRightWrapper>
            </StyledContentContainer>
        </>
    )
};


const StyledContentContainer = styled.article`
    display: flex;
    position: relative;
    z-index: 0;
`;

const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    background-color: white;
    flex-grow: 1;
    z-index: 2;
    position: relative;
    padding-left: 20px;
    padding-right: 12px;
    width: 50%;
    /* transition: width 0.45s ease-in-out;

    &:hover {
        width: 35%;
    } */
`;

const StyledComment = styled.p`
    font-size: 18px;
    text-transform: uppercase;
    color: rgb(128, 128, 128);
    padding-bottom: 8px;
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
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
`;

const StyledListItem = styled.li`
    text-transform: uppercase;
    font-size: 3rem;
    color: rgba(195, 155, 211, 1);
    /* background-color: rgba(195, 155, 211, 0.5); */
    padding: 2px 6px;
    transition: background-color 0.45s ease;

&:hover {
    background-color: rgba(195, 155, 211, 0.8);
}
`;