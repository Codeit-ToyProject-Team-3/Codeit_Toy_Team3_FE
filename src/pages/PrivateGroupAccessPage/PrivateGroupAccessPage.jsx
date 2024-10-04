import {
  AccessPageContainer,
  AccessPageContent,
  AccessPageHeader,
  PasswordSubmitButton,
} from "./PrivateGroupAccessPage.styled";

import Header from "@layout/Header/Header";
import PasswordInput from "@components/Input/Password/PasswordInput";

const PrivateGroupAccessPage = () => {
  return (
    <>
      <Header />
      <AccessPageContainer>
        <AccessPageContent>
          <AccessPageHeader>
            <h2 className="title">비공개 그룹</h2>
            <h3 className="sub-title">
              비공개 그룹에 접근하기 위해 권한 확인이 필요합니다.
            </h3>
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

export default PrivateGroupAccessPage;
