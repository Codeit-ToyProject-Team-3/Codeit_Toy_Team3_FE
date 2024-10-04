/* eslint-disable react/prop-types */
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
  taregtRef,
  textAreaContent,
  handleTextAreaContent,
  targetInputFocused,
  setTargetInputFocused,
}) => {
  return (
    <TextAreaModuleContainer>
      <TextAreaSubTitle>{title}</TextAreaSubTitle>
      <TextAreaWordLimit>
        <TextAreaContainer $isFocused={targetInputFocused}>
          <TextArea
            type="text"
            placeholder={placeholderContent}
            maxLength={maxWords}
            ref={taregtRef}
            value={textAreaContent}
            onChange={handleTextAreaContent}
            onFocus={() => setTargetInputFocused(true)}
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
