export const tryCatch = async (tryer) => {
  try {
    const res = await tryer();
    return [res, null];
  } catch (error) {
    return [null, error];
  }
};
