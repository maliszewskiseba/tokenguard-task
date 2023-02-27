interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={`${
        className ? className : ""
      } bg-slate-900 text-white rounded-2xl flex flex-col p-4 shadow-lg overflow-hidden w-fit m-4 hover:scale-[1.05] hover:shadow-2xl transition-all duration-300 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default Card;
