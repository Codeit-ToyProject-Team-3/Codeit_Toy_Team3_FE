import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import arrowIcon from "@assets/arrow_dropdown.svg?react";

export const PaginationContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const PageButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PaginationButtonModule = styled.button`
  width: 45px;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  border: 1px solid ${colors.black};

  background-color: ${colors.gray[50]};
`;

export const PageButtonModuleContainer = styled.div`
  width: 45px;
  height: 45px;

  position: relative;

  &::after {
    content: "";
    width: 45px;
    height: 45px;

    position: absolute;
    top: 0;
    left: 0;
    z-index: ${({ $isActive }) => ($isActive ? 5 : -1)};

    border-radius: 6px;
    background: ${colors.black};

    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`;

export const PageButton = styled(PaginationButtonModule)`
  ${({ theme }) => theme.fontStyles.Caption2}

  color: ${({ $isActive }) =>
    $isActive ? `${colors.white}` : `${colors.black}`};

  background-color: ${({ $isActive }) =>
    $isActive ? `${colors.black}` : `${colors.white}`};
`;

export const NextPreviousButton = styled(PaginationButtonModule)`
  path {
    fill: ${colors.black};
  }

  &:disabled {
    cursor: default;
    pointer-events: none;

    border-color: ${colors.gray[400]};
  }

  &:disabled path {
    fill: ${colors.gray[500]};
  }
`;

export const PreviousArrow = styled(arrowIcon)`
  width: 24px;
  height: 24px;

  rotate: 90deg;
`;

export const NextArrow = styled(arrowIcon)`
  width: 24px;
  height: 24px;

  rotate: -90deg;
`;
