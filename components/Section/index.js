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
    height: "65vh",
    borderBottom: "2px solid rgba(var(--bg-color-highlight), 0.8)"
};

const connectTheme = {
    height: "30vh",
    borderBottom: "none"
}

const defaultTheme = {
    height: "50vh",
    borderBottom: "2px solid rgba(var(--bg-color-highlight), 0.8)"
}

const StyledSection = styled.section`
    width: 100%;
    height: ${props => props.theme.height};
    background-color: rgb(var(--bg-color-main));
    border-bottom: ${props => props.theme.borderBottom};
`;