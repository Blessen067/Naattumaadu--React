import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../actions/type";
import { minValueOne } from "../../utils";

const init = {
  cart: [],
};

export const cartReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productId = action.product.id;
      const price = action.price;
      console.log("red", price);
      const productQty = action.qty ? action.qty : 1;

      // Check if the product is already in the cart
      const existingProductIndex = state.cart.findIndex(
        (product) => product.id === productId
      );

      if (existingProductIndex !== -1) {
        const cart = state.cart.map((product, index) => {
          if (index === existingProductIndex) {
            // If the product is found, update the quantity without summing
            return {
              ...product,
              selected_color: action.color,
              selected_size: action.size,
              qty: action.qty ? action.qty : product.qty + productQty,
              price: price
            };
          } else {
            return product;
          }
        });

        return { ...state, cart };
      } else {
        // If the product is not in the cart, add it with the specified quantity
        const newProduct = {
          ...action.product,
          selected_color: action.color,
          selected_size: action.size,
          qty: action.qty ? action.qty : productQty,
          price: price
        };

        return { ...state, cart: [...state.cart, newProduct] };
      }
      // return {
      //   ...state,
      //   cart: [
      //     ...state.cart,
      //     {
      //       ...action.product,
      //       selected_color: action.color,
      //       selected_size: action.size,
      //       qty: action.qty,
      //       sum:
      //         ((action.product.price * action.product.discount) / 100) *
      //         action.qty,
      //     },
      //   ],
      // };

    case CLEAR_CART:
      return {
        cart: [],
      };

    case REMOVE_FROM_CART:
      return {
        cart: state.cart.filter((item) => item.id !== action.product_id),
      };

    case INCREMENT_QUANTITY:
      const inc_productId = action.product_id;

      const new_cart = state.cart.reduce((cartAcc, product) => {
        if (product.id === inc_productId) {
          cartAcc.push({
            ...product,
            qty: product.qty + 1,
          });
        } else {
          cartAcc.push(product);
        }
        return cartAcc;
      }, []);
      return { ...state, cart: new_cart };

    case DECREMENT_QUANTITY:
      const decProductId = action.product_id;
      const decCart = state.cart.reduce((cartAcc, product) => {
        if (product.id === decProductId) {
          cartAcc.push({
            ...product,
            qty: minValueOne(product.qty - 1),
          });
        } else {
          cartAcc.push(product);
        }
        return cartAcc;
      }, []);

      return { ...state, cart: decCart };

    default:
      return state;
  }
};

export default cartReducer;
