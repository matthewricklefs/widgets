import React, { useState, useEffect } from "react";

export default function Clock(props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => tick(), 1000);

    return () => clearInterval(interval);
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}
