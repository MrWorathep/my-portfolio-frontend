import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-light-background-card dark:bg-dark-background-card border-gray-300 dark:border-gray-600 rounded-2xl border shadow-xl p-8 hover:scale-[1.02] transition-transform duration-300 h-full">
      {children}
    </div>
  );
};

export default Card;
