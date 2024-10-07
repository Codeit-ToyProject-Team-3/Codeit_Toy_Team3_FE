import { useState } from "react";

import {
  CreateMemoryButton,
  CreateMemoryContent,
  CreateMemoryModule,
  CreateMemoryPageContainer,
  CreateMemoryPageTitle,
  StyledLeftRightDivider,
} from "./CreateMemoryPage.styled";

import Header from "@layout/Header/Header";
import TextInputModule from "@components/Input/Text/TextInputModule";
import FileInputModule from "@components/Input/File/FileInputModule";
import TextAreaModule from "@components/Input/TextArea/TextAreaModule";
import HashtagInput from "@components/Input/HashTag/HashTagInput";
import ToggleButton from "@components/ToggleButton/ToggleButton";
import PasswordInput from "@components/Input/Password/PasswordInput";
import DateInputModule from "@components/Input/Date/DateInputModule";

const CreateMemoryPage = () => {
  const MAX_DESCRIPTION_WORDS = 400;

  const [memoryPrivacy, setMemoryPrivacy] = useState("비공개");

  const handleMemoryPrivacyText = () => {
    setMemoryPrivacy((prev) => (prev === "비공개" ? "공개" : "비공개"));
  };

  return (
    <>
      <Header />
      <CreateMemoryPageContainer>
        <CreateMemoryPageTitle>추억 올리기</CreateMemoryPageTitle>
        <CreateMemoryContent>
          <CreateMemoryModule>
            <TextInputModule
              title="닉네임"
              placeholderContent="닉네임을 입력해주세요"
            />
            <TextInputModule
              title="제목"
              placeholderContent="제목을 입력해주세요"
            />
            <FileInputModule
              title="이미지"
              placeholderContent="파일을 선택해주세요"
            />
            <TextAreaModule
              title="본문"
              placeholderContent="본문 내용을 입력해주세요"
              maxWords={MAX_DESCRIPTION_WORDS}
            />
          </CreateMemoryModule>

          <StyledLeftRightDivider />

          <CreateMemoryModule>
            <HashtagInput
              title="태그"
              placeholderContent="태그 입력 후 Enter"
            />
            <TextInputModule
              title="장소"
              placeholderContent="장소를 입력해주세요"
            />
            <DateInputModule title="추억의 순간" />
            <ToggleButton
              title="추억 공개 선택"
              stateText={memoryPrivacy}
              handleStateText={handleMemoryPrivacyText}
              inputID="memory-privacy"
            />
            <PasswordInput
              title="비밀번호 생성"
              placeholderContent="추억 비밀번호를 생성해주세요"
            />
          </CreateMemoryModule>
        </CreateMemoryContent>
        <CreateMemoryButton>올리기</CreateMemoryButton>
      </CreateMemoryPageContainer>
    </>
  );
};

export default CreateMemoryPage;
