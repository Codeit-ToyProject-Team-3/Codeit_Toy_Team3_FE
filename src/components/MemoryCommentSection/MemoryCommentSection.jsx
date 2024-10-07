/* eslint-disable react/prop-types */
import { useState } from "react";

import {
  CommentContainer,
  CommentDivider,
  CommentList,
  CommentModule,
  CommentModuleDivider,
  CommentModuleHeader,
  CommentModuleMain,
  EditDeleteIcon,
  MemoryCommentSectionContainer,
  RegisterCommentButton,
  StyledPencilIcon,
  StyledTrashIcon,
} from "./MemoryCommentSection.styled";

import Pagination from "@components/Pagination/Pagination";

const MemoryCommentSection = ({ memoryDetail }) => {
  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = memoryDetail?.comments?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <MemoryCommentSectionContainer>
      <RegisterCommentButton>댓글 등록하기</RegisterCommentButton>
      <CommentContainer>
        <h4>댓글 {memoryDetail?.comments?.length}</h4>
        <CommentDivider />
        <CommentList>
          {currentItems?.map((comment) => (
            <CommentModule key={comment.id}>
              <CommentModuleHeader>
                <h4>{comment.nickname}</h4>
                <h4 className="timestamp">{comment.timestamp}</h4>
              </CommentModuleHeader>
              <CommentModuleMain>
                <p>{comment.content}</p>
                <EditDeleteIcon>
                  <StyledPencilIcon />
                  <StyledTrashIcon />
                </EditDeleteIcon>
              </CommentModuleMain>
              <CommentModuleDivider />
            </CommentModule>
          ))}
        </CommentList>
      </CommentContainer>
      <Pagination
        groupList={memoryDetail}
        totalPages={Math.floor(memoryDetail?.comments?.length / 3) + 1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </MemoryCommentSectionContainer>
  );
};

export default MemoryCommentSection;
