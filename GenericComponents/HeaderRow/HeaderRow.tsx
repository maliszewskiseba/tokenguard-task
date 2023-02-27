interface HeaderRowProps {
  children: React.ReactNode;
  classes?: string;
}

const HeaderRow = ({ ...props }: HeaderRowProps) => {
  const { children, classes, ...rest } = props;

  return (
    <div
      className={`${
        classes ? classes : ""
      } w-full flex text-white text-xl justify-center items-center p-4 my-2 font-press-start`}
    >
      {children}
    </div>
  );
};

export default HeaderRow;
