import React from "react";

interface Props {
  title: string;
  onClick: () => void;
}

const MenuCard: React.FC<Props> = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center shadow-md cursor-pointer transition transform hover:scale-105 hover:shadow-lg"
    >
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Select
      </button>
    </div>
  );
};

export default MenuCard;
