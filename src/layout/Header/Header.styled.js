import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;

  background-color: ${colors.white};
  border-bottom: 2px solid ${colors.gray[200]};
`;

export const MainLogo = styled.img`
  width: 137px;
  height: 48px;

  cursor: pointer;
`;

export const CreateGroupButton = styled.button`
  width: 200px;
  height: 45px;

  position: absolute;
  top: 27px;
  right: 180px;

  ${({ theme }) => theme.fontStyles.Caption1}
  color: ${colors.gray[50]};
  background-color: ${colors.black};
  border-radius: 6px;
`;
