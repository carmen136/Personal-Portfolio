import styled from "styled-components";

export default function About() {
    return (
        <>
            <StyledContentContainer>
                {/* <StyledImageLayer /> */}
                <StyledTextWrapper>
                    <h2>About</h2>
                    {/* <StyledComment>{'// Persona'}</StyledComment>
                    <StyledInfoText>Hi! I am a Web developer with a Bachelors degree in Environmental Engineering. Through my training in the Web Development Bootcamp at neue fische and my experiences in a tech startup, I have acquired not only technical skills but also competencies in agile project management and teamwork. I am passionate about developing digital solutions that are both user-friendly and sustainable.</StyledInfoText>
                    <StyledComment>{'// Tech Stack'}</StyledComment>
                    <StyledList>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                        <li>noSQL</li>
                        <li>mongoDB</li>
                        <li>git</li>
                        <li>GitHub</li>
                        <li>Miro</li>
                    </StyledList> */}
                </StyledTextWrapper>
                
                <StyledTextRightWrapper>
                    {/* <h2>About</h2> */}
                    <StyledComment>{'// Persona'}</StyledComment>
                    <StyledInfoText>Web developer with a Bachelors degree in Environmental Engineering. Through my training in the Web Development Bootcamp at neue fische and my experiences in a tech startup, I have acquired not only technical skills but also competencies in agile project management and teamwork. I am passionate about developing digital solutions that are both user-friendly and sustainable.</StyledInfoText>
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
    position: relative;
    z-index: 0;
`;

const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    background-color: white;
    background-color: rgba(195, 155, 211, 0.5);
    flex-grow: 1;
    z-index: 2;
    position: relative;
    padding-left: 20px;
    padding-right: 12px;
    width: 30%;
    transition: width 0.45s ease-in-out;

    &:hover {
        width: 50%;
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
    width: 70%;
    height: 50vh;
    position: relative;
    flex-grow: 1;
    text-align: left;
    padding-left: 12px;
    padding-right: 20px;
`;

const StyledInfoText = styled.p`
    text-align: left;
    padding-bottom: 25px;
    line-height: 1.5;
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
    background-color: rgba(195, 155, 211, 0.5);
    padding: 2px 6px;
`;