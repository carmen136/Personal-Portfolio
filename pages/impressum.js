import styled from "styled-components";

export default function ImpressumPage() {


    return (
        <StyledMain>
            <h2>Impressum</h2>

            <h3>Angaben gemäß § 5 TMG:</h3>
            <StyledText>[Carmen Müller]</StyledText>
            <StyledText>[Deine Adresse]</StyledText>
            <StyledText>[PLZ, Ort]</StyledText>
            <StyledText>Deutschland</StyledText>
            
            <h3>Kontakt:</h3>
            <StyledText>E-Mail: carmen.a.mueller@gmx.de</StyledText>
            <StyledText>Website: carmenmueller.de</StyledText>
            
            <h3>Verantwortlich für den Inhalt nach § 55 bs. 2 RStV:</h3>
            <StyledText>Carmen Müller</StyledText>
        </StyledMain>
    )
};


const StyledMain = styled.main`
    position: relative;
    top: 60px;
    margin-bottom: 100px;
    margin-left: 10px;
    margin-right: 10px;

@media(min-width: 769px){
    margin-left: 50px;
    margin-right: 50px;
}
`;

const StyledText = styled.p`
    font-size: 14px;
    margin-bottom: 3px;
`;