import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import SearchIcon from "@assets/search-icon.svg?react";

export const PublicGroupContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 140px;
  padding: 0 180px;
`;

export const GroupSearchBarContainer = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 40px;
`;

export const PublicPrivateButtonContainer = styled.div`
  height: 100%;

  display: flex;
  gap: 30px;
`;

export const PublicPrivateButton = styled.button`
  height: 100%;

  padding: 13px 20px;
  border-radius: 22.5px;

  ${({ theme }) => theme.fontStyles.Caption1}
  color: ${colors.white};
  background-color: ${colors.black};

  flex-shrink: 0;
`;

export const SearchBar = styled.div`
  width: 1186px;
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
    width: 100%;
    height: 45px;
    padding-left: 20px;

    display: flex;
    align-items: center;

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

export const SortDropdownOptions = styled.ul`
  opacity: ${({ $isDropdownClicked }) => ($isDropdownClicked ? 1 : 0)};
  transition: opacity 0.3s ease;

  width: 100%;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 47px;

  border-radius: 6px;
  border: 1px solid ${colors.black};

  .selected-option {
    color: ${colors.black};
  }
`;

export const NoGroupContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  margin-top: 200px;
  margin-bottom: 180px;

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

  border-radius: 6px;

  ${({ theme }) => theme.fontStyles.Caption1}
  background-color: ${colors.black};
  color: ${colors.gray[50]};

  margin-bottom: 264px;
`;
