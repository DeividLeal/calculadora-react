import { ButtonContainer } from './styles';

const Button = ({label, onClick}) => {
    
    return (
        <ButtonContainer onClick={onClick} label={label}>
            {label}
        </ButtonContainer>
    );
  }
  
  export default Button;