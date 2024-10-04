/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

import {
  PasswordErrorMessage,
  PasswordInputContainer,
  PasswordInputModule,
  PasswordInputTitle,
  PasswordInputWrapper,
  PasswordVisibleButton,
  StyledEyeIcon,
} from "./PasswordInput.styled";

const PasswordInput = ({ title, placeholderContent }) => {
  const passwordInputRef = useRef(null);

  const [password, setPassword] = useState("");
  const [passwordInputFocused, setPasswordInputFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

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

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#]).{8,}$/;

  const handlePasswordValidation = (e) => {
    const newPassword = e.target.value;
    setPassword(event.target.value);

    if (newPassword === "") {
      setPasswordErrorMessage("");
      return;
    }

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
    <PasswordInputWrapper>
      <PasswordInputTitle>{title}</PasswordInputTitle>
      <PasswordInputContainer
        $isFocused={passwordInputFocused}
        $isValid={passwordErrorMessage === ""}
      >
        <PasswordInputModule
          type={passwordVisible ? "text" : "password"}
          placeholder={placeholderContent}
          ref={passwordInputRef}
          value={password}
          onChange={handlePasswordValidation}
          onFocus={() => setPasswordInputFocused(true)}
        />
        <PasswordVisibleButton onClick={togglePasswordVisibility}>
          <StyledEyeIcon $passwordVisible={passwordVisible} />
        </PasswordVisibleButton>
        <PasswordErrorMessage $isValid={passwordErrorMessage === ""}>
          {passwordErrorMessage}
        </PasswordErrorMessage>
      </PasswordInputContainer>
    </PasswordInputWrapper>
  );
};

export default PasswordInput;
