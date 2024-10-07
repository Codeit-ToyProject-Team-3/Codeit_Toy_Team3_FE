import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import { Modal as BaseModal } from "@mui/base";

export const ProfileEditModalCustom = styled(BaseModal)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 100;
  inset: 0;
`;

export const EditModalContent = styled.div`
  width: 480px;
  padding: 40px;

  position: relative;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 40px;

  border-radius: 6px;
  background-color: ${colors.gray[50]};

  box-shadow: 0 4px 12px rgb(0 0 0 / 0.5);

  .modal-title {
    ${({ theme }) => theme.fontStyles.Header2}
  }
`;

export const EditProfileButton = styled.button`
  width: 100%;
  height: 50px;

  border-radius: 6px;
  background-color: ${colors.black};

  ${({ theme }) => theme.fontStyles.Body4}
  color: ${colors.gray[50]};
`;
