declare type MenuRoute = {
  path: string;
  icon?: JSX.Element;
  title: string;
  children: Array<MenuRoute>;
};
