export const getPostImageSrc = (
  id: string | number,
  height: string | number,
  width: string | number
) => {
  return `https://picsum.photos/id/${id}/${width}/${height}`;
};
