import { Route, Routes } from "react-router-dom";

import PublicGroup from "@pages/PublicGroup/PublicGroup";
import CreateGroupPage from "@pages/CreateGroup/CreateGroupPage";
import PrivateGroupCard from "@components/PrivateGroupCard/PrivateGroupCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicGroup />} />
      <Route path="/temp" element={<PrivateGroupCard />} />
      <Route path="/create-group" element={<CreateGroupPage />} />
    </Routes>
  );
}

export default App;
