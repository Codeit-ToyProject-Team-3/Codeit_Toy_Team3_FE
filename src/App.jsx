import { Route, Routes } from "react-router-dom";

import GroupListPage from "@pages/GroupListPage/GroupListPage";
import CreateGroupPage from "@pages/CreateGroupPage/CreateGroupPage";
import CreateMemoryPage from "@pages/CreateMemoryPage/CreateMemoryPage";
import PrivateAccessPage from "@pages/PrivateAccessPage/PrivateAccessPage";
import GroupDetailPage from "@pages/GroupDetailPage/GroupDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GroupListPage />} />
      <Route path="/groups/:id" element={<GroupDetailPage />} />
      <Route path="/create-group" element={<CreateGroupPage />} />
      <Route path="/create-memory" element={<CreateMemoryPage />} />
      <Route
        path="/groups/:id/verify-password"
        element={
          <PrivateAccessPage
            title="비공개 그룹"
            description="비공개 그룹에 접근하기 위해 권한 확인이 필요합니다."
          />
        }
      />
      <Route
        path="/posts/:id/verify-password"
        element={
          <PrivateAccessPage
            title="비공개 추억"
            description="비공개 추억에 접근하기 위해 권한 확인이 필요합니다."
          />
        }
      />
    </Routes>
  );
}

export default App;
