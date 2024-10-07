/* eslint-disable react/prop-types */
import {
  Modal,
  ModalContent,
  PostSubmitButton,
  StyledCloseIcon,
} from "./ModalCustom.styled";

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

const ModalCustom = ({
  modalOpen,
  handleModalClose,
  modalTitle,
  passworTitle,
  passwordPlaceholder,
  submitButtonText,
}) => {
  return (
    <Modal
      open={modalOpen}
      onClose={handleModalClose}
      slots={{ backdrop: StyledBackdrop }}
    >
      <ModalContent>
        <h2 className="modal-title">{modalTitle}</h2>
        <StyledCloseIcon onClick={handleModalClose} />
        <PasswordInput
          title={passworTitle}
          placeholderContent={passwordPlaceholder}
        />
        <PostSubmitButton>{submitButtonText}</PostSubmitButton>
      </ModalContent>
    </Modal>
  );
};

export default ModalCustom;
