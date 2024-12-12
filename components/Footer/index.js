import Link from "next/link";
import styled from "styled-components";

export default function Footer() {

    return(
        <StyledImpressumContainer>
            <li>This site is built with React and Next.js</li>
            <li> {'© 2024 Carmen Müller. All rights reserved.'}</li>
            <Link href="/impressum">
                <li>Impressum</li>
            </Link>
        </StyledImpressumContainer>
    )
};



const StyledImpressumContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    list-style: none;
    padding: 0 50px 5px;
    gap: 20px;
    height: 5vh;
    width: 100%;
    color: rgba(128, 128, 128, 0.7);
    font-size: 12px;
    text-transform: uppercase;

    @media(max-width: 768px){
        font-size: 8px;
        padding: 0 10px 5px;
    }
`;