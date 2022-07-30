export const getENV = () => {
  console.log(import.meta.env);
  import.meta.env;

  return {
    ...import.meta.env,
  };
};
