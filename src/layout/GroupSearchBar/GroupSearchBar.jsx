/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

import {
  GroupSearchBarContainer,
  PrivateButton,
  PublicButton,
  PublicPrivateButtonContainer,
  SearchBar,
  SearchInput,
  SelectedOptions,
  SortDropdownContainer,
  SortDropdownOptions,
  StyledDropdownArrow,
  StyledSearchIcon,
} from "./GroupSearchBar.styled";

const GroupSearchBar = ({ privacyCategory, setPrivacyCategory, placeholderContent }) => {
  const dropdownRef = useRef(null);

  const [searchContent, setSearchContent] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState("공감순");

  const handleDropdownOpen = (event) => {
    event.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  const handleSearchContent = (e) => {
    setSearchContent(e.target.value);
    // console.log(e.target.value); // 출력되는 입력 값 확인
  };

  useEffect(() => {
    // 마운트 시 이벤트 리스너 등록
    document.addEventListener("click", handleClickOutside);

    // 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <GroupSearchBarContainer>
        <PublicPrivateButtonContainer>
          <PublicButton
            onClick={() => setPrivacyCategory("공개")}
            $isClicked={privacyCategory}
          >
            공개
          </PublicButton>
          <PrivateButton
            onClick={() => setPrivacyCategory("비공개")}
            $isClicked={privacyCategory}
          >
            비공개
          </PrivateButton>
        </PublicPrivateButtonContainer>
        <SearchBar>
          <StyledSearchIcon />
          <SearchInput
            type="text"
            onChange={handleSearchContent}
            value={searchContent}
            placeholder={placeholderContent}
          />
        </SearchBar>
        <SortDropdownContainer ref={dropdownRef} onClick={handleDropdownOpen}>
          <SelectedOptions>
            <h2 className="selected">{sortOption}</h2>
            <StyledDropdownArrow $isDropdownClicked={dropdownOpen} />
          </SelectedOptions>
          <SortDropdownOptions $isDropdownClicked={dropdownOpen}>
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
    </>
  );
};

export default GroupSearchBar;
