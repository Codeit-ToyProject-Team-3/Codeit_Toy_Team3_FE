/* eslint-disable react/prop-types */
import { useState } from "react";

import {
  LikeCommentModule,
  MemoryLikeCommentContainer,
  MemoryLoactionDate,
  StyledCommentIcon,
  StyledLikeIcon,
} from "@components/PrivateMemoryCard/PrivateMemoryCard.styled";

import { LikeButton } from "@components/GroupDetailCard/GroupDetailCard.styled";

import {
  MemoryCardContainer,
  MemoryCardHeader,
  MemoryCardMainContent,
  MemoryDetailCardFooter,
  MemoryDetailFooterInfos,
  MemoryEditDeleteContainer,
  MemoryHashtagContainer,
  MemoryManageButton,
  WriterPrivacyContainer,
} from "./MemoryDetailCard.styled";

import ModalCustom from "@components/ModalCustom/ModalCustom";
import MemoryEditModal from "@components/MemoryEditModal/MemoryEditModal";

const MemoryDetailCard = ({ memoryDetail }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleDeleteModalOpen = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <MemoryCardContainer>
        <MemoryCardHeader>
          <WriterPrivacyContainer>
            <p className="nickname">{memoryDetail.nickname}</p>
            <span className="divider">|</span>
            <p className="privacy">{memoryDetail.isPublic}</p>
          </WriterPrivacyContainer>
          <MemoryEditDeleteContainer>
            <MemoryManageButton className="edit" onClick={handleEditModalOpen}>
              추억 수정하기
            </MemoryManageButton>
            <MemoryEditModal
              modalOpen={isEditModalOpen}
              handleModalClose={handleEditModalClose}
            />

            <MemoryManageButton
              className="delete"
              onClick={handleDeleteModalOpen}
            >
              추억 삭제하기
            </MemoryManageButton>
            {/* Delete Memory Modal Component */}
            <ModalCustom
              modalOpen={isDeleteModalOpen}
              handleModalClose={handleDeleteModalClose}
              modalTitle="추억 삭제"
              passworTitle="삭제 권한 인증"
              passwordPlaceholder="추억 비밀번호를 입력해주세요"
              submitButtonText="삭제하기"
            />
          </MemoryEditDeleteContainer>
        </MemoryCardHeader>
        <MemoryCardMainContent>
          <h2 className="title">{memoryDetail.title}</h2>
          <MemoryHashtagContainer>
            {memoryDetail?.tags?.map((tag, index) => (
              <p key={index}>#{tag}</p>
            ))}
          </MemoryHashtagContainer>
        </MemoryCardMainContent>
        <MemoryDetailCardFooter>
          <MemoryDetailFooterInfos>
            <MemoryLoactionDate>
              <h5 className="location-moment">{memoryDetail?.location}</h5>
              <span>﹒</span>
              <h5 className="location-moment">{memoryDetail?.moment}</h5>
            </MemoryLoactionDate>
            <MemoryLikeCommentContainer className="like-comment">
              <LikeCommentModule>
                <StyledLikeIcon />
                {memoryDetail?.likeCount}
              </LikeCommentModule>
              <LikeCommentModule>
                <StyledCommentIcon />
                {memoryDetail?.commentCount}
              </LikeCommentModule>
            </MemoryLikeCommentContainer>
          </MemoryDetailFooterInfos>
          <LikeButton>
            <StyledLikeIcon />
            공감 보내기
          </LikeButton>
        </MemoryDetailCardFooter>
      </MemoryCardContainer>
    </>
  );
};

export default MemoryDetailCard;
