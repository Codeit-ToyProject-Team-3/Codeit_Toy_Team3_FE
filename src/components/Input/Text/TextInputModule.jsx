/* eslint-disable react/prop-types */
import {
  ErrorMessage,
  TextInput,
  TextInputContainer,
  TextInputTitle,
  TextInputWrapper,
} from "./TextInputModule.styled";

const TextInputModule = ({
  title,
  taregtInputFocused,
  errorMessage,
  setTargetInputFocused,
  targetRef,
  targetInputValue,
  handleTargetInputValue,
  placeholderContent,
  InputErrorMessage,
}) => {
  return (
    <TextInputWrapper>
      <TextInputTitle>{title}</TextInputTitle>
      <TextInputContainer
        $isFocused={taregtInputFocused}
        $isValid={errorMessage === ""}
      >
        <TextInput
          onFocus={() => setTargetInputFocused(true)}
          ref={targetRef}
          value={targetInputValue}
          onChange={handleTargetInputValue}
          placeholder={placeholderContent}
        />
      </TextInputContainer>
      <ErrorMessage $isValid={InputErrorMessage === ""}>
        {InputErrorMessage}
      </ErrorMessage>
    </TextInputWrapper>
  );
};

export default TextInputModule;
