import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const MemoryCardContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const MemoryCardHeader = styled.div`
  width: 100%;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
`;

export const WriterPrivacyContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;

  ${({ theme }) => theme.fontStyles.Body5}
  letter-spacing: -0.48px;

  .nickname {
    color: ${colors.black};
  }

  .divider {
    color: ${colors.gray[400]};
  }

  .privacy {
    color: ${colors.gray[500]};
  }
`;

export const MemoryEditDeleteContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 60px;

  .edit {
    color: ${colors.black};
  }

  .delete {
    color: ${colors.gray[500]};
  }
`;

export const MemoryManageButton = styled.button`
  ${({ theme }) => theme.fontStyles.Caption2}
  letter-spacing: -0.42px;
`;

export const MemoryCardMainContent = styled.div`
  width: 100%;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  .title {
    ${({ theme }) => theme.fontStyles.Header1}
    letter-spacing: -0.9px;

    color: ${colors.black};
  }
`;

export const MemoryHashtagContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 10px;

  ${({ theme }) => theme.fontStyles.Body2}
  letter-spacing: -0.54px;

  color: ${colors.gray[400]};
`;

export const MemoryDetailCardFooter = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MemoryDetailFooterInfos = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 35px;

  .location-moment {
    ${({ theme }) => theme.fontStyles.Body3}
    letter-spacing: -0.48px;

    color: ${colors.black};
  }

  .like-comment {
    ${({ theme }) => theme.fontStyles.Caption2}
    letter-spacing: -0.42px;

    color: ${colors.gray[500]};
  }
`;
