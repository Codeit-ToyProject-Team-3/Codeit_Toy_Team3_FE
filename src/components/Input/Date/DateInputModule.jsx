/* eslint-disable react/prop-types */
import { forwardRef, useRef, useState } from "react";

import {
  CalendarButton,
  DateInputContainer,
  DateInputTitle,
  DateInputWrapper,
  StyledCalendarIcon,
} from "./DateInputModule.styled";

import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";

const DateInputModule = ({ title }) => {
  const datePickerRef = useRef(null);

  const [selectedDate, setSelectedDate] = useState("");
  const [isOpen, setIsOpen] = useState(false); // 달력 열기 상태 관리

  // 달력 아이콘 클릭 시, 달력 열기 상태를 true로 설정
  const handleCalendarIconClick = () => {
    setIsOpen(true);
  };

  // eslint-disable-next-line react/display-name
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="custom-input" onClick={onClick} ref={ref}>
      {value || <p className="placeholder">YYYY-MM-DD</p>}
    </div>
  ));

  return (
    <>
      <DateInputWrapper>
        <DateInputTitle>{title}</DateInputTitle>
        <DateInputContainer>
          <DatePicker
            dateFormat="yyyy-MM-dd"
            ref={datePickerRef}
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setIsOpen(false); // 날짜를 선택하면 달력 닫기
            }}
            open={isOpen} // 강제로 달력 열기
            onClickOutside={() => setIsOpen(false)} // 클릭 외부 영역 시 달력 닫기
            customInput={<CustomInput />}
          />
          <CalendarButton onClick={handleCalendarIconClick}>
            <StyledCalendarIcon />
          </CalendarButton>
        </DateInputContainer>
      </DateInputWrapper>
    </>
  );
};

export default DateInputModule;
