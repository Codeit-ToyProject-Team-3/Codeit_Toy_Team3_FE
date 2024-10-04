import { useEffect, useRef, useState } from "react";

import Header from "@layout/Header/Header";

import {
  CreateGroupButton,
  CreateGroupPageContainer,
  CreateGroupSubTitle,
  CreateGroupTitle,
  GroupIntroductionArea,
  GroupIntroductionContainer,
  GroupIntroductionWordLimit,
  GroupModuleContainer,
  GroupPrivacyContainer,
  GroupPrivacyContent,
  GroupPrivacyText,
  InputErrorMessage,
  IntroCharacterCount,
  PasswordInput,
  PasswordInputContainer,
  PasswordVisibleButton,
  PrivacyToggleContainer,
  PrivacyToggleInput,
  StyledEyeIcon,
} from "./CreateGroupPage.styled";
import TextInputModule from "@components/Input/Text/TextInputModule";
import FileInputModule from "@components/Input/File/FileInputModule";

const CreateGroupPage = () => {
  const nameInputRef = useRef(null);
  const groupImageRef = useRef(null);
  const introInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [nameInputFocused, setNameInputFocused] = useState(false);
  const [introInputFocused, setIntroInputFocused] = useState(false);
  const [passwordInputFocused, setPasswordInputFocused] = useState(false);

  const [groupNameValue, setGroupNameValue] = useState("");
  const [validInputMessage, setValidInputMessage] = useState("");

  const [groupImageFileName, setGroupImageFileName] = useState("");
  const [fileSizeErrorMessage, setFileSizeErrorMessage] = useState("");

  const [groupIntroduction, setGroupIntroduction] = useState("");

  const [privacyText, setPrivacyText] = useState("비공개");

  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        nameInputRef.current &&
        !nameInputRef.current.contains(e.target) &&
        e.target !== nameInputRef.current
      ) {
        setNameInputFocused(false);
      }

      if (
        introInputRef.current &&
        !introInputRef.current.contains(e.target) &&
        e.target !== introInputRef.current
      ) {
        setIntroInputFocused(false);
      }

      if (
        passwordInputRef.current &&
        !passwordInputRef.current.contains(e.target) &&
        e.target !== passwordInputRef.current
      ) {
        setPasswordInputFocused(false);
      }
    };

    const handleInputFocusBlur = (e) => {
      if (e.target === nameInputRef.current) {
        setNameInputFocused(e.type === "focus");
      }

      if (e.target === introInputRef.current) {
        setIntroInputFocused(e.type === "focus");
      }

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
  }, [nameInputRef, introInputRef]);

  const handleGroupNameValue = (e) => {
    const inputValue = e.target.value;
    setGroupNameValue(inputValue);

    const isValid = /^[a-zA-Z가-힣0-9!@#$%^_]*$/.test(inputValue);

    if (isValid) {
      setValidInputMessage("");
    } else {
      setValidInputMessage("특수문자는 !@#$%^_만 사용하실 수 있습니다.");
    }
  };

  const MAX_FILE_SIZE = 2 * 1024 * 1024;

  const handleGroupImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.size > MAX_FILE_SIZE) {
      setFileSizeErrorMessage(
        "파일 용량이 2MB를 초과했습니다. 다른 파일을 선택해주세요."
      );

      e.target.files = null;
      setGroupImageFileName("");
    } else {
      setFileSizeErrorMessage("");

      if (e.target.files.length > 0) {
        setGroupImageFileName(e.target.files[0].name);
      }
    }
  };

  const handleFileSelectClick = () => {
    groupImageRef.current.click();
  };

  const MAX_INTRO_WORDS = 200;

  const handleGroupIntroduction = (e) => {
    const { value } = e.target;

    if (value.length <= MAX_INTRO_WORDS) {
      setGroupIntroduction(value);
    }
  };

  const handlePrivacyText = () => {
    setPrivacyText((prev) => (prev === "비공개" ? "공개" : "비공개"));
  };

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#]).{8,}$/;

  const handlePassWordValidation = (e) => {
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
    <>
      <Header />
      <CreateGroupPageContainer>
        <CreateGroupTitle>그룹 만들기</CreateGroupTitle>
        <TextInputModule
          title="그룹명"
          taregtInputFocused={nameInputFocused}
          errorMessage={validInputMessage}
          setTargetInputFocused={setNameInputFocused}
          targetRef={nameInputRef}
          targetInputValue={groupNameValue}
          handleTargetInputValue={handleGroupNameValue}
          placeholderContent="그룹명을 입력해주세요"
          InputErrorMessage={validInputMessage}
        />

        <FileInputModule
          title="대표 이미지"
          errorMessage={fileSizeErrorMessage}
          targetRef={groupImageRef}
          handleImageChange={handleGroupImageChange}
          imageName={groupImageFileName}
          handleImageSelect={handleFileSelectClick}
          placeholderContent="파일을 선택해주세요"
        />


        <GroupModuleContainer>
          <CreateGroupSubTitle>그룹 소개</CreateGroupSubTitle>
          <GroupIntroductionWordLimit>
            <GroupIntroductionContainer $isFocused={introInputFocused}>
              <GroupIntroductionArea
                type="text"
                placeholder="그룹을 소개해주세요"
                maxLength={MAX_INTRO_WORDS}
                value={groupIntroduction}
                ref={introInputRef}
                onChange={handleGroupIntroduction}
                onFocus={() => setIntroInputFocused(true)}
              />
            </GroupIntroductionContainer>
            <IntroCharacterCount>
              {groupIntroduction.length}/{MAX_INTRO_WORDS} character
            </IntroCharacterCount>
          </GroupIntroductionWordLimit>
        </GroupModuleContainer>

        <GroupPrivacyContainer>
          <CreateGroupSubTitle>그룹 공개 선택</CreateGroupSubTitle>
          <GroupPrivacyContent>
            <GroupPrivacyText>{privacyText}</GroupPrivacyText>

            <PrivacyToggleInput
              type="checkbox"
              id="privacy-setting"
              onChange={handlePrivacyText}
            />
            <PrivacyToggleContainer htmlFor="privacy-setting" />
          </GroupPrivacyContent>
        </GroupPrivacyContainer>

        <GroupModuleContainer>
          <CreateGroupSubTitle>비밀번호 생성</CreateGroupSubTitle>
          <PasswordInputContainer
            $isFocused={passwordInputFocused}
            $isValid={passwordErrorMessage === ""}
          >
            <PasswordInput
              type={passwordVisible ? "text" : "password"}
              placeholder="그룹 비밀번호를 생성해주세요"
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
        </GroupModuleContainer>

        <CreateGroupButton>만들기</CreateGroupButton>
      </CreateGroupPageContainer>
    </>
  );
};

export default CreateGroupPage;
