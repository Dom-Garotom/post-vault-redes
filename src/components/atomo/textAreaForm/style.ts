import styled from "styled-components";

export const WrapperAreaForm = styled.textarea`
  width: 100%;
  min-height: 28px;
  font-size: 18px;
  font-weight: 600;
  color: #26292e;
  border: none;
  background-color: transparent;
  margin-top: 10px;

  resize: none;
  overflow: hidden;
  line-height: 1.4;
  transition: min-height 0.2s ease;
  
  
  &::placeholder {
    font-size: 18px;
    color: #828282;
    font-weight: 600;
  }

  &:focus {
    outline: none;
    min-height: calc(28px + 2em);
  }
`