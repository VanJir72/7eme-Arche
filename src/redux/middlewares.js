
export const cartMiddleware = (store) => (next) => (action) => {
  // Middleware dans lequel toutes les actions redux vont passer
  // Doit appeler next(action) pour appeler l'action suivante
  const nextState = next(action);
  if (action.type.startsWith('cart')) {
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart.items)); //ici on met les prodicts dans localStorage
  }
  return nextState
}