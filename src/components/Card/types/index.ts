export type CardPropsType = {
  img: string;
  name: string;
  info: InfoType[];
  onClick: () => void;
};

export type InfoType = {
  title: string
  discription: string | any[]
}
