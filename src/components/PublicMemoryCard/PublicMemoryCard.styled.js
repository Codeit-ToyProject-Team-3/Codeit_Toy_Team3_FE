import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import likeIcon from "@assets/group_like-icon.svg?react";
import commentIcon from "@assets/comment-icon.svg?react";

export const PublicMemoryListWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  margin-bottom: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

export const PublicMemoryListContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, 375px);
  justify-content: center;
  gap: 20px;
`;

export const PublicMemoryCardContainer = styled.div`
  width: 375px;
  height: 561px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  border-radius: 12px;
  border: 1px solid ${colors.gray[200]};

  background-color: inherit;

  cursor: pointer;
`;

export const PublicMemoryImage = styled.img`
  width: 100%;
  height: 335px;

  border-radius: 6px;

  background-color: ${colors.gray[50]};
`;

export const PublicMemoryContentContainer = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  gap: 20px;

  color: ${colors.black};
`;

export const MemoryCardHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 10px;

  .nickname {
    ${({ theme }) => theme.fontStyles.Caption2}
  }

  .divider {
    color: ${colors.gray[400]};
  }

  .privacy-bound {
    color: ${colors.gray[500]};
  }
`;

export const MemoryCardMainContent = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  gap: 10px;

  .title {
    ${({ theme }) => theme.fontStyles.Body3}
  }
`;

export const MemoryTagList = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 5px;

  flex-wrap: wrap;

  .tag {
    ${({ theme }) => theme.fontStyles.Caption2}
    color: ${colors.gray[400]};

    white-space: nowrap;
  }
`;

export const MemoryCardFooter = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MemoryLoactionDate = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  ${({ theme }) => theme.fontStyles.Footnote}
  letter-spacing: -0.36px;
  color: ${colors.black};

  white-space: nowrap;
`;

export const MemoryLikeCommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LikeCommentModule = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StyledLikeIcon = styled(likeIcon)`
  width: 18px;
  height: 18px;
`;

export const StyledCommentIcon = styled(commentIcon)`
  width: 20px;
  height: 20px;
`;
