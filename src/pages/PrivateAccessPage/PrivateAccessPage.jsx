/* eslint-disable react/prop-types */
import {
  AccessPageContainer,
  AccessPageContent,
  AccessPageHeader,
  PasswordSubmitButton,
} from "./PrivateAccessPage.styled";

import Header from "@layout/Header/Header";
import PasswordInput from "@components/Input/Password/PasswordInput";

const PrivateAccessPage = ({ title, description }) => {
  return (
    <>
      <Header />
      <AccessPageContainer>
        <AccessPageContent>
          <AccessPageHeader>
            <h2 className="title">{title}</h2>
            <h3 className="sub-title">{description}</h3>
          </AccessPageHeader>
          <PasswordInput
            title="비밀번호 입력"
            placeholderContent="그룹 비밀번호를 입력하세요"
          />
          <PasswordSubmitButton>제출하기</PasswordSubmitButton>
        </AccessPageContent>
      </AccessPageContainer>
    </>
  );
};

export default PrivateAccessPage;
