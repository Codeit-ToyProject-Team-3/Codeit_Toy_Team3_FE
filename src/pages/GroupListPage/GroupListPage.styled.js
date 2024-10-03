import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const GroupListPageContainer = styled.div`
  width: 100%;
  margin-top: 140px;
  padding: 0 180px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoGroupContainer = styled.div`
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

export const CreateGroupButtonLarge = styled.button`
  width: 400px;
  height: 50px;
  margin-bottom: 264px;

  border-radius: 6px;

  ${({ theme }) => theme.fontStyles.Caption1}
  background-color: ${colors.black};
  color: ${colors.gray[50]};
`;
