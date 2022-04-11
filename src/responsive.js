import { css } from 'styled-components'

// Utilizo esta función para cambiar los estilos de los elementos para pantalla móvil
export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 380px) {
            ${props}
    }
    `;
};