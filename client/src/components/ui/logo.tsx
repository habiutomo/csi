import React from "react";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className="flex items-center">
      <div className="h-10 w-10 bg-primary rounded-md flex items-center justify-center mr-2">
        <span className="text-white font-bold text-xl">CSI</span>
      </div>
      <span className={`font-bold text-xl ${className || "text-neutral-800"}`}>
        PT Cloud System Indonesia
      </span>
    </div>
  );
};

export default Logo;
