import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import leftRightDivider from "@assets/left-right-divider.svg?react";

export const CreateMemoryPageContainer = styled.div`
  width: 100%;
  margin-top: 178px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

export const CreateMemoryPageTitle = styled.h2`
  ${({ theme }) => theme.fontStyles.Header2}
  color: ${colors.black};
`;

export const CreateMemoryContent = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

export const StyledLeftRightDivider = styled(leftRightDivider)`
  height: 100%;
`;

export const CreateMemoryModule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const CreateMemoryButton = styled.button`
  width: 400px;
  height: 50px;

  margin-bottom: 127px;

  border-radius: 6px;

  ${({ theme }) => theme.fontStyles.Body4}
  color: ${colors.gray[50]};

  background-color: ${colors.black};
`;
