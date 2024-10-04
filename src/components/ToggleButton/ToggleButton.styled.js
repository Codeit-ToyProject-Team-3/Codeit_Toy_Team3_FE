import styled from "styled-components";

export const ToggleButtonContainer = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ToggleButtonTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.Body4}
`;

export const ToggleButtonContent = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ToggleButtonText = styled.p`
  width: 40px;

  ${({ theme }) => theme.fontStyles.Caption2}
`;

export const ToggleButtonCheckBox = styled.input`
  position: absolute;
  top: 0;
  left: 100px;

  width: 10px;
  height: 10px;
  visibility: hidden;

  &:checked + label {
    background: linear-gradient(
      to right,
      #ffffff,
      #f5f3f5,
      #ece7ea,
      #e5dcde,
      #ddd0d0
    );
  }

  &:checked + label::after {
    transform: translateX(22px);
    background: linear-gradient(180deg, #ffcc89, #d8860b);
  }
`;

export const ToggleButtonLabel = styled.label`
  width: 48px;
  height: 24px;

  position: relative;
  display: block;

  border-radius: 15px;
  background: linear-gradient(
    to left,
    #5b5b5b,
    #4f4f4f,
    #444344,
    #393838,
    #2f2d2d
  );

  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
    inset 0px -5px 15px rgba(255, 255, 255, 0.4);

  cursor: pointer;

  transition: background 0.3s ease;

  &::after {
    content: "";
    width: 20px;
    height: 20px;

    position: absolute;
    top: 2px;
    left: 3px;

    border-radius: 50%;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(180deg, #777, #3a3a3a);

    transition: width 0.2s, background 0.3s, transform 0.25s;
  }

  &:active::after {
    width: 21px;
  }
`;
