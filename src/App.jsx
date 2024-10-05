import { Route, Routes } from "react-router-dom";

import GroupListPage from "@pages/GroupListPage/GroupListPage";
import CreateGroupPage from "@pages/CreateGroupPage/CreateGroupPage";
import PrivateGroupAccessPage from "@pages/PrivateGroupAccessPage/PrivateGroupAccessPage";
import GroupDetailPage from "@pages/GroupDetailPage/GroupDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GroupListPage />} />
      <Route path="/groups/:id" element={<GroupDetailPage />} />
      <Route path="/create-group" element={<CreateGroupPage />} />
      <Route
        path="/group/:id/verify-password"
        element={<PrivateGroupAccessPage />}
      />
    </Routes>
  );
}

export default App;
