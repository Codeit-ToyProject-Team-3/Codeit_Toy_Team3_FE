/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LikeCommentModule,
  MemoryCardFooter,
  MemoryCardHeader,
  MemoryCardMainContent,
  MemoryLikeCommentContainer,
  PrivateMemoryCardContainer,
  PrivateMemoryContentContainer,
  PrivateMemoryListContainer,
  PrivateMemoryListWrapper,
  StyledCommentIcon,
  StyledLikeIcon,
} from "./PrivateMemoryCard.styled";

import Pagination from "@components/Pagination/Pagination";

const PrivateMemoryCard = ({ groupMemoryList }) => {
  const navigate = useNavigate();

  const handleGroupClick = (id) => {
    navigate(`/posts/${id}/verify-password`);
  };

  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = groupMemoryList?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <>
      <PrivateMemoryListWrapper>
        <PrivateMemoryListContainer>
          {currentItems?.map((groupMemory) => (
            <PrivateMemoryCardContainer
              key={groupMemory?.id}
              onClick={() => handleGroupClick(groupMemory?.id)}
            >
              <PrivateMemoryContentContainer>
                <MemoryCardHeader>
                  <h3 className="nickname">{groupMemory?.nickname}</h3>
                  <span className="divider">|</span>
                  <h3 className="privacy-bound">
                    {groupMemory?.isPublic === "공개" ? "공개" : "비공개"}
                  </h3>
                </MemoryCardHeader>
                <MemoryCardMainContent>
                  <h3 className="title">{groupMemory?.title}</h3>
                </MemoryCardMainContent>
                <MemoryCardFooter>
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
              </PrivateMemoryContentContainer>
            </PrivateMemoryCardContainer>
          ))}
        </PrivateMemoryListContainer>
        <Pagination
          groupList={groupMemoryList}
          totalPages={Math.floor(groupMemoryList?.length / itemsPerPage) + 1}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </PrivateMemoryListWrapper>
    </>
  );
};

export default PrivateMemoryCard;
