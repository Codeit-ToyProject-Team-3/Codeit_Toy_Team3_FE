import { Route, Routes } from "react-router-dom";

import PublicGroup from "@pages/PublicGroup/PublicGroup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicGroup />} />
    </Routes>
  );
}

export default App;
