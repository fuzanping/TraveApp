export {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
    }
  }
}