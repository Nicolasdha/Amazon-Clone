const selector = (basket) => {
  return basket.length !== 0
    ? basket.reduce((initalAmt, item) => initalAmt + item.price, 0)
    : 0;
};

export default selector;
// WOULD BE NICE TO USE basket?.reduce()...... for optional chaning
// no need for .map since reduce maps first need need to use item.price
