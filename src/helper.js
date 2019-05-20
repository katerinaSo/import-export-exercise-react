export const choice = items => {
  const i = Math.floor(Math.random() * items.length);
  return items[i];
};

export const remove = (items, item) => {
  return items.filter(food => food !== item);
};
