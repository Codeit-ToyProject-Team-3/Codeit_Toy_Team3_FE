import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  CreateGroupButtonLarge,
  GroupListPageContainer,
  NoGroupContainer,
} from "./GroupListPage.styled";

import Header from "@layout/Header/Header";
import GroupSearchBar from "@layout/GroupSearchBar/GroupSearchBar";
import PublicGroupCard from "@components/PublicGroupCard/PublicGroupCard";

import noGroupIcon from "@assets/no-group-icon.svg";
import PrivateGroupCard from "@components/PrivateGroupCard/PrivateGroupCard";

const GroupListPage = () => {
  const [privacyCategory, setPrivacyCategory] = useState("공개");

  const [groupList, setGroupList] = useState(null);
  const [listTotalPage, setListTotalPage] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  // Fetching Group List Data
  useEffect(() => {
    const fetchPublicGroupList = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/data/groupCard.json");
        const fetchedGroupListData = response.data;
        const fetchedGroupList = fetchedGroupListData.data;
        console.log(fetchedGroupList);

        const filteredGroupList = fetchedGroupList?.filter(
          (group) => group.isPublic === privacyCategory
        );
        console.log(filteredGroupList);

        setGroupList(filteredGroupList);
        setListTotalPage(fetchedGroupListData.totalPages);
      } catch (error) {
        console.error("Error fetching group list", error);
        setGroupList([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPublicGroupList();
  }, [privacyCategory]);

  return (
    <>
      <Header />
      <GroupListPageContainer>
        <GroupSearchBar
          privacyCategory={privacyCategory}
          setPrivacyCategory={setPrivacyCategory}
        />
        {isLoading ? (
          <p>Loading...</p>
        ) : groupList === undefined || groupList?.length === 0 ? (
          <>
            <NoGroupContainer>
              <img src={noGroupIcon} alt="No-Group-Icon" />
              <h2 className="notice-1">등록된 공개 그룹이 없습니다.</h2>
              <h3 className="notice-2">가장 먼저 그룹을 만들어보세요!</h3>
            </NoGroupContainer>
            <Link to="/create-group">
              <CreateGroupButtonLarge>그룹 만들기</CreateGroupButtonLarge>
            </Link>
          </>
        ) : privacyCategory === "공개" ? (
          <PublicGroupCard
            publicGroupList={groupList}
            listTotalPage={listTotalPage}
          />
        ) : (
          <PrivateGroupCard
            privateGroupList={groupList}
            listTotalPage={listTotalPage}
          />
        )}
      </GroupListPageContainer>
    </>
  );
};

export default GroupListPage;
