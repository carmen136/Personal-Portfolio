import styled from "styled-components";

export default function Section({content, id}) {
    return (
        <StyledSection id={id}>{content}</StyledSection>
    )
}


const StyledSection = styled.section`
    width: 100%;
    height: 100vh;
    background-color: lightskyblue;
`;