/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import {
  EditMemoryButton,
  MemoryEditModalContent,
  MemoryEditModalCustom,
} from "./MemoryEditModal.styled";

import {
  CreateMemoryContent,
  CreateMemoryModule,
  StyledLeftRightDivider,
} from "@pages/CreateMemoryPage/CreateMemoryPage.styled";

import { StyledCloseIcon } from "@components/ModalCustom/ModalCustom.styled";
import { StyledBackdrop } from "@components/ModalCustom/ModalCustom";

import TextInputModule from "@components/Input/Text/TextInputModule";
import FileInputModule from "@components/Input/File/FileInputModule";
import TextAreaModule from "@components/Input/TextArea/TextAreaModule";
import ToggleButton from "@components/ToggleButton/ToggleButton";
import PasswordInput from "@components/Input/Password/PasswordInput";
import HashtagInput from "@components/Input/HashTag/HashtagInput";
import DateInputModule from "@components/Input/Date/DateInputModule";

const MemoryEditModal = ({ modalOpen, handleModalClose }) => {
  const MAX_DESCRIPTION_WORDS = 400;

  const [memoryPrivacy, setMemoryPrivacy] = useState("비공개");

  const handleMemoryPrivacy = () => {
    setMemoryPrivacy((prev) => (prev === "공개" ? "비공개" : "공개"));
  };

  useEffect(() => {
    if (!modalOpen) {
      setMemoryPrivacy("비공개");
    }
  }, [modalOpen]);

  return (
    <MemoryEditModalCustom
      open={modalOpen}
      onClose={handleModalClose}
      slots={{ backdrop: StyledBackdrop }}
    >
      <MemoryEditModalContent>
        <h2 className="modal-title">추억 수정</h2>
        <StyledCloseIcon onClick={handleModalClose} />
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
              handleStateText={handleMemoryPrivacy}
              inputID="memory-privacy-edit"
            />
            <PasswordInput
              title="수정 권한 인증"
              placeholderContent="추억 비밀번호를 생성해주세요"
            />
          </CreateMemoryModule>
        </CreateMemoryContent>
        <EditMemoryButton>수정하기</EditMemoryButton>
      </MemoryEditModalContent>
    </MemoryEditModalCustom>
  );
};

export default MemoryEditModal;
