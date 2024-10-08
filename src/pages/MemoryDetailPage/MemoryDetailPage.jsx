import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  MemoryDescription,
  MemoryDetailDivider,
  MemoryDetailImage,
  MemoryDetailMainContent,
  MemoryDetailPageContainer,
} from "./MemoryDetailPage.styled";

import Header from "@layout/Header/Header";
import MemoryDetailCard from "@components/MemoryDetailCard/MemoryDetailCard";
import MemoryCommentSection from "@components/MemoryCommentSection/MemoryCommentSection";

const MemoryDetailPage = () => {
  const { id } = useParams();
  const numericID = parseInt(id, 10);

  const [memoryDetail, setMemoryDetail] = useState([]);

  useEffect(() => {
    const fetchMemoryData = async () => {
      try {
        const response = await axios.get("/data/memory-detail.json");
        const fetchedMemoryInfos = response.data;

        console.log(fetchedMemoryInfos);

        const [filteredMemory] = fetchedMemoryInfos.filter(
          (memory) => memory.id === numericID
        );

        console.log(filteredMemory);
        setMemoryDetail(filteredMemory);
      } catch (error) {
        console.error("Error occured: ", error);
      }
    };

    fetchMemoryData();
  }, [numericID]);

  return (
    <>
      <Header />
      <MemoryDetailPageContainer>
        <MemoryDetailCard memoryDetail={memoryDetail} />
        <MemoryDetailDivider />
        <MemoryDetailMainContent>
          <MemoryDetailImage
            src={memoryDetail?.imageUrl}
            alt="memory-detail-image"
          />
          <MemoryDescription>{memoryDetail?.content}</MemoryDescription>
        </MemoryDetailMainContent>
        <MemoryCommentSection memoryDetail={memoryDetail} />
      </MemoryDetailPageContainer>
    </>
  );
};

export default MemoryDetailPage;
