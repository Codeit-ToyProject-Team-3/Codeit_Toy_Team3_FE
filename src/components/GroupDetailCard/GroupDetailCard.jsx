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

import ModalCustom from "@components/ModalCustom/ModalCustom";
import ProfileEditModal from "@components/ProfileEditModal/ProfileEditModal";

const GroupDetailCard = () => {
  const { id } = useParams();

  const numID = parseInt(id, 10);

  const [groupDetail, setGroupDetail] = useState([]);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleEditModalOpen = () => {
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const handleDeleteModalOpen = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };

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
              <button className="edit" onClick={handleEditModalOpen}>
                그룹 정보 수정하기
              </button>
              <ProfileEditModal
                modalOpen={editModalOpen}
                handleModalClose={handleEditModalClose}
              />

              <button className="delete" onClick={handleDeleteModalOpen}>
                그룹 삭제하기
              </button>
              <ModalCustom
                modalOpen={deleteModalOpen}
                handleModalClose={handleDeleteModalClose}
                modalTitle="그룹 삭제"
                passworTitle="삭제 권한 인증"
                passwordPlaceholder="그룹 비밀번호를 입력해주세요"
                submitButtonText="삭제하기"
              />
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
