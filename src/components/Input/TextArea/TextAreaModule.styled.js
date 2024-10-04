import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const TextAreaModuleContainer = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextAreaSubTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.Body4}
`;

export const TextAreaWordLimit = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextAreaContainer = styled.div`
  width: 100%;
  height: 120px;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;

    width: ${({ $isFocused }) => ($isFocused ? "100%" : "0")};
    height: 100%;
    margin-left: ${({ $isFocused }) => ($isFocused ? "0" : "-3%")};

    border: 1px solid ${colors.black};
    border-radius: 6px;
    background-color: transparent;

    opacity: ${({ $isFocused }) => ($isFocused ? 1 : 0)};
    transition: margin-left 0.3s, width 0.35s;
    pointer-events: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 14px 20px;

  position: relative;

  resize: none; /* 사용자가 크기를 조절할 수 없게 설정 */
  background-color: inherit;
  border: 1px solid ${colors.gray[200]};
  border-radius: 6px;

  ${({ theme }) => theme.fontStyles.Caption2}
  color: ${colors.black};

  outline: none;

  &::placeholder {
    color: ${colors.gray[400]};
  }
`;

export const TextAreaCharacterCount = styled.p`
  align-self: flex-end;
  margin-right: 5px;

  ${({ theme }) => theme.fontStyles.Footnote}
  color: ${colors.gray[500]};
`;
