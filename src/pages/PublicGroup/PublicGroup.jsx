import {
  CreateGroupButtonLarge,
  GroupSearchBarContainer,
  NoGroupContainer,
  PublicGroupContainer,
  PublicPrivateButton,
  PublicPrivateButtonContainer,
  SearchBar,
  SearchInput,
  SortDropdownContainer,
  SortDropdownOptions,
  StyledSearchIcon,
} from "./PublicGroup.styled";

import Header from "@layout/Header/Header";

import noGroupIcon from "@assets/no-group-icon.svg";
import DropdownArrow from "@assets/arrow_dropdown.svg";
import { useState } from "react";

const PublicGroup = () => {
  const [dropdownClick, setDropdownClick] = useState(false);
  const [sortOption, setSortOption] = useState("공감순");

  const handleDropdownOpen = (event) => {
    event.stopPropagation();
    setDropdownClick((prev) => !prev);
  };

  return (
    <>
      <Header />
      <PublicGroupContainer>
        <GroupSearchBarContainer>
          <PublicPrivateButtonContainer>
            <PublicPrivateButton>공개</PublicPrivateButton>
            <PublicPrivateButton>비공개</PublicPrivateButton>
          </PublicPrivateButtonContainer>
          <SearchBar>
            <StyledSearchIcon />
            <SearchInput placeholder="그룹명을 검색해 주세요" />
          </SearchBar>
          <SortDropdownContainer onClick={handleDropdownOpen}>
            <h2 className="selected">{sortOption}</h2>
            <img src={DropdownArrow} alt="dropdown-arrow" />
            <SortDropdownOptions $isDropdownClicked={dropdownClick}>
              <li
                onClick={() => setSortOption("최신순")}
                className={`sortBy ${
                  sortOption === "최신순" ? "selected-option" : ""
                }`}
              >
                최신순
              </li>
              <li
                onClick={() => setSortOption("댓글순")}
                className={`sortBy ${
                  sortOption === "댓글순" ? "selected-option" : ""
                }`}
              >
                댓글순
              </li>
              <li
                onClick={() => setSortOption("공감순")}
                className={`sortBy ${
                  sortOption === "공감순" ? "selected-option" : ""
                }`}
              >
                공감순
              </li>
            </SortDropdownOptions>
          </SortDropdownContainer>
        </GroupSearchBarContainer>
        <NoGroupContainer>
          <img src={noGroupIcon} alt="No-Group-Icon" />
          <h2 className="notice-1">등록된 공개 그룹이 없습니다.</h2>
          <h3 className="notice-2">가장 먼저 그룹을 만들어보세요!</h3>
        </NoGroupContainer>
        <CreateGroupButtonLarge>그룹 만들기</CreateGroupButtonLarge>
      </PublicGroupContainer>
    </>
  );
};

export default PublicGroup;
