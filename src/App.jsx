import { Route, Routes } from "react-router-dom";

import GroupListPage from "@pages/GroupListPage/GroupListPage";
import CreateGroupPage from "@pages/CreateGroupPage/CreateGroupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GroupListPage />} />
      <Route path="/create-group" element={<CreateGroupPage />} />
    </Routes>
  );
}

export default App;
