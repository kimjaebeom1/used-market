export const getDate = (value) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};

export const getTime = (value) => {
  const date = new Date(value);
  const hh = String(date.getHours());
  return `${hh}`;
};

export const thisTime = () => {
  const date = new Date();
  const hh = String(date.getHours());
  return `${hh}`;
};
