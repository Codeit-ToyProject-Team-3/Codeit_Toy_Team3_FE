import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import { Modal as BaseModal } from "@mui/base/Modal";

import closeIcon from "@assets/close-icon.svg?react";

export const CommentModal = styled(BaseModal)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 1300;
  inset: 0;
`;

export const CommentModalContent = styled.div`
  width: 480px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  position: relative;

  border-radius: 6px;
  background-color: ${colors.gray[50]};

  color: ${colors.black};

  box-shadow: 0 4px 12px rgb(0 0 0 / 0.5);

  .modal-title {
    margin-bottom: 20px;

    ${({ theme }) => theme.fontStyles.Header2}
  }
`;

export const PostCommentButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 20px;

  border-radius: 6px;
  background-color: ${colors.black};

  ${({ theme }) => theme.fontStyles.Body4}
  color: ${colors.gray[50]};
`;

export const StyledCloseIcon = styled(closeIcon)`
  width: 30px;
  height: 30px;

  position: absolute;
  top: 20px;
  right: 20px;

  cursor: pointer;
`;
