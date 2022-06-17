import React from "react";
import Create from "./Create.jsx";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        <Create />
      </dl>
    </div>
  );
}

export default App;
