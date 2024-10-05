import { colors } from "@styles/theme/colors";
import styled from "styled-components";

import LikeIcon from "@assets/group_like-icon.svg?react";

export const GroupDetailCardContainer = styled.div`
  width: 100%;
  min-width: 262px;
  height: 273px;

  display: flex;
  align-items: center;
  gap: 60px;
`;

export const GroupDetailImage = styled.img`
  width: 262px;
  height: 100%;

  border-radius: 6px;

  flex-shrink: 0;
`;

export const GroupDetailContent = styled.div`
  flex-grow: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const GroupDetailHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GroupManagement = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  ${({ theme }) => theme.fontStyles.Caption2}

  white-space: nowrap;

  .edit {
    color: ${colors.black};
  }

  .delete {
    color: ${colors.gray[500]};
  }
`;

export const GroupDetailMain = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  color: ${colors.black};
`;

export const GroupDetailTitle = styled.h1`
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.fontStyles.Header1}
`;

export const GroupDetailStatContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const GroupDetailStatModule = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  white-space: nowrap;

  h3 {
    ${({ theme }) => theme.fontStyles.Body1}
    letter-spacing: -0.54px;
  }
`;

export const GroupDetailIntro = styled.p`
  flex-grow: 1;

  ${({ theme }) => theme.fontStyles.Body2}
`;

export const BadgeSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .title {
    ${({ theme }) => theme.fontStyles.Body3}
  }
`;

export const BadgeLikeContainer = styled.div`
  width: 100%;
  height: 52px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BadegeList = styled.div`
  height: 52px;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BadgeModule = styled.button`
  width: fit-content;
  height: 52px;
  padding: 16px 30px;

  border-radius: 50px;
  background-color: ${colors.gray[100]};

  white-space: nowrap;

  ${({ theme }) => theme.fontStyles.Caption1}
  font-weight: 500;
  letter-spacing: -0.48px;
`;

export const LikeButton = styled.button`
  width: 188px;
  height: 100%;
  padding: 15px 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 6px;
  border: 1px solid ${colors.black};
  background-color: inherit;

  ${({ theme }) => theme.fontStyles.Body4}
  letter-spacing: -0.48px;
`;

export const StyledLikeIcon = styled(LikeIcon)`
  width: 21px;
  height: 21px;
`;
