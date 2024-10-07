/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

import {
  StyledRemoveIcon,
  TagInput,
  TagInputContainer,
  TagInputTitle,
  TagInputWrapper,
  TagListContainer,
  TagModule,
} from "./HashtagInput.styled";

const HashtagInput = ({ title, placeholderContent }) => {
  const textInputRef = useRef(null);

  const [textInputFocused, setTextInputFocused] = useState(false);
  const [textValue, setTextValue] = useState("");

  const [hashtagList, setHashtagList] = useState([]); // 해시태그 목록을 저장할 상태
  const [isKorean, setIsKorean] = useState(false);

  const handleTextInputValue = (e) => {
    const inputValue = e.target.value;
    setTextValue(inputValue);
  };

  // 태그 추가
  const addTag = (tag) => {
    if (!hashtagList.includes(tag)) {
      setHashtagList([...hashtagList, tag]); // 태그 목록에 추가
    }
    setTextValue(""); // 해시태그 목록에 추가한 후에는 입력 필드 값을 비움
  };

  // 태그 삭제
  const removeTag = (tagToRemove) => {
    setHashtagList(hashtagList.filter((tag) => tag !== tagToRemove)); // 선택한 태그를 삭제
  };

  // Enter 키를 눌렀을 때 해시태그 추가
  const handleKeyDown = (e) => {
    if (!isKorean && e.key === "Enter" && textValue.trim() !== "") {
      e.preventDefault(); // Enter로 줄바꿈이 되는 기본 동작 방지
      addTag(textValue);
    }
  };

  // 조합형 입력 시작 (한글 입력 시작)
  const handleCompositionStart = () => {
    setIsKorean(true);
  };

  // 조합형 입력 완료 (한글 입력 끝)
  const handleCompositionEnd = () => {
    setIsKorean(false);
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
    <TagInputWrapper>
      <TagInputTitle>{title}</TagInputTitle>
      <TagInputContainer $isFocused={textInputFocused}>
        <TagInput
          type="text"
          placeholder={placeholderContent}
          onFocus={() => setTextInputFocused(true)}
          ref={textInputRef}
          value={textValue}
          onChange={handleTextInputValue}
          onKeyDown={handleKeyDown}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
        />
      </TagInputContainer>
      <TagListContainer>
        {hashtagList.map((tag, index) => (
          <TagModule key={index}>
            <p className="tag">#{tag}</p>
            <StyledRemoveIcon onClick={() => removeTag(tag)} />
          </TagModule>
        ))}
      </TagListContainer>
    </TagInputWrapper>
  );
};

export default HashtagInput;
