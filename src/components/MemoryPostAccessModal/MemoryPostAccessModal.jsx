/* eslint-disable react/prop-types */
import {
  Modal,
  ModalContent,
  PostSubmitButton,
  StyledCloseIcon,
} from "./MemoryPostAccessModal.styled";

import PasswordInput from "@components/Input/Password/PasswordInput";

import styled from "styled-components";
import { forwardRef } from "react";
import clsx from "clsx";

// eslint-disable-next-line react/display-name
const Backdrop = forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const StyledBackdrop = styled(Backdrop).withConfig({
  shouldForwardProp: (prop) => prop !== "ownerState",
})`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  -webkit-tap-highlight-color: transparent; // 모바일 및 터치 기반 웹 브라우저에서 터치 요소를 클릭할 때 나타나는 하이라이트 효과를 제어 (여기선 필요 없음)
`;

const MemoryPostAccessModal = ({ modalOpen, handleModalClose }) => {
  return (
    <Modal
      open={modalOpen}
      onClose={handleModalClose}
      slots={{ backdrop: StyledBackdrop }}
    >
      <ModalContent>
        <h2 className="modal-title">추억 올리기</h2>
        <StyledCloseIcon onClick={handleModalClose} />
        <PasswordInput
          title="올리기 권한 인증"
          placeholderContent="그룹 비밀번호를 입력해주세요"
        />
        <PostSubmitButton>제출하기</PostSubmitButton>
      </ModalContent>
    </Modal>
  );
};

export default MemoryPostAccessModal;
