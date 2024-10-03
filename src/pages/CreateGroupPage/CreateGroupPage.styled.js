import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import eyeIcon from "@assets/eye-icon.svg?react";

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

export const CreateGroupSubTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.Body4}
`;

export const GroupModuleContainer = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// 그룹명 Section

export const GroupNameInputContainer = styled.div`
  width: 100%;
  position: relative;
  height: 45px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;

    width: ${({ $isFocused }) => ($isFocused ? "100%" : "0")};
    height: 45px;
    margin-left: ${({ $isFocused }) => ($isFocused ? "0" : "-3%")};

    border: 1px solid;
    border-color: ${({ $isValid }) =>
      $isValid ? `${colors.black}` : `${colors.red}`};
    border-radius: 6px;
    background-color: transparent;

    opacity: ${({ $isFocused }) => ($isFocused ? 1 : 0)};
    transition: margin-left 0.3s, width 0.35s;
    pointer-events: none;
  }
`;

const GroupInputModule = styled.input`
  height: 100%;
  padding: 14px 20px;

  background-color: inherit;
  border: 1px solid ${colors.gray[200]};
  border-radius: 6px;

  ${({ theme }) => theme.fontStyles.Caption2}
  color: ${colors.black};

  &::placeholder {
    color: ${colors.gray[400]};
  }
`;

export const GroupNameInput = styled(GroupInputModule)`
  width: 100%;
`;

export const InputErrorMessage = styled.p`
  /* height: 15px; */

  ${({ theme }) => theme.fontStyles.Footnote}
  color: ${colors.red};

  opacity: ${({ $isValid }) => ($isValid ? 0 : 1)};
  transition: opacity 0.3s ease;
`;

// 대표 이미지 Section
export const GroupImageContainer = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  align-items: center;
  gap: 10px;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;

    width: 290px;
    height: 45px;

    border: 1px solid;
    border-color: ${({ $isValid }) =>
      $isValid ? `${colors.gray[200]}` : `${colors.red}`};
    border-radius: 6px;
    background-color: transparent;

    opacity: ${({ $isValid }) => ($isValid ? 0 : 1)};
    transition: opacity 0.1s;
    pointer-events: none;
  }
`;

export const GroupImageInput = styled.input`
  display: none;
`;

export const GroupImageFileName = styled(GroupInputModule)`
  width: 290px;

  white-space: nowrap;
  text-overflow: ellipsis;

  pointer-events: none;
`;

export const FileSelectButton = styled.button`
  flex-grow: 1;
  height: 100%;

  background-color: inherit;
  border: 1px solid ${colors.black};
  border-radius: 6px;
`;

// 그룹 소개 Section
export const GroupIntroductionContainer = styled.div`
  width: 100%;
  height: 120px;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;

    width: ${({ $isFocused }) => ($isFocused ? "100%" : "0")};
    height: 100%;
    margin-left: ${({ $isFocused }) => ($isFocused ? "0" : "-3%")};

    border: 1px solid ${colors.black};
    border-radius: 6px;
    background-color: transparent;

    opacity: ${({ $isFocused }) => ($isFocused ? 1 : 0)};
    transition: margin-left 0.3s, width 0.35s;
    pointer-events: none;
  }
`;

export const GroupIntroductionWordLimit = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const IntroCharacterCount = styled.p`
  align-self: flex-end;
  margin-right: 5px;

  ${({ theme }) => theme.fontStyles.Footnote}
  color: ${colors.gray[500]};
`;

export const GroupImageValidation = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const GroupIntroductionArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 14px 20px;

  position: relative;

  resize: none; /* 사용자가 크기를 조절할 수 없게 설정 */
  background-color: inherit;
  border: 1px solid ${colors.gray[200]};
  border-radius: 6px;

  ${({ theme }) => theme.fontStyles.Caption2}
  color: ${colors.black};

  outline: none;

  &::placeholder {
    color: ${colors.gray[400]};
  }
`;

// 그룹 공개 선택 Section

export const GroupPrivacyContainer = styled(GroupModuleContainer)`
  gap: 20px;
`;

export const GroupPrivacyContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 20px;

  position: relative;
`;

export const GroupPrivacyText = styled.p`
  width: 40px;

  ${({ theme }) => theme.fontStyles.Caption2}
`;

export const PrivacyToggleInput = styled.input`
  position: absolute;
  top: 0;
  left: 100px;

  width: 10px;
  height: 10px;
  visibility: hidden;

  &:checked + label {
    background: linear-gradient(
      to right,
      #ffffff,
      #f5f3f5,
      #ece7ea,
      #e5dcde,
      #ddd0d0
    );
  }

  &:checked + label::after {
    transform: translateX(22px);
    background: linear-gradient(180deg, #ffcc89, #d8860b);
  }
`;

export const PrivacyToggleContainer = styled.label`
  width: 48px;
  height: 24px;

  position: relative;
  display: block;

  border-radius: 15px;
  background: linear-gradient(
    to left,
    #5b5b5b,
    #4f4f4f,
    #444344,
    #393838,
    #2f2d2d
  );

  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
    inset 0px -5px 15px rgba(255, 255, 255, 0.4);

  cursor: pointer;

  transition: background 0.3s ease;

  &::after {
    content: "";
    width: 20px;
    height: 20px;

    position: absolute;
    top: 2px;
    left: 3px;

    border-radius: 50%;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(180deg, #777, #3a3a3a);

    transition: width 0.2s, background 0.3s, transform 0.25s;
  }

  &:active::after {
    width: 21px;
  }
`;

// 비밀번호 생성 Section
export const PasswordInputContainer = styled.div`
  width: 100%;
  height: 45px;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 10px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;

    width: ${({ $isFocused }) => ($isFocused ? "100%" : "0")};
    height: 45px;
    margin-left: ${({ $isFocused }) => ($isFocused ? "0" : "-3%")};

    border: 1px solid;
    border-color: ${({ $isValid }) =>
      $isValid ? `${colors.black}` : `${colors.red}`};
    border-radius: 6px;
    background-color: transparent;

    opacity: ${({ $isFocused }) => ($isFocused ? 1 : 0)};
    transition: margin-left 0.3s, width 0.35s;
    pointer-events: none;
  }
`;

export const PasswordInput = styled(GroupInputModule)`
  width: 100%;
  ${({ theme }) => theme.fontStyles.Caption2}
`;

export const PasswordVisibleButton = styled.button`
  width: 20px;
  height: 20px;

  position: absolute;
  top: 12.5px;
  right: 15px;
`;

export const StyledEyeIcon = styled(eyeIcon)`
  position: absolute;
  top: 0;
  right: 0;

  width: 100%;
  height: 100%;

  path {
    stroke: ${({ $passwordVisible }) =>
      $passwordVisible ? `${colors.gray[400]}` : `${colors.black}`};

    transition: stroke 0.1s;
  }
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
