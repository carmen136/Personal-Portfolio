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
            <StyledImpressumContainer>
                        <li>This site is built with React and Next.js</li>
                        <li> {'© 2024 Carmen Müller. All rights reserved.'}</li>
                        <li>Impressum</li>
            </StyledImpressumContainer>
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
    color: rgb(128, 128, 128);
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
    color: black;
    padding: 2px 6px;
`;


const StyledExternalLink = styled.a`

&:visited {
    color: black;
}

&:active {
    color: rgba(165, 105, 189, 1);
}

&:hover {
    color: rgba(165, 105, 189, 1);
}

`;


const StyledImpressumContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    list-style: none;
    padding: 0 50px;
    gap: 20px;
    height: 4vh;
    width: 100%;
    color: rgba(128, 128, 128, 0.7);
    font-size: 12px;
    text-transform: uppercase;
`;