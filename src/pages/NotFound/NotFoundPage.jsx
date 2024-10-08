import { Link } from "react-router-dom";

import {
  NotFoundContent,
  NotFoundPageContainer,
  StyledNotFoundIcon,
} from "./NotFoundPage.styled";

import { HeaderContainer, MainLogo } from "@layout/Header/Header.styled";

import mainLogo from "@assets/MainLogo.svg";

const NotFoundPage = () => {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <MainLogo src={mainLogo} alt="조각집 메인 로고" />
        </Link>
      </HeaderContainer>
      <NotFoundPageContainer>
        <StyledNotFoundIcon />
        <NotFoundContent>
          <h4 className="not-found_title">찾을 수 없는 페이지입니다.</h4>
          <h5 className="not-found_description">
            요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요.
          </h5>
        </NotFoundContent>
      </NotFoundPageContainer>
    </>
  );
};

export default NotFoundPage;
