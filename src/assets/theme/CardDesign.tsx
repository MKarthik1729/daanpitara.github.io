interface CardProps {
  className?: string;
  children?: React.ReactNode;
  width?: string; // <-- added
}

const Card: React.FC<CardProps> = ({ children, className, width }) => {
  return (
    <div
      style={{ width }} // <-- apply inline width
      className={`
        flex
        p-[21px_21px]
        flex-col
        gap-[10px]
        shrink-0
        rounded-[12px]
        bg-[#fff]
        shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)]
        ${className || ""}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
