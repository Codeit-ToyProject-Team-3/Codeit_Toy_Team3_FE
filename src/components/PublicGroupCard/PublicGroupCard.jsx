/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  GroupCardFooter,
  GroupCardFooterModule,
  GroupCardHeader,
  GroupCardMainContent,
  GroupLikeContainer,
  PublicGroupCardContainer,
  PublicGroupContentContainer,
  PublicGroupImage,
  PublicGroupListContainer,
  PublicGroupListWrapper,
  StyledLikeIcon,
} from "./PublicGroupCard.styled";

import Header from "@layout/Header/Header";
import Pagination from "@components/Pagination/Pagination";

const PublicGroupCard = ({ publicGroupList }) => {
  const navigate = useNavigate();

  const handleGroupClick = (id) => {
    navigate(`groups/${id}`);
  };

  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = publicGroupList?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <>
      <Header />
      <PublicGroupListWrapper>
        <PublicGroupListContainer>
          {currentItems?.map((publicGroup) => (
            <PublicGroupCardContainer
              key={publicGroup?.id}
              onClick={() => handleGroupClick(publicGroup?.id)}
            >
              <PublicGroupImage
                src={publicGroup?.imageUrl}
                alt={publicGroup?.name}
              />
              <PublicGroupContentContainer>
                <GroupCardHeader>
                  <h3 className="created-date">D+{publicGroup.createdAt}</h3>
                  <span className="divider">|</span>
                  <h3 className="privacy-bound">{publicGroup?.isPublic}</h3>
                </GroupCardHeader>
                <GroupCardMainContent>
                  <h3 className="name">{publicGroup?.name}</h3>
                  <p className="introduction">{publicGroup?.introduction}</p>
                </GroupCardMainContent>
                <GroupCardFooter>
                  <GroupCardFooterModule>
                    <h5 className="title">획득 배지</h5>
                    <h5 className="stat">{publicGroup?.badgeCount}</h5>
                  </GroupCardFooterModule>
                  <GroupCardFooterModule>
                    <h5 className="title">추억</h5>
                    <h5 className="stat">{publicGroup?.postCount}</h5>
                  </GroupCardFooterModule>
                  <GroupCardFooterModule>
                    <h5 className="title">그룹 공감</h5>
                    <GroupLikeContainer>
                      <StyledLikeIcon />
                      <h5 className="stat">{publicGroup?.likeCount}</h5>
                    </GroupLikeContainer>
                  </GroupCardFooterModule>
                </GroupCardFooter>
              </PublicGroupContentContainer>
            </PublicGroupCardContainer>
          ))}
        </PublicGroupListContainer>
        <Pagination
          groupList={publicGroupList}
          totalPages={Math.floor(publicGroupList?.length / itemsPerPage) + 1}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </PublicGroupListWrapper>
    </>
  );
};

export default PublicGroupCard;
