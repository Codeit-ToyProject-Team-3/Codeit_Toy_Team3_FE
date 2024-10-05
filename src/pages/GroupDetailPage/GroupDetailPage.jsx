import Header from "@layout/Header/Header";

import GroupDetailCard from "@components/GroupDetailCard/GroupDetailCard";
import { GroupDetailPageContainer } from "./GroupDetailPage.styled";

const GroupDetailPage = () => {
  return (
    <>
      <Header />
      <GroupDetailPageContainer>
        <GroupDetailCard />
      </GroupDetailPageContainer>
    </>
  );
};

export default GroupDetailPage;
