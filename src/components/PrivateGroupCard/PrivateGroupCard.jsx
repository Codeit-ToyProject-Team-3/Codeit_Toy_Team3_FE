/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  PrivateGroupCardContainer,
  PrivateGroupListContainer,
  PrivateGroupListWrapper,
} from "./PrivateGroupCard.styled";

import {
  GroupCardFooter,
  GroupCardFooterModule,
  GroupCardHeader,
  GroupCardMainContent,
  GroupLikeContainer,
  StyledLikeIcon,
} from "@components/PublicGroupCard/PublicGroupCard.styled";

import Pagination from "@components/Pagination/Pagination";

const PrivateGroupCard = ({ privateGroupList }) => {
  const navigate = useNavigate();

  const handleGroupClick = (id) => {
    navigate(`/groups/${id}/verify-password`);
  };

  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = privateGroupList?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <PrivateGroupListWrapper>
      <PrivateGroupListContainer>
        {currentItems?.map((privateGroup) => (
          <PrivateGroupCardContainer
            key={privateGroup?.id}
            onClick={() => handleGroupClick(privateGroup?.id)}
          >
            <GroupCardHeader>
              <h3 className="created-date">D+{privateGroup?.createdAt}</h3>
              <span className="divider">|</span>
              <h3 className="privacy-bound">{privateGroup?.isPublic}</h3>
            </GroupCardHeader>
            <GroupCardMainContent>
              <h3 className="name">{privateGroup?.name}</h3>
            </GroupCardMainContent>
            <GroupCardFooter>
              <GroupCardFooterModule>
                <h5 className="title">추억</h5>
                <h5 className="stat">{privateGroup?.postCount}</h5>
              </GroupCardFooterModule>
              <GroupCardFooterModule>
                <h5 className="title">그룹 공감</h5>
                <GroupLikeContainer>
                  <StyledLikeIcon />
                  <h5 className="stat">{privateGroup?.likeCount}</h5>
                </GroupLikeContainer>
              </GroupCardFooterModule>
            </GroupCardFooter>
          </PrivateGroupCardContainer>
        ))}
      </PrivateGroupListContainer>
      <Pagination
        groupList={privateGroupList}
        totalPages={Math.floor(privateGroupList?.length / itemsPerPage) + 1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </PrivateGroupListWrapper>
  );
};

export default PrivateGroupCard;
