import { MemoryDetailPageContainer } from "./MemoryDetailPage.styled";

import Header from "@layout/Header/Header";
import MemoryDetailCard from "@components/MemoryDetailCard/MemoryDetailCard";

const MemoryDetailPage = () => {
  return (
    <>
      <Header />
      <MemoryDetailPageContainer>
        <MemoryDetailCard />
      </MemoryDetailPageContainer>
    </>
  );
};

export default MemoryDetailPage;
