import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #cdcdcd;
    background-color: #FCFCFE;
    color: #4c4c50;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    border-radius: 50%;
    margin: 11px;

    &:hover {
        opacity: 0.6;
    }

    /* Personalização baseada em props */

    background-color: ${({ label }) => {
    switch (label) {
      case 'C':
        return '#E9E9EB';
      case '/':
        return '#E9E9EB';
      case '%':
        return '#E9E9EB';
      case 'X':
        return '#E9E9EB';
        case '+':
        return '#E9E9EB';
      case '-':
        return '#E9E9EB';
        case '=':
        return '#53A302';
      default:
        return '#FCFCFE';
    }
  }};

    color: ${({ label }) => {
    switch (label) {
      case 'C':
        return '#C6443A';
        case '=':
        return '#F6FEF4';
      default:
        return '#636367';
    }
  }};
`;
