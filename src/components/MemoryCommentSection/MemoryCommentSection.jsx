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

import CommentEditRegisterModal from "@components/CommentModal/CommentEditRegisterModal";
import Pagination from "@components/Pagination/Pagination";
import ModalCustom from "@components/ModalCustom/ModalCustom";

const MemoryCommentSection = ({ memoryDetail }) => {
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const [selectedComment, setSelectedComment] = useState(null);

  function handleRegisterModalOpen() {
    setRegisterModalOpen(true);
  }

  const handleRegisterModalClose = () => {
    setRegisterModalOpen(false);
  };

  const handleEditModalOpen = (comment) => {
    setSelectedComment(comment);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setSelectedComment(null);
    setEditModalOpen(false);
  };

  const handleDeleteModalOpen = (comment) => {
    setSelectedComment(comment);
    setDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setSelectedComment(null);
    setDeleteModalOpen(false);
  };

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
      <RegisterCommentButton onClick={handleRegisterModalOpen}>
        댓글 등록하기
      </RegisterCommentButton>
      <CommentEditRegisterModal
        modalOpen={isRegisterModalOpen}
        handleModalClose={handleRegisterModalClose}
        modalTitle="댓글 등록"
        passworTitle="비밀번호 생성"
        passwordPlaceholder="댓글 비밀번호를 생성해주세요"
        submitButtonText="등록하기"
      />

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
                  <StyledPencilIcon
                    onClick={() => handleEditModalOpen(comment)}
                  />
                  <StyledTrashIcon
                    onClick={() => handleDeleteModalOpen(comment)}
                  />
                </EditDeleteIcon>
              </CommentModuleMain>
              <CommentModuleDivider />
            </CommentModule>
          ))}
        </CommentList>

        {/* 댓글 수정 Modal */}
        <CommentEditRegisterModal
          modalOpen={isEditModalOpen}
          handleModalClose={handleEditModalClose}
          modalTitle="댓글 수정"
          passworTitle="수정 권한 인증"
          passwordPlaceholder="댓글 비밀번호를 입력해주세요"
          submitButtonText="수정하기"
          selectedComment={selectedComment}
        />

        {/* 댓글 삭제 Modal */}
        <ModalCustom
          modalOpen={isDeleteModalOpen}
          handleModalClose={handleDeleteModalClose}
          modalTitle="댓글 삭제"
          passworTitle="삭제 권한 인증"
          passwordPlaceholder="댓글 비밀번호를 입력해주세요"
          submitButtonText="삭제하기"
        />
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
