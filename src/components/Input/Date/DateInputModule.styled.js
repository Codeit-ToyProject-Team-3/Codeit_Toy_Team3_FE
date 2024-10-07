import { colors } from "@styles/theme/colors";
import styled from "styled-components";

import calendarIcon from "@assets/calendar-icon.svg?react";

export const DateInputWrapper = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  color: ${colors.black};
`;

export const DateInputTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.Body4}
`;

export const DateInputContainer = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  align-items: center;

  border: 1px solid ${colors.gray[200]};
  border-radius: 6px;

  background-color: inherit;

  .react-datepicker-wrapper {
    width: 100%;
    height: 100%;
  }

  .react-datepicker__input-container {
    width: 100%;
    height: 100%;
    padding-left: 20px;
  }

  .custom-input {
    width: fit-content;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background: transparent;

    ${({ theme }) => theme.fontStyles.Caption2}
  }

  .placeholder {
    color: ${colors.gray[400]};
  }
`;

export const DateInput = styled.input`
  width: 100%;
  height: 100%;

  padding-left: 20px;

  border: none;
  background: transparent;

  appearance: none; /* 브라우저 기본 스타일 제거 */
  -webkit-appearance: none; /* Safari, Chrome */
  -moz-appearance: none; /* Firefox */

  &::-webkit-calendar-picker-indicator {
    display: none; /* 기본 달력 아이콘 제거 */
  }
`;

export const CalendarButton = styled.button`
  width: 24px;
  height: 24px;

  margin-right: 20px;
`;

export const StyledCalendarIcon = styled(calendarIcon)`
  width: 24px;
  height: 24px;
`;
