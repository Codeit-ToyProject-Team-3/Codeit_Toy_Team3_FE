import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import eyeIcon from "@assets/eye-icon.svg?react";

export const PasswordInputWrapper = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PasswordInputTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.Body4}
`;

export const PasswordInputContainer = styled.div`
  width: 100%;
  height: 45px;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 10px;

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

export const PasswordInputModule = styled.input`
  width: 100%;
  height: 100%;
  padding: 14px 20px;

  background-color: inherit;
  border: 1px solid ${colors.gray[200]};
  border-radius: 6px;

  ${({ theme }) => theme.fontStyles.Caption2}
  color: ${colors.black};

  &::placeholder {
    color: ${colors.gray[400]};
  }
`;

export const PasswordVisibleButton = styled.button`
  width: 20px;
  height: 20px;

  position: absolute;
  top: 12.5px;
  right: 15px;
`;

export const StyledEyeIcon = styled(eyeIcon)`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;

  path {
    stroke: ${({ $passwordVisible }) =>
      $passwordVisible ? `${colors.gray[400]}` : `${colors.black}`};

    transition: stroke 0.1s;
  }
`;

export const PasswordErrorMessage = styled.p`
  ${({ theme }) => theme.fontStyles.Footnote}
  color: ${colors.red};

  opacity: ${({ $isValid }) => ($isValid ? 0 : 1)};
  transition: opacity 0.3s ease;
`;
