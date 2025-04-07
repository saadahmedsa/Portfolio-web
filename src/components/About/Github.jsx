import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col items-center pb-10">
      <h1 className="text-4xl font-bold text-center mb-5">
        Days I <span className="text-purple-500">Code</span>
      </h1>
      <GitHubCalendar
        username="SaadAhmedSA"
        blockSize={10}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
  );
}

export default Github;
