import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  CreateGroupMemoryButton,
  CreateGroupMemoryButtonLarge,
  GroupDetailDivider,
  GroupDetailPageContainer,
  GroupMemoryHeader,
  GroupMemorySectionTitle,
  NoGroupMemoryContainer,
} from "./GroupDetailPage.styled";

import Header from "@layout/Header/Header";
import GroupSearchBar from "@layout/GroupSearchBar/GroupSearchBar";
import GroupDetailCard from "@components/GroupDetailCard/GroupDetailCard";
import PublicMemoryCard from "@components/PublicMemoryCard/PublicMemoryCard";
import PrivateMemoryCard from "@components/PrivateMemoryCard/PrivateMemoryCard";

import noMemoryIcon from "@assets/no-group-icon.svg";

const GroupDetailPage = () => {
  const [privacyMemory, setPrivacyMemory] = useState("공개");
  const [groupMemoryList, setGroupMemoryList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  // Fetching Group Memory Data
  useEffect(() => {
    const fetchGroupMemoryCardInfos = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/data/memory-list.json");
        const fetchedMemoryList = response.data;
        const fetchedMemoryInfo = fetchedMemoryList.data;

        console.log(fetchedMemoryList);

        const filteredMemoryInfos = fetchedMemoryInfo.filter(
          (memory) => memory?.isPublic === privacyMemory
        );

        setGroupMemoryList(filteredMemoryInfos);
      } catch (error) {
        console.error("Error occured: ", error);
        setGroupMemoryList([]);
      } finally {
        setIsLoading(false);
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
          <Link to="/create-memory">
            <CreateGroupMemoryButton>추억 올리기</CreateGroupMemoryButton>
          </Link>
        </GroupMemoryHeader>
        <GroupSearchBar
          privacyCategory={privacyMemory}
          setPrivacyCategory={setPrivacyMemory}
          placeholderContent="태그 혹은 제목을 입력해주세요"
        />
        {isLoading ? (
          <p>Loading...</p>
        ) : groupMemoryList === undefined || groupMemoryList?.length === 0 ? (
          <>
            <NoGroupMemoryContainer>
              <img src={noMemoryIcon} alt="No-Memory-Icon" />
              <h2 className="notice-1">게시된 추억이 없습니다.</h2>
              <h3 className="notice-2">첫 번째 추억을 올려보세요!</h3>
            </NoGroupMemoryContainer>
            <Link to="/create-memory">
              <CreateGroupMemoryButtonLarge>
                추억 올리기
              </CreateGroupMemoryButtonLarge>
            </Link>
          </>
        ) : privacyMemory === "공개" ? (
          <PublicMemoryCard groupMemoryList={groupMemoryList} />
        ) : (
          <PrivateMemoryCard groupMemoryList={groupMemoryList} />
        )}
      </GroupDetailPageContainer>
    </>
  );
};

export default GroupDetailPage;
