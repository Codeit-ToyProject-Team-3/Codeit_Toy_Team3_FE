import { Route, Routes } from "react-router-dom";

import PublicGroup from "@pages/PublicGroup/PublicGroup";
import CreateGroupPage from "@pages/CreateGroup/CreateGroupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicGroup />} />
      <Route path="/create-group" element={<CreateGroupPage />} />
    </Routes>
  );
}

export default App;
