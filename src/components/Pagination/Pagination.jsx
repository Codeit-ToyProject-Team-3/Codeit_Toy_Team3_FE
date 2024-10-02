/* eslint-disable react/prop-types */
import { useState } from "react";

import {
  NextArrow,
  NextPreviousButton,
  PageButton,
  PageButtonContainer,
  PaginationContainer,
  PreviousArrow,
} from "./Pagination.styled";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  //   console.log(currentPage);

  const maxPageButtons = 5; // 페이지네이션 버튼 최대 개수

  const currentPageSection = Math.ceil(currentPage / maxPageButtons); // 현재 페이지가 속한 구간을 계산

  // 시작 페이지와 마지막 페이지 계산 logic
  const startPage = (currentPageSection - 1) * maxPageButtons + 1;
  const endPage = Math.min(currentPageSection * maxPageButtons, totalPages);

  const handleCurrentPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <PaginationContainer>
        <NextPreviousButton
          disabled={currentPage === 1}
          onClick={() => handleCurrentPage(currentPage - 1)}
        >
          <PreviousArrow />
        </NextPreviousButton>

        <PageButtonContainer>
          {/* 페이지 번호 동적 렌더링 */}
          {[...Array(endPage - startPage + 1)].map((_, index) => {
            const pageNumber = startPage + index;
            return (
              <PageButton
                key={pageNumber}
                onClick={() => handleCurrentPage(pageNumber)}
                $isActive={currentPage === pageNumber}
              >
                {pageNumber}
              </PageButton>
            );
          })}
        </PageButtonContainer>

        <NextPreviousButton
          disabled={currentPage === totalPages}
          onClick={() => handleCurrentPage(currentPage + 1)}
        >
          <NextArrow />
        </NextPreviousButton>
      </PaginationContainer>
    </>
  );
};

export default Pagination;
