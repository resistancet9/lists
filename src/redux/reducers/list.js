module.exports = function(prevState = [], { type, payload }) {
  switch (type) {
    case "ADD_NEW_LIST":
      return [...prevState, payload];
    default:
      return prevState;
  }
};
