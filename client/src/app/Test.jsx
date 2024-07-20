"use client";
import React, { useEffect, useState } from "react";

const Hello = () => {
  const [testResult, setTestResult] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/jobs")
      .then((res) => res.json())
      .then((data) => {
        setTestResult(data);
        console.log(data);
      });
  }, []);

  return <div></div>;
};

export default Hello;
