import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const TextInputWrapper = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  color: ${colors.black};
`;

export const TextInputTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.Body4}
`;

export const TextInputContainer = styled.div`
  width: 100%;
  height: 45px;

  position: relative;

  // For Border-box Animation when focused and unvalidated
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;

    width: ${({ $isFocused }) => ($isFocused ? "100%" : "0")};
    height: 45px;
    margin-left: ${({ $isFocused }) => ($isFocused ? "0" : "-3%")};

    border: 1px solid;
    border-color: ${({ $isValid }) =>
      $isValid ? `${colors.black}` : `${colors.red}`};
    border-radius: 6px;
    background-color: transparent;

    opacity: ${({ $isFocused }) => ($isFocused ? 1 : 0)};
    transition: margin-left 0.3s, width 0.35s;
    pointer-events: none;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 14px 20px;

  border-radius: 6px;
  border: 1px solid ${colors.gray[200]};
  background-color: inherit;

  ${({ theme }) => theme.fontStyles.Caption2}
  color: ${colors.black};

  &::placeholder {
    color: ${colors.gray[400]};
  }
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => theme.fontStyles.Footnote}
  color: ${colors.red};

  opacity: ${({ $isValid }) => ($isValid ? 0 : 1)};
  transition: opacity 0.3s ease;
`;
