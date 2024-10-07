import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const MemoryDetailPageContainer = styled.div`
  width: 100%;
  margin-top: 160px;
  padding: 0 180px;
  padding-bottom: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

export const MemoryDetailDivider = styled.div`
  width: 100%;
  height: 2px;

  background-color: ${colors.gray[200]};
  opacity: 0.5;
`;

export const MemoryDetailMainContent = styled.div`
  width: 780px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

export const MemoryDetailImage = styled.img`
  width: 100%;
  height: 780px;

  border-radius: 6px;
`;

export const MemoryDescription = styled.div`
  width: 100%;

  ${({ theme }) => theme.fontStyles.Header3}
  letter-spacing: -0.6px;

  color: ${colors.black};
`;
