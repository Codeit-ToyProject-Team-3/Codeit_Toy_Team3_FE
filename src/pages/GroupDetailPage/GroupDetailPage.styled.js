import { colors } from "@styles/theme/colors";
import styled from "styled-components";

export const GroupDetailPageContainer = styled.div`
  width: 100%;
  padding: 0 180px;
  margin-top: 160px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GroupDetailDivider = styled.div`
  width: 100%;
  height: 1px;

  margin-top: 120px;
  margin-bottom: 127px;

  background-color: ${colors.gray[200]};
`;

export const GroupMemorySectionTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.Header2}
`;

export const GroupMemoryHeader = styled.div`
  width: 100%;
  height: 45px;
  margin-bottom: 68px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CreateGroupMemoryButton = styled.button`
  width: 200px;
  height: 45px;

  position: absolute;
  top: 0;
  right: 0;

  border-radius: 6px;
  background-color: ${colors.black};

  ${({ theme }) => theme.fontStyles.Caption1}
  color: ${colors.gray[50]};
`;

export const NoGroupMemoryContainer = styled.div`
  width: 100%;
  margin-top: 200px;
  margin-bottom: 180px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  img {
    width: 100px;
    height: 100px;
  }

  .notice-1 {
    ${({ theme }) => theme.fontStyles.Body1}
    color: ${colors.gray[500]};
  }

  .notice-2 {
    ${({ theme }) => theme.fontStyles.Caption2}
    color: ${colors.gray[400]};
  }
`;

export const CreateGroupMemoryButtonLarge = styled.button`
  width: 400px;
  height: 50px;
  margin-bottom: 264px;

  border-radius: 6px;

  ${({ theme }) => theme.fontStyles.Caption1}
  background-color: ${colors.black};
  color: ${colors.gray[50]};
`;
