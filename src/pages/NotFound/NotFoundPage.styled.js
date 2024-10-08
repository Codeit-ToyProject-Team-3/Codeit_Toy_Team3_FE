import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import NotFoundIcon from "@assets/404-icon.svg?react";

export const NotFoundPageContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
`;

export const StyledNotFoundIcon = styled(NotFoundIcon)``;

export const NotFoundContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .not-found_title {
    ${({ theme }) => theme.fontStyles.Body1}
    color: ${colors.gray[500]};
  }

  .not-found_description {
    ${({ theme }) => theme.fontStyles.Body1}
    color: ${colors.gray[400]};
  }
`;
