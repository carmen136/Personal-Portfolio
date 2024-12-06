import styled, {ThemeProvider} from "styled-components";

export default function Section({content, id}) {
    return (
        <ThemeProvider 
            theme={id === "projects" ? projectsTheme : id === "connect" ? connectTheme : defaultTheme}>
            <StyledSection id={id}>{content}</StyledSection>
        </ThemeProvider>
    )
}


const projectsTheme = {
    height: "70vh"
};

const connectTheme = {
    height: "30vh"
}

const defaultTheme = {
    height: "50vh"
}

const StyledSection = styled.section`
    width: 100%;
    height: ${props => props.theme.height};
    background-color: white;
    border-bottom: 2px solid rgba(195, 155, 211, 0.8);
`;