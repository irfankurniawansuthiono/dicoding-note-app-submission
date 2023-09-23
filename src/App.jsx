import Header from "./layouts/header";
import Main from "./layouts/main";
import { useState } from "react";
import { getInitialData } from "./utils";

function App() {
  const [datanya, setDatanya] = useState(getInitialData());
  return (
    <>
      <Header data={datanya} setData={setDatanya} />
      <Main data={datanya} setData={setDatanya} />
    </>
  );
}

export default App;
