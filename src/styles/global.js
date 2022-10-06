import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    :root {
        /* Colors Variables */
        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #868e96;
        --grey-0: #f8f9fa;

        /* Text Variables */
        font-family: 'Inter', sans-serif;

        h1 {
            font-weight: 700;
            font-size: 1.1421rem;
            line-height: 1.75rem;
            margin: 0;
            padding: 0;
        }

        h2 {
            font-weight: 600;
            font-size: 1.0152rem;
            line-height: 1.625rem;
            margin: 0;
            padding: 0;
        }

        h3 {
            font-weight: 700;
            font-size: 0.8883rem;
            line-height: 1.5rem;
            margin: 0;
            padding: 0;
        }

        p {
            font-weight: 400;
            font-size: 0.7614rem;
            line-height: 1.375rem;
            margin: 0;
            padding: 0;
        }

        p.bold {
            font-weight: 600;
        }

        p.italic {
            font-style: italic;
            font-weight: 400;
        }

        label {
            font-weight: 400;
            font-size: 0.7614rem;
            line-height: 0px;
        }
        
        background-color: var(--grey-4);
        color: var(--grey-0);
    }

`;

export default Global;
