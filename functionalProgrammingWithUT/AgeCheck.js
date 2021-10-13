const checkAge = (age) => {
    const immutableState = Object.freeze({ minimum: 21 });
    return age >= immutableState;
  };

module.exports = { checkAge }