import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  CreateGroupButtonLarge,
  GroupSearchBarContainer,
  NoGroupContainer,
  PrivateButton,
  PublicButton,
  PublicGroupContainer,
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

const PublicGroup = () => {
  const dropdownRef = useRef(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState("공감순");
  const [privacyBoundClick, setPrivacyBoundClick] = useState("public");
  const [searchContent, setSearchContent] = useState("");

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
      <Header />
      <PublicGroupContainer>
        <GroupSearchBarContainer>
          <PublicPrivateButtonContainer>
            <PublicButton
              onClick={() => setPrivacyBoundClick("public")}
              $isClicked={privacyBoundClick}
            >
              공개
            </PublicButton>
            <PrivateButton
              onClick={() => setPrivacyBoundClick("private")}
              $isClicked={privacyBoundClick}
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
              placeholder="그룹명을 검색해 주세요"
            />
          </SearchBar>
          <SortDropdownContainer ref={dropdownRef} onClick={handleDropdownOpen}>
            <h2 className="selected">{sortOption}</h2>
            <img src={DropdownArrow} alt="dropdown-arrow" />
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
        <NoGroupContainer>
          <img src={noGroupIcon} alt="No-Group-Icon" />
          <h2 className="notice-1">등록된 공개 그룹이 없습니다.</h2>
          <h3 className="notice-2">가장 먼저 그룹을 만들어보세요!</h3>
        </NoGroupContainer>
        <Link to="/create-group">
          <CreateGroupButtonLarge>그룹 만들기</CreateGroupButtonLarge>
        </Link>
      </PublicGroupContainer>
    </>
  );
};

export default PublicGroup;
