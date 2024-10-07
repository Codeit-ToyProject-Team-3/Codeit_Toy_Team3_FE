/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import {
  LikeCommentModule,
  MemoryCardFooter,
  MemoryCardHeader,
  MemoryCardMainContent,
  MemoryLikeCommentContainer,
  MemoryLoactionDate,
  MemoryTagList,
  PublicMemoryCardContainer,
  PublicMemoryContentContainer,
  PublicMemoryImage,
  PublicMemoryListContainer,
  PublicMemoryListWrapper,
  StyledCommentIcon,
  StyledLikeIcon,
} from "./PublicMemoryCard.styled";

import Pagination from "@components/Pagination/Pagination";

const PublicMemoeryCard = ({ groupMemoryList, listTotalPage }) => {
  const navigate = useNavigate();

  const handleGroupClick = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <PublicMemoryListWrapper>
      <PublicMemoryListContainer>
        {groupMemoryList?.map((groupMemory) => (
          <PublicMemoryCardContainer
            key={groupMemory?.id}
            onClick={() => handleGroupClick(groupMemory?.id)}
          >
            <PublicMemoryImage
              src={groupMemory?.imageUrl}
              alt={groupMemory?.title}
            />
            <PublicMemoryContentContainer>
              <MemoryCardHeader>
                <h3 className="nickname">{groupMemory?.nickname}</h3>
                <span className="divider">|</span>
                <h3 className="privacy-bound">
                  {groupMemory?.isPublic ? "공개" : "비공개"}
                </h3>
              </MemoryCardHeader>
              <MemoryCardMainContent>
                <h3 className="title">{groupMemory?.title}</h3>
                <MemoryTagList>
                  {groupMemory?.tags?.map((tag, index) => (
                    <p className="tag" key={index}>
                      #{tag}
                    </p>
                  ))}
                </MemoryTagList>
              </MemoryCardMainContent>
              <MemoryCardFooter>
                <MemoryLoactionDate>
                  <h5 className="location">{groupMemory?.location}</h5>
                  <span>﹒</span>
                  <h5 className="moment">{groupMemory?.moment}</h5>
                </MemoryLoactionDate>
                <MemoryLikeCommentContainer>
                  <LikeCommentModule>
                    <StyledLikeIcon />
                    {groupMemory?.likeCount}
                  </LikeCommentModule>
                  <LikeCommentModule>
                    <StyledCommentIcon />
                    {groupMemory?.commentCount}
                  </LikeCommentModule>
                </MemoryLikeCommentContainer>
              </MemoryCardFooter>
            </PublicMemoryContentContainer>
          </PublicMemoryCardContainer>
        ))}
      </PublicMemoryListContainer>
      <Pagination groupList={groupMemoryList} totalPages={listTotalPage} />
    </PublicMemoryListWrapper>
  );
};

export default PublicMemoeryCard;
