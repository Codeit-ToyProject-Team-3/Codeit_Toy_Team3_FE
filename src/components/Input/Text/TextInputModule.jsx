/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

import {
  ErrorMessage,
  TextInput,
  TextInputContainer,
  TextInputTitle,
  TextInputWrapper,
} from "./TextInputModule.styled";

const TextInputModule = ({ title, placeholderContent, commentNickname }) => {
  const textInputRef = useRef(null);

  const [textInputFocused, setTextInputFocused] = useState(false);
  const [textValue, setTextValue] = useState(commentNickname?.nickname || "");
  const [inputErrorMessage, setInputErrorMessage] = useState("");

  const handleTextInputValue = (e) => {
    const inputValue = e.target.value;
    setTextValue(inputValue);

    const isValid = /^[a-zA-Z가-힣0-9!@#$%^_]*$/.test(inputValue);

    if (isValid) {
      setInputErrorMessage("");
    } else {
      setInputErrorMessage("특수문자는 !@#$%^_만 사용하실 수 있습니다.");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        textInputRef.current &&
        !textInputRef.current.contains(e.target) &&
        e.target !== textInputRef.current
      ) {
        setTextInputFocused(false);
      }
    };

    const handleInputFocusBlur = (e) => {
      if (e.target === textInputRef.current) {
        setTextInputFocused(e.type === "focus");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("focus", handleInputFocusBlur, true);
    document.addEventListener("blur", handleInputFocusBlur, true);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("focus", handleInputFocusBlur, true);
      document.addEventListener("blur", handleInputFocusBlur, true);
    };
  }, [textInputRef]);

  return (
    <TextInputWrapper>
      <TextInputTitle>{title}</TextInputTitle>
      <TextInputContainer
        $isFocused={textInputFocused}
        $isValid={inputErrorMessage === ""}
      >
        <TextInput
          onFocus={() => setTextInputFocused(true)}
          ref={textInputRef}
          value={textValue}
          onChange={handleTextInputValue}
          placeholder={placeholderContent}
        />
      </TextInputContainer>
      <ErrorMessage $isValid={inputErrorMessage === ""}>
        {inputErrorMessage}
      </ErrorMessage>
    </TextInputWrapper>
  );
};

export default TextInputModule;
