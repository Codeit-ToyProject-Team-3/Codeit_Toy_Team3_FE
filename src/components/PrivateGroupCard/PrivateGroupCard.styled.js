import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import {
  PublicGroupCardContainer,
  PublicGroupListContainer,
} from "@components/PublicGroupCard/PublicGroupCard.styled";

export const PrivateGroupListContainer = styled(PublicGroupListContainer)``;

export const PrivateGroupCardContainer = styled(PublicGroupCardContainer)`
  height: 156px;
  padding: 0;
  padding-left: 20px;

  justify-content: center;

  color: ${colors.black};
`;
