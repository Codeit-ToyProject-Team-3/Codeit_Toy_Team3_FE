import { useEffect, useRef, useState } from "react";

import {
  AccessPageContainer,
  AccessPageContent,
  AccessPageHeader,
  GroupPasswordContainer,
  PasswordSubmitButton,
} from "./PrivateGroupAccessPage.styled";

import {
  InputErrorMessage,
  PasswordInput,
  PasswordInputContainer,
  PasswordVisibleButton,
  StyledEyeIcon,
} from "@pages/CreateGroupPage/CreateGroupPage.styled";

import Header from "@layout/Header/Header";

const PrivateGroupAccessPage = () => {
  const passwordInputRef = useRef(null);

  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [passwordInputFocused, setPasswordInputFocused] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        passwordInputRef.current &&
        !passwordInputRef.current.contains(e.target) &&
        e.target !== passwordInputRef.current
      ) {
        setPasswordInputFocused(false);
      }
    };

    const handleInputFocusBlur = (e) => {
      if (e.target === passwordInputRef.current) {
        setPasswordInputFocused(e.type === "focus");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("focus", handleInputFocusBlur, true);
    document.addEventListener("blur", handleInputFocusBlur, true);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("focus", handleInputFocusBlur, true);
      document.addEventListener("blur", handleInputFocusBlur, true);
    };
  }, []);

  const handlePassWordValidation = (e) => {
    const newPassword = e.target.value;
    setPassword(event.target.value);

    if (newPassword === "") {
      setPasswordErrorMessage("");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#]).{8,}$/;

    if (passwordRegex.test(newPassword)) {
      setPasswordErrorMessage("");
    } else {
      setPasswordErrorMessage(
        "비밀번호는 영문 대문자, 소문자, !@# 중 하나의 특수문자를 포함해야 합니다."
      );
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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
          <GroupPasswordContainer>
            <h2 className="password-title">비밀번호 입력</h2>
            <PasswordInputContainer
              $isFocused={passwordInputFocused}
              $isValid={passwordErrorMessage === ""}
            >
              <PasswordInput
                type={passwordVisible ? "text" : "password"}
                placeholder="그룹 비밀번호를 입력해주세요"
                value={password}
                onChange={handlePassWordValidation}
                onFocus={() => setPasswordInputFocused(true)}
                ref={passwordInputRef}
              />
              <PasswordVisibleButton onClick={togglePasswordVisibility}>
                <StyledEyeIcon $passwordVisible={passwordVisible} />
              </PasswordVisibleButton>
              <InputErrorMessage $isValid={passwordErrorMessage === ""}>
                {passwordErrorMessage}
              </InputErrorMessage>
            </PasswordInputContainer>
          </GroupPasswordContainer>
          <PasswordSubmitButton>제출하기</PasswordSubmitButton>
        </AccessPageContent>
      </AccessPageContainer>
    </>
  );
};

export default PrivateGroupAccessPage;
