import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-10 bg-light-background dark:bg-dark-background">
      <div className="w-16 h-16 border-4 border-blue-300 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
};

export default Loading;
