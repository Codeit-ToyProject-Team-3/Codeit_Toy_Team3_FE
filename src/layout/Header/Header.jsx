import { Link, useLocation } from "react-router-dom";

import { CreateGroupButton, HeaderContainer, MainLogo } from "./Header.styled";

import mainLogo from "@assets/MainLogo.svg";

const Header = () => {
  const location = useLocation();

  const noGroupCreateButtonPages = [
    "/private-access",
    "/create-group",
    "/create-memory",
    "/groups",
    "/posts",
  ];

  const isNoCreateButtonPage = noGroupCreateButtonPages.some(
    (path) => location.pathname.startsWith(path) || location.pathname === "*"
  );

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <MainLogo src={mainLogo} alt="조각집 메인 로고" />
        </Link>
        {!isNoCreateButtonPage && (
          <Link to="/create-group">
            <CreateGroupButton>그룹 만들기</CreateGroupButton>
          </Link>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
