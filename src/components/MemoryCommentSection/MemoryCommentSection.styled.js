import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import pencilIcon from "@assets/pencil-icon.svg?react";
import trashIcon from "@assets/trash-icon.svg?react";

export const MemoryCommentSectionContainer = styled.div`
  width: 100%;
  margin-top: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

export const RegisterCommentButton = styled.button`
  width: 400px;
  height: 50px;

  border-radius: 6px;
  background-color: ${colors.black};

  ${({ theme }) => theme.fontStyles.Body4}
  letter-spacing: -0.48px;
  color: ${colors.gray[50]};
`;

export const CommentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  ${({ theme }) => theme.fontStyles.Body4}
  color: ${colors.black};

  .section-title {
    font-size: 18px;
    letter-spacing: -0.54px;
  }
`;

export const CommentDivider = styled.div`
  width: 100%;
  height: 2px;

  background-color: ${colors.black};
  opacity: 0.5;
`;

export const CommentList = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CommentModule = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CommentModuleHeader = styled.div`
  margin-bottom: 6px;

  display: flex;
  align-items: center;
  gap: 10px;

  .timestamp {
    font-weight: 400;
    color: ${colors.gray[400]};
  }
`;

export const CommentModuleMain = styled.div`
  width: 100%;
  margin-bottom: 9px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditDeleteIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledPencilIcon = styled(pencilIcon)`
  width: 20px;
  height: 20px;

  cursor: pointer;
`;

export const StyledTrashIcon = styled(trashIcon)`
  width: 20px;
  height: 20px;

  cursor: pointer;
`;

export const CommentModuleDivider = styled.div`
  width: 100%;
  height: 2px;

  background-color: ${colors.gray[200]};
  opacity: 0.5;
`;
