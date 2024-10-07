/* eslint-disable react/prop-types */
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

const MemoryDetailCard = ({ memoryDetail }) => {
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
            <MemoryManageButton className="edit">
              추억 수정하기
            </MemoryManageButton>
            <MemoryManageButton className="delete">
              추억 삭제하기
            </MemoryManageButton>
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
