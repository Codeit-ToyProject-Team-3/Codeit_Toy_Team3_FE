import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const CreateGroupPageContainer = styled.div`
  width: 100%;
  margin-top: 142px; // Header 102px + 40px
  margin-bottom: 141px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;

  color: ${colors.black};
`;

export const CreateGroupTitle = styled.h2`
  ${({ theme }) => theme.fontStyles.Header2}
`;

// 만들기 Button
export const CreateGroupButton = styled.button`
  width: 400px;
  height: 50px;

  border-radius: 6px;
  background-color: ${colors.black};

  ${({ theme }) => theme.fontStyles.Body4}
  color: ${colors.gray[50]};
`;
