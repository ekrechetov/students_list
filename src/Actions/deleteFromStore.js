const deleteFromStore = (type, id) => {
  return {
    type: type,
    payload: id
  }
}
export default deleteFromStore;