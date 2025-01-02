export type Shape = {
  id: string;
  color: string;
  size: string;
  rotation: string;
  position: {
    top: string;
    left: string;
  };
};

export type Decorations = {
  shapes: Shape[];
};
