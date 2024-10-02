import { useEffect, useState } from "react";
import axios from "axios";

import {
  PrivateGroupCardContainer,
  PrivateGroupListContainer,
} from "./PrivateGroupCard.styled";

import {
  GroupCardFooter,
  GroupCardFooterModule,
  GroupCardHeader,
  GroupCardMainContent,
  GroupLikeContainer,
  StyledLikeIcon,
} from "@components/PublicGroupCard/PublicGroupCard.styled";

const PrivateGroupCard = () => {
  const [publicGroupList, setPublicGroupList] = useState([]);
  //   const [listTotalPage, setListTotalPage] = useState(0);

  useEffect(() => {
    const fetchPublicGroupList = async () => {
      const response = await axios.get("/data/groupCard.json");
      const fetchedGroupListData = response.data;
      const fetchedGroupList = fetchedGroupListData.data;

      console.log(fetchedGroupList);

      setPublicGroupList(fetchedGroupList);
      //   setListTotalPage(fetchedGroupListData.totalPages);
    };

    fetchPublicGroupList();
  }, []);

  return (
    <PrivateGroupListContainer>
      {publicGroupList.map((publicGroup) => (
        <PrivateGroupCardContainer key={publicGroup.id}>
          <GroupCardHeader>
            <h3 className="created-date">D+{publicGroup.createdAt}</h3>
            <span className="divider">|</span>
            <h3 className="privacy-bound">{publicGroup.isPublic}</h3>
          </GroupCardHeader>
          <GroupCardMainContent>
            <h3 className="name">{publicGroup.name}</h3>
          </GroupCardMainContent>
          <GroupCardFooter>
            <GroupCardFooterModule>
              <h5 className="title">추억</h5>
              <h5 className="stat">{publicGroup.postCount}</h5>
            </GroupCardFooterModule>
            <GroupCardFooterModule>
              <h5 className="title">그룹 공감</h5>
              <GroupLikeContainer>
                <StyledLikeIcon />
                <h5 className="stat">{publicGroup.likeCount}</h5>
              </GroupLikeContainer>
            </GroupCardFooterModule>
          </GroupCardFooter>
        </PrivateGroupCardContainer>
      ))}
    </PrivateGroupListContainer>
  );
};

export default PrivateGroupCard;
