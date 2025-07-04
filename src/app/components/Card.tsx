import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-[#222a44] rounded-2xl border border-gray-600 shadow-xl p-8 hover:scale-[1.02] transition-transform duration-300 h-full">
      {children}
    </div>
  );
};

export default Card;
