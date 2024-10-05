import { useState } from "react";

import {
  CreateGroupMemoryButton,
  GroupDetailDivider,
  GroupDetailPageContainer,
  GroupMemoryHeader,
  GroupMemorySectionTitle,
} from "./GroupDetailPage.styled";

import Header from "@layout/Header/Header";

import GroupDetailCard from "@components/GroupDetailCard/GroupDetailCard";
import GroupSearchBar from "@layout/GroupSearchBar/GroupSearchBar";

const GroupDetailPage = () => {
  const [privacyMemory, setPrivacyMemory] = useState("공개");

  return (
    <>
      <Header />
      <GroupDetailPageContainer>
        <GroupDetailCard />
        <GroupDetailDivider />
        <GroupMemoryHeader>
          <GroupMemorySectionTitle>추억 목록</GroupMemorySectionTitle>
          <CreateGroupMemoryButton>추억 올리기</CreateGroupMemoryButton>
        </GroupMemoryHeader>
        <GroupSearchBar
          privacyCategory={privacyMemory}
          setPrivacyCategory={setPrivacyMemory}
        />
      </GroupDetailPageContainer>
    </>
  );
};

export default GroupDetailPage;
