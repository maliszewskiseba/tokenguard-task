interface ContainerInterfaceProps {
  children: React.ReactNode;
  classes?: string;
  row?: boolean;
  column?: boolean;
}

const Container = ({
  children,
  classes,
  row,
  column,
  ...rest
}: ContainerInterfaceProps) => {
  return (
    <div
      className={`${classes ? classes : ""} w-full flex  ${
        row ? "flex-row" : column ? "flex-col" : "flex-row"
      }  container`}
    >
      {children}
    </div>
  );
};

export default Container;
