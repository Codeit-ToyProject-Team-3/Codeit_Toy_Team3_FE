/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

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

const FileInputModule = ({ title, placeholderContent }) => {
  const fileInputRef = useRef(null);

  const [fileName, setFileName] = useState("");
  const [fileSizeErrorMessage, setFileSizeErrorMessage] = useState("");

  const MAX_FILE_SIZE = 2 * 1024 * 1024;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.size > MAX_FILE_SIZE) {
      setFileSizeErrorMessage(
        "파일 용량이 2MB를 초과했습니다. 다른 파일을 선택해주세요."
      );

      e.target.files = null;
      setFileName("");
    } else {
      setFileSizeErrorMessage("");

      if (e.target.files.length > 0) {
        setFileName(e.target.files[0].name);
      }
    }
  };

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  return (
    <FileInputContainer>
      <FileInputTitle>{title}</FileInputTitle>
      <FileInputValidation>
        <FileInputModuleContainer $isValid={fileSizeErrorMessage === ""}>
          <FileInput
            type="file"
            accept=".jpg, .jpeg, .png"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <SelectedFileName
            placeholder={placeholderContent}
            value={fileName}
            readOnly
          />
          <FileSelectButton onClick={handleFileSelect}>
            파일 선택
          </FileSelectButton>
        </FileInputModuleContainer>
        <FormatErrorMessage $isValid={fileSizeErrorMessage === ""}>
          {fileSizeErrorMessage}
        </FormatErrorMessage>
      </FileInputValidation>
    </FileInputContainer>
  );
};

export default FileInputModule;
