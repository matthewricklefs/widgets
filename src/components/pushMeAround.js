import React, { useState } from "react";
import "../styles.css";

function Push() {
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }]
  });

  function toggleActive(index) {
    changeState({ ...appState, activeObject: appState.objects[index] });
  }

  function toggleActiveStyles(index) {
    if (appState.objects[index] === appState.activeObject) {
      return " box active ";
    } else {
      return " box inactive ";
    }
  }

  return (
    <div>
      {appState.objects.map((elements, index) => (
        <div
          key={index}
          className={toggleActiveStyles(index)}
          onClick={() => {
            toggleActive(index);
          }}
        ></div>
      ))}
    </div>
  );
}

export default Push;
