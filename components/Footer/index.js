"use client";

import Link from "next/link";
import styled from "styled-components";

export default function Footer() {

    return(
        <StyledImpressumContainer>
            <li>This site is built with React and Next.js</li>
            {/* <li> {'© 2024 Carmen Müller. All rights reserved.'}</li>
            <StyledLink href="/impressum">
                <li>Impressum</li>
            </StyledLink> */}
        </StyledImpressumContainer>
    )
};



const StyledImpressumContainer = styled.ul`
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    list-style: none;
    padding: 0 50px 5px;
    height: 5vh;
    width: 100%;
    color: rgba(var(--font-color-comment), 0.7);
    font-size: 12px;
    text-transform: uppercase;

    @media(max-width: 768px){
        font-size: 8px;
        padding: 0 10px 5px;
    }
`;

// const StyledLink = styled(Link)`
//     text-decoration: none;
//     color: rgba(var(--font-color-comment), 0.7);
//     text-transform: uppercase;

//     &:hover {
//         color: rgb(var(--icon-color-highlight));
//     }
    
// `;