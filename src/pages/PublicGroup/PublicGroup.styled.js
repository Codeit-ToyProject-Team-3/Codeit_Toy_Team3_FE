import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import SearchIcon from "@assets/search-icon.svg?react";
import arrowIcon from "@assets/arrow_dropdown.svg?react";

export const PublicGroupContainer = styled.div`
  width: 100%;
  margin-top: 140px;
  padding: 0 180px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GroupSearchBarContainer = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const PublicPrivateButtonContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  gap: 10px;
`;

const PublicPrivateButton = styled.button`
  height: 100%;
  padding: 13px 20px;

  border-radius: 22.5px;

  ${({ theme }) => theme.fontStyles.Caption1}

  flex-shrink: 0;

  transition: color 0.3s ease, background-color 0.25s;
`;

export const PublicButton = styled(PublicPrivateButton)`
  ${({ $isClicked }) =>
    $isClicked === "public"
      ? `color: ${colors.white}; background-color: ${colors.black};`
      : `color: ${colors.black}; background-color: none;`};
`;

export const PrivateButton = styled(PublicPrivateButton)`
  flex-grow: 1;

  ${({ $isClicked }) =>
    $isClicked === "private"
      ? `color: ${colors.white}; background-color: ${colors.black};`
      : `color: ${colors.black}; background-color: none;`};
`;

export const SearchBar = styled.div`
  flex-grow: 1;
  height: 100%;
  padding: 10px 20px;

  display: flex;
  align-items: center;
  gap: 10px;

  border-radius: 6px;
  background-color: ${colors.gray[100]};
`;

export const StyledSearchIcon = styled(SearchIcon)`
  width: 24px;
  height: 24px;

  cursor: pointer;
`;

export const SearchInput = styled.input`
  flex-grow: 1;

  ${({ theme }) => theme.fontStyles.Caption2}
  color: ${colors.black};

  border: none;
  outline: none;
  background-color: inherit;
`;

export const SortDropdownContainer = styled.div`
  width: 160px;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: 6px;
  border: 1px solid ${colors.black};

  cursor: pointer;

  position: relative;

  .selected {
    ${({ theme }) => theme.fontStyles.Caption2}
    color: ${colors.black};
  }

  .sortBy {
    width: 100%;
    height: 45px;
    padding-left: 20px;

    display: flex;
    align-items: center;

    ${({ theme }) => theme.fontStyles.Caption2}
    color: ${colors.gray[500]};

    border-radius: 6px;
    border: 1px solid ${colors.gray[50]};
  }
`;

export const SelectedOptions = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 63px;
`;

export const StyledDropdownArrow = styled(arrowIcon)`
  width: 24px;
  height: 24px;

  fill: ${colors.black};
  rotate: ${({ $isDropdownClicked }) =>
    $isDropdownClicked ? "180deg" : "0deg"};

  transition: rotate 0.3s ease;
`;

export const SortDropdownOptions = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 47px;
  z-index: ${({ $isDropdownClicked }) => ($isDropdownClicked ? 1 : -1)};

  border-radius: 6px;
  border: 1px solid ${colors.black};

  opacity: ${({ $isDropdownClicked }) => ($isDropdownClicked ? 1 : 0)};
  transition: opacity 0.28s ease;

  .selected-option {
    color: ${colors.black};
  }
`;

export const NoGroupContainer = styled.div`
  width: 100%;
  margin-top: 200px;
  margin-bottom: 180px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  img {
    width: 100px;
    height: 100px;
  }

  .notice-1 {
    ${({ theme }) => theme.fontStyles.Body1}
    color: ${colors.gray[500]};
  }

  .notice-2 {
    ${({ theme }) => theme.fontStyles.Caption2}
    color: ${colors.gray[400]};
  }
`;

export const CreateGroupButtonLarge = styled.button`
  width: 400px;
  height: 50px;
  margin-bottom: 264px;

  border-radius: 6px;

  ${({ theme }) => theme.fontStyles.Caption1}
  background-color: ${colors.black};
  color: ${colors.gray[50]};
`;
