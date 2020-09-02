import { css, keyframes } from 'styled-components'

export const fadeIn = ({ time = '1s', type = 'ease-in-out' } = {}) => 
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `

export const fadeInKeyframes = keyframes`
  from{
    filter: blur(5px);
    opacity: 0;
  }
  to{
    filter: blur(0);
    opacity: 1;
  }
`

export const fadeOut = ({ time = '1s', type = 'ease' } = {}) => 
  css`
    animation: ${time} ${fadeOutKeyframe} ${type};
  `

export const fadeOutKeyframe = keyframes`
  from{
    filter: blur(0);
    opacity: 1;
  }
  to{
    filter: blur(5px);
    opacity: 0;

  }
`