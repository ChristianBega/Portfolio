import styled from "styled-components";
import { theme } from "../../styles/theme";
export const FormContainer = styled.div`
  margin: 0 auto;
  padding: 2.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10.62px;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
`;

export const FormTitle = styled.h3`
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  text-align: center;
  letter-spacing: 1px;
`;

export const FormDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

export const FormGroup = styled.div`
  position: relative;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
`;

export const InputBase = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  font-size: 1rem;
  color: #ffffff;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: ${theme.shadows.button_shadow};
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const Input = styled(InputBase)``;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  font-size: 1rem;
  color: #ffffff;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: ${theme.shadows.button_shadow};
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const SuccessMessage = styled.div`
  padding: 2rem 1.5rem;
  border-radius: 12px;
  color: #ffffff;
  text-align: center;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const ErrorText = styled.span`
  color: ${theme.colors.error};
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: block;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 45px;

  color: rgba(255, 255, 255, 0.5);
`;
