/* eslint-disable react/prop-types */
import {
  ToggleButtonCheckBox,
  ToggleButtonContainer,
  ToggleButtonContent,
  ToggleButtonLabel,
  ToggleButtonText,
  ToggleButtonTitle,
} from "./ToggleButton.styled";

const ToggleButton = ({ title, stateText, handleStateText, inputID }) => {
  return (
    <ToggleButtonContainer>
      <ToggleButtonTitle>{title}</ToggleButtonTitle>
      <ToggleButtonContent>
        <ToggleButtonText>{stateText}</ToggleButtonText>
        <ToggleButtonCheckBox
          type="checkbox"
          id={inputID}
          onChange={handleStateText}
        />
        <ToggleButtonLabel htmlFor={inputID} />
      </ToggleButtonContent>
    </ToggleButtonContainer>
  );
};
export default ToggleButton;
