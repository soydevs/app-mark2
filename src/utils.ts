export const apiDispatch = (actionType: string = '', data: any = null) => {
  return {
    type: actionType,
    payload: data,
  };
};

export const toTitleCase = (str: String) => {
  return str[0].toUpperCase() + str.slice(1);
}