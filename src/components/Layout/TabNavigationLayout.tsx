import TabNavigation from "../TabNavigation";

interface Props {
  children: React.ReactElement;
}

const TabNavigationLayout = ({ children }: Props) => {
  return (
    <>
      <TabNavigation />
      {children}
    </>
  );
};

export default TabNavigationLayout;
