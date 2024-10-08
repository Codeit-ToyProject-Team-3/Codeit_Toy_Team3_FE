/* eslint-disable react/prop-types */
import {
  CommentModal,
  CommentModalContent,
  PostCommentButton,
  StyledCloseIcon,
} from "./CommentEditRegisterModal.styled";

import { StyledBackdrop } from "@components/ModalCustom/ModalCustom";

import PasswordInput from "@components/Input/Password/PasswordInput";
import TextInputModule from "@components/Input/Text/TextInputModule";
import TextAreaModule from "@components/Input/TextArea/TextAreaModule";

const CommentEditRegisterModal = ({
  modalOpen,
  handleModalClose,
  modalTitle,
  passworTitle,
  passwordPlaceholder,
  submitButtonText,
  selectedComment,
}) => {
  const MAX_COMMENT_WORDS = 80;

  return (
    <CommentModal
      open={modalOpen}
      onClose={handleModalClose}
      slots={{ backdrop: StyledBackdrop }}
    >
      <CommentModalContent>
        <h2 className="modal-title">{modalTitle}</h2>
        <StyledCloseIcon onClick={handleModalClose} />
        <TextInputModule
          title="닉네임"
          placeholderContent="닉네임을 입력해주세요"
          commentNickname={selectedComment}
        />

        <TextAreaModule
          title="댓글"
          placeholderContent="댓글을 입력해주세요"
          maxWords={MAX_COMMENT_WORDS}
          commentData={selectedComment}
        />

        <PasswordInput
          title={passworTitle}
          placeholderContent={passwordPlaceholder}
        />
        <PostCommentButton>{submitButtonText}</PostCommentButton>
      </CommentModalContent>
    </CommentModal>
  );
};

export default CommentEditRegisterModal;
