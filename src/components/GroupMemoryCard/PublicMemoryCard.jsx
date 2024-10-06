/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import {
  GroupCardFooter,
  GroupCardHeader,
  GroupCardMainContent,
  LikeCommentModule,
  MemoryLikeCommentContainer,
  MemoryLoactionDate,
  MemoryTagList,
  PublicGroupCardContainer,
  PublicGroupContentContainer,
  PublicGroupImage,
  PublicGroupListContainer,
  PublicGroupListWrapper,
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
    <PublicGroupListWrapper>
      <PublicGroupListContainer>
        {groupMemoryList?.map((groupMemory) => (
          <PublicGroupCardContainer
            key={groupMemory?.id}
            onClick={() => handleGroupClick(groupMemory?.id)}
          >
            <PublicGroupImage
              src={groupMemory?.imageUrl}
              alt={groupMemory?.title}
            />
            <PublicGroupContentContainer>
              <GroupCardHeader>
                <h3 className="nickname">{groupMemory?.nickname}</h3>
                <span className="divider">|</span>
                <h3 className="privacy-bound">
                  {groupMemory?.isPublic ? "공개" : "비공개"}
                </h3>
              </GroupCardHeader>
              <GroupCardMainContent>
                <h3 className="title">{groupMemory?.title}</h3>
                <MemoryTagList>
                  {groupMemory?.tags?.map((tag, index) => (
                    <p className="tag" key={index}>
                      #{tag}
                    </p>
                  ))}
                </MemoryTagList>
              </GroupCardMainContent>
              <GroupCardFooter>
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
              </GroupCardFooter>
            </PublicGroupContentContainer>
          </PublicGroupCardContainer>
        ))}
      </PublicGroupListContainer>
      <Pagination groupList={groupMemoryList} totalPages={listTotalPage} />
    </PublicGroupListWrapper>
  );
};

export default PublicMemoeryCard;
