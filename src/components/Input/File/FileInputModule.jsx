/* eslint-disable react/prop-types */
import {
  FileInput,
  FileInputContainer,
  FileInputModuleContainer,
  FileInputTitle,
  FileInputValidation,
  FileSelectButton,
  FormatErrorMessage,
  SelectedFileName,
} from "./FileInputModule.styled";

const FileInputModule = ({
  title,
  errorMessage,
  targetRef,
  handleImageChange,
  imageName,
  handleImageSelect,
  placeholderContent,
}) => {
  return (
    <>
      <FileInputContainer>
        <FileInputTitle>{title}</FileInputTitle>
        <FileInputValidation>
          <FileInputModuleContainer $isValid={errorMessage === ""}>
            <FileInput
              type="file"
              accept=".jpg, .jpeg, .png"
              ref={targetRef}
              onChange={handleImageChange}
            />
            <SelectedFileName
              placeholder={placeholderContent}
              value={imageName}
              readOnly
            />
            <FileSelectButton onClick={handleImageSelect}>
              파일 선택
            </FileSelectButton>
          </FileInputModuleContainer>
          <FormatErrorMessage $isValid={errorMessage === ""}>
            {errorMessage}
          </FormatErrorMessage>
        </FileInputValidation>
      </FileInputContainer>
    </>
  );
};

export default FileInputModule;
