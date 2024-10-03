import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const AccessPageContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccessPageContent = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

export const AccessPageHeader = styled.div`
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  color: ${colors.black};

  .title {
    ${({ theme }) => theme.fontStyles.Header2}
  }

  .sub-title {
    ${({ theme }) => theme.fontStyles.Caption2}
  }
`;

export const GroupPasswordContainer = styled.div`
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  gap: 10px;

  .password-title {
    ${({ theme }) => theme.fontStyles.Body4}
    color: ${colors.black};
  }
`;

export const PasswordSubmitButton = styled.button`
  width: 100%;
  height: 50px;

  border-radius: 6px;
  background-color: ${colors.black};

  ${({ theme }) => theme.fontStyles.Body4}
  color: ${colors.gray[50]};
`;
