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
