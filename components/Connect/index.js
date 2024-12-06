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
                    <p>This site is built with React and Next.js</p>
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
    color: rgb(128, 128, 128);
    padding-bottom: 8px;
`;

const StyledTextRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
    height: 35vh;
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
    color: rgba(165, 105, 189, 1);
    padding: 2px 6px;
`;


const StyledExternalLink = styled.a`

&:visited {
    color: rgba(165, 105, 189, 1);
}

&:active {
    color: black;
}

&:hover {
    color: black;
}

`;