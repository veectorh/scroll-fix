import styled from 'styled-components';

const ButtonStyles = styled.div`
  display: flex;
  flex-direction: row;
  a {
    display:flex;
    align-items: center;
    outline: none;
    border: none;
    height: 44px;
    text-align: center;
    padding: 0 20px;
    background: ${props => props.theme.main};
    background-blend-mode: multiply;
    color: white;
    font-size: 16px;
    font-family: "Oswald", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    height: 44px;
    line-height: 24px;
    letter-spacing: 0.085em;
    text-decoration: none;
    text-transform: uppercase;
    margin-bottom: 6px;
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
    width: ${props => props.fullWidth ? '100vw' : 'unset'};
    justify-content: ${props => props.fullWidth ? 'center' : 'unset'};
    border: ${props => props.border ? '1px solid white' : 'unset'};
    
    span {
      border-radius: 1.5px;
      border-style: solid;
      border-width: 0.4em 0 0.4em 0.7em;
      border-color: transparent transparent transparent #fff;
      margin: 1px 0 0 7px;
    }
    .icon {
        border-style: unset;
        margin: unset;
        padding-left: 7px;
    }
  }

  a:hover {
    background: #2a2a2a;
  }
`

export default ButtonStyles;