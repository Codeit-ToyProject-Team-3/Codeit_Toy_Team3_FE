/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

import {
  TextArea,
  TextAreaCharacterCount,
  TextAreaContainer,
  TextAreaModuleContainer,
  TextAreaSubTitle,
  TextAreaWordLimit,
} from "./TextAreaModule.styled";

const TextAreaModule = ({
  title,
  placeholderContent,
  maxWords,
  commentData,
}) => {
  const textAreaRef = useRef(null);

  const [textAreaFocused, setTextAreaFocused] = useState(false);
  const [textAreaContent, setTextAreaContent] = useState(
    commentData?.content || ""
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        textAreaRef.current &&
        !textAreaRef.current.contains(e.target) &&
        e.target !== textAreaRef.current
      ) {
        setTextAreaFocused(false);
      }
    };

    const handleInputFocusBlur = (e) => {
      if (e.target === textAreaRef.current) {
        setTextAreaFocused(e.type === "focus");
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
  }, [textAreaRef]);

  const handleTextAreaContent = (e) => {
    const { value } = e.target;

    if (value.length <= maxWords) {
      setTextAreaContent(value);
    }
  };

  return (
    <TextAreaModuleContainer>
      <TextAreaSubTitle>{title}</TextAreaSubTitle>
      <TextAreaWordLimit>
        <TextAreaContainer $isFocused={textAreaFocused}>
          <TextArea
            type="text"
            placeholder={placeholderContent}
            maxLength={maxWords}
            ref={textAreaRef}
            value={textAreaContent}
            onChange={handleTextAreaContent}
            onFocus={() => setTextAreaFocused(true)}
          />
        </TextAreaContainer>
        <TextAreaCharacterCount>
          {textAreaContent.length}/{maxWords} character
        </TextAreaCharacterCount>
      </TextAreaWordLimit>
    </TextAreaModuleContainer>
  );
};

export default TextAreaModule;
