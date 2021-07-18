import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
    html {
        scroll-behavior: auto;
    }

    #root {
        height: 100vh;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
        font-family: Raleway;
    }
`;

export default GlobalCSS;