import styled from "styled-components";

export default function Projects() {
    return (
        <>
            <StyledContentContainer>
                <StyledTextWrapper>
                    <h2>Projects</h2>
                    <StyledComment>{'// Explore'}</StyledComment>
                </StyledTextWrapper>
                
                <StyledTextBottomWrapper>
                    <StyledList>
                        <StyledListItem>Project 1</StyledListItem>
                        <StyledListItem>Project 2</StyledListItem>
                        <StyledListItem>Project 3</StyledListItem>
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
    background-color: white;
    flex-grow: 1;
    position: relative;
    padding: 0px 50px 0 20px;
    width: 100%;
    height: 20vh;
    transition: width 0.45s ease-in-out;

    &:hover {
        width: 98%;
    }

    @media(max-width: 576px){
        font-size: 14px;
        padding: 0 10px 0 20px;
    }
`;

const StyledComment = styled.p`
    font-size: 18px;
    text-transform: uppercase;
    color: rgb(128, 128, 128);
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
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const StyledListItem = styled.li`
    text-transform: uppercase;
    background-color: rgba(195, 155, 211, 0.5);
    padding: 2px 6px;
    width: 250px;
    height: 250px;

    @media(max-width: 576px){
        width: 150px;
        height: 125px;
    }

    @media(max-width: 768px){
        width: 200px;
        height: 160px;
    }
`;