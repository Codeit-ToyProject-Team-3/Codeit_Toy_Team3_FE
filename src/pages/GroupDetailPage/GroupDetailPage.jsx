import { useEffect, useState } from "react";
import axios from "axios";

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
import PublicMemoeryCard from "@components/PublicMemoryCard/PublicMemoryCard";
import PrivateMemoryCard from "@components/PrivateMemoryCard/PrivateMemoryCard";

const GroupDetailPage = () => {
  const [privacyMemory, setPrivacyMemory] = useState("공개");
  const [groupMemoryList, setGroupMemoryList] = useState([]);
  const [groupMemoryTotalPage, setGroupMemoryTotalPage] = useState([]);

  useEffect(() => {
    const fetchGroupMemoryCardInfos = async () => {
      try {
        const response = await axios.get("/data/memoryList.json");
        const fetchedMemoryList = response.data;
        const fetchedMemoryInfo = fetchedMemoryList.data;

        console.log(fetchedMemoryList);

        const filteredMemoryInfos = fetchedMemoryInfo.filter(
          (memory) => memory?.isPublic === privacyMemory
        );

        setGroupMemoryList(filteredMemoryInfos);
        setGroupMemoryTotalPage(fetchedMemoryList.totalPages);
      } catch (error) {
        console.error("Error occured: ", error);
      }
    };

    fetchGroupMemoryCardInfos();
  }, [privacyMemory]);

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
        {privacyMemory === "공개" ? (
          <PublicMemoeryCard
            groupMemoryList={groupMemoryList}
            listTotalPage={groupMemoryTotalPage}
          />
        ) : (
          <PrivateMemoryCard
            groupMemoryList={groupMemoryList}
            listTotalPage={groupMemoryTotalPage}
          />
        )}
      </GroupDetailPageContainer>
    </>
  );
};

export default GroupDetailPage;
