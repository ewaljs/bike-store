// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseBikeData = (data: any) => {
  return {
    description: data.description,
    rating: parseFloat(data.rating),
    price: parseFloat(data.price),
    quantity: parseInt(data.quantity),
    type: data.type,
    photoUrl: data.photoUrl,
  };
};

export const isValidUrl = (url: string): boolean => {
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
      "(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-zA-Z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-zA-Z\\d_]*)?$", // fragment locator
    "i"
  );
  return !!urlPattern.test(url);
};
