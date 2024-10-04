import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const FileInputContainer = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FileInputTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.Body4}
`;

export const FileInputValidation = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FileInputModuleContainer = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  align-items: center;
  gap: 10px;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;

    width: 290px;
    height: 45px;

    border-radius: 6px;
    border: 1px solid;
    border-color: ${({ $isValid }) =>
      $isValid ? `${colors.gray[200]}` : `${colors.red}`};

    background-color: transparent;

    opacity: ${({ $isValid }) => ($isValid ? 0 : 1)};
    transition: opacity 0.1s;
    pointer-events: none;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const SelectedFileName = styled.input`
  width: 290px;
  height: 100%;
  padding: 14px 20px;

  background-color: inherit;
  border: 1px solid ${colors.gray[200]};
  border-radius: 6px;

  white-space: nowrap;
  text-overflow: ellipsis;

  pointer-events: none;

  ${({ theme }) => theme.fontStyles.Caption2}
  color: ${colors.black};

  &::placeholder {
    color: ${colors.gray[400]};
  }
`;

export const FileSelectButton = styled.button`
  flex-grow: 1;
  height: 100%;

  background-color: inherit;
  border: 1px solid ${colors.black};
  border-radius: 6px;
`;

export const FormatErrorMessage = styled.p`
  ${({ theme }) => theme.fontStyles.Footnote}
  color: ${colors.red};

  opacity: ${({ $isValid }) => ($isValid ? 0 : 1)};
  transition: opacity 0.3s ease;
`;
