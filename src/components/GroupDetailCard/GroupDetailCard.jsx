import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  GroupDetailCardContainer,
  GroupDetailContent,
  GroupDetailHeader,
  GroupDetailImage,
  GroupDetailMain,
  GroupDetailStatContainer,
  GroupDetailStatModule,
  GroupManagement,
  GroupDetailTitle,
  GroupDetailIntro,
  BadgeSectionContainer,
  BadgeModule,
  BadegeList,
  LikeButton,
  BadgeLikeContainer,
  StyledLikeIcon,
} from "./GroupDetailCard.styled";

import { GroupCardHeader } from "@components/PublicGroupCard/PublicGroupCard.styled";

const GroupDetailCard = () => {
  const { id } = useParams();

  const numID = parseInt(id, 10);

  const [groupDetail, setGroupDetail] = useState([]);

  useEffect(() => {
    const fetchGroupDetail = async () => {
      try {
        const response = await axios.get("/data/group-detail.json");
        const fetchedGroupDetailInfos = response.data;

        const [filteredGroupDetail] = fetchedGroupDetailInfos.filter(
          (groupDetailInfo) => groupDetailInfo.id === numID
        );

        console.log(filteredGroupDetail);

        setGroupDetail(filteredGroupDetail);
      } catch (error) {
        console.error("Error occured: ", error);
      }
    };

    fetchGroupDetail();
  }, [numID]);

  return (
    <>
      <GroupDetailCardContainer>
        <GroupDetailImage src={groupDetail.imageUrl} alt={groupDetail.name} />
        <GroupDetailContent>
          <GroupDetailHeader>
            <GroupCardHeader>
              <h3 className="created-date">D+{groupDetail.createdAt}</h3>
              <span className="divider">|</span>
              <h3 className="privacy-bound">{groupDetail.isPublic}</h3>
            </GroupCardHeader>
            <GroupManagement>
              <button className="edit">그룹 정보 수정하기</button>
              <button className="delete">그룹 삭제하기</button>
            </GroupManagement>
          </GroupDetailHeader>
          <GroupDetailMain>
            <GroupDetailTitle>{groupDetail.name}</GroupDetailTitle>
            <GroupDetailStatContainer>
              <GroupDetailStatModule>
                <h3>추억</h3>
                <h3>{groupDetail.postCount}</h3>
              </GroupDetailStatModule>
              <span>|</span>
              <GroupDetailStatModule>
                <h3>그룹 공감</h3>
                <h3>{groupDetail.likeCount}</h3>
              </GroupDetailStatModule>
            </GroupDetailStatContainer>
          </GroupDetailMain>
          <GroupDetailIntro>{groupDetail.introduction}</GroupDetailIntro>
          <BadgeSectionContainer>
            <h3 className="title">획득 배지</h3>
            <BadgeLikeContainer>
              <BadegeList>
                <BadgeModule>👾 7일 연속 추억 등록</BadgeModule>
                <BadgeModule>🌼 그룹 공감 1만 개 이상 받기</BadgeModule>
                <BadgeModule>💖 게시글 공감 1만 개 이상 받기</BadgeModule>
              </BadegeList>
              <LikeButton>
                <StyledLikeIcon />
                공감 보내기
              </LikeButton>
            </BadgeLikeContainer>
          </BadgeSectionContainer>
        </GroupDetailContent>
      </GroupDetailCardContainer>
    </>
  );
};

export default GroupDetailCard;
