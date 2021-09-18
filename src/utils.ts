export const apiDispatch = (actionType: string = '', data: any = null) => {
  return {
    type: actionType,
    payload: data,
  };
};
