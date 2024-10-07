import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import removeIcon from "@assets/remove-icon.svg?react";

export const TagInputWrapper = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  color: ${colors.black};
`;

export const TagInputTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.Body4}
`;

export const TagInputContainer = styled.div`
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

    border: 1px solid ${colors.black};
    border-radius: 6px;
    background-color: transparent;

    opacity: ${({ $isFocused }) => ($isFocused ? 1 : 0)};
    transition: margin-left 0.3s, width 0.35s;
    pointer-events: none;
  }
`;

export const TagInput = styled.input`
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

export const TagListContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const TagModule = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;

  .tag {
    ${({ theme }) => theme.fontStyles.Caption2}
    color: ${colors.gray[500]};
  }
`;

export const StyledRemoveIcon = styled(removeIcon)`
  width: 16px;
  height: 16px;

  cursor: pointer;
`;
