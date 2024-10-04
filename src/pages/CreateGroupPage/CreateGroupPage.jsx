import { useEffect, useRef, useState } from "react";

import {
  CreateGroupButton,
  CreateGroupPageContainer,
  CreateGroupTitle,
} from "./CreateGroupPage.styled";

import Header from "@layout/Header/Header";

import TextInputModule from "@components/Input/Text/TextInputModule";
import FileInputModule from "@components/Input/File/FileInputModule";
import TextAreaModule from "@components/Input/TextArea/TextAreaModule";
import ToggleButton from "@components/ToggleButton/ToggleButton";
import PasswordInput from "@components/Input/Password/PasswordInput";

const CreateGroupPage = () => {
  const groupImageRef = useRef(null);
  const introInputRef = useRef(null);

  const [introInputFocused, setIntroInputFocused] = useState(false);

  const [groupImageFileName, setGroupImageFileName] = useState("");
  const [fileSizeErrorMessage, setFileSizeErrorMessage] = useState("");

  const [groupIntroduction, setGroupIntroduction] = useState("");

  const [privacyText, setPrivacyText] = useState("비공개");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        introInputRef.current &&
        !introInputRef.current.contains(e.target) &&
        e.target !== introInputRef.current
      ) {
        setIntroInputFocused(false);
      }
    };

    const handleInputFocusBlur = (e) => {
      if (e.target === introInputRef.current) {
        setIntroInputFocused(e.type === "focus");
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
  }, [introInputRef]);

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

  return (
    <>
      <Header />
      <CreateGroupPageContainer>
        <CreateGroupTitle>그룹 만들기</CreateGroupTitle>

        <TextInputModule
          title="그룹명"
          placeholderContent="그룹명을 입력해주세요"
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

        <TextAreaModule
          title="그룹 소개"
          placeholderContent="그룹을 소개해주세요"
          maxWords={200}
          taregtRef={introInputRef}
          textAreaContent={groupIntroduction}
          handleTextAreaContent={handleGroupIntroduction}
          targetInputFocused={introInputFocused}
          setTargetInputFocused={setIntroInputFocused}
        />

        <ToggleButton
          title="그룹 공개 선택"
          stateText={privacyText}
          handleStateText={handlePrivacyText}
          inputID="privacy-setting"
        />

        <PasswordInput
          title="비밀번호 생성"
          placeholderContent="그룹 비밀번호를 생성해주세요"
        />

        <CreateGroupButton>만들기</CreateGroupButton>
      </CreateGroupPageContainer>
    </>
  );
};

export default CreateGroupPage;
