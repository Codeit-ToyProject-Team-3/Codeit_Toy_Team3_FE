/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import {
  EditModalContent,
  EditProfileButton,
  ProfileEditModalCustom,
} from "./ProfileEditModal.styled";

import { StyledCloseIcon } from "@components/ModalCustom/ModalCustom.styled";
import { StyledBackdrop } from "@components/ModalCustom/ModalCustom";

import TextInputModule from "@components/Input/Text/TextInputModule";
import FileInputModule from "@components/Input/File/FileInputModule";
import TextAreaModule from "@components/Input/TextArea/TextAreaModule";
import ToggleButton from "@components/ToggleButton/ToggleButton";
import PasswordInput from "@components/Input/Password/PasswordInput";

const ProfileEditModal = ({ modalOpen, handleModalClose }) => {
  const MAX_WORDS_INTRO = 200;

  const [privacyText, setPrivacyText] = useState("비공개");

  const handlePrivacyText = () => {
    setPrivacyText((prev) => (prev === "공개" ? "비공개" : "공개"));
  };

  useEffect(() => {
    if (!modalOpen) {
      setPrivacyText("비공개");
    }
  }, [modalOpen]);

  return (
    <ProfileEditModalCustom
      open={modalOpen}
      onClose={handleModalClose}
      slots={{ backdrop: StyledBackdrop }}
    >
      <EditModalContent>
        <h2 className="modal-title">그룹 정보 수정</h2>
        <StyledCloseIcon onClick={handleModalClose} />
        <TextInputModule
          title="그룹명"
          placeholderContent="수정할 그룹명을 입력해주세요"
        />
        <FileInputModule
          title="대표 이미지"
          placeholderContent="파일을 선택해주세요"
        />
        <TextAreaModule
          title="그룹 소개"
          placeholderContent="그룹을 소개해주세요"
          maxWords={MAX_WORDS_INTRO}
        />
        <ToggleButton
          title="그룹 공개 선택"
          stateText={privacyText}
          handleStateText={handlePrivacyText}
          inputID="group-prviacy"
        />
        <PasswordInput
          title="수정 권한 인증"
          placeholderContent="그룹 비밀번호를 입력해주세요"
        />
        <EditProfileButton>수정하기</EditProfileButton>
      </EditModalContent>
    </ProfileEditModalCustom>
  );
};

export default ProfileEditModal;
