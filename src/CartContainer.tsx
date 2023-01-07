/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

export interface ICartContainer {}

const CartContainer: React.FC<ICartContainer> = (): React.ReactElement => {
  const { cart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item: any) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className="button-82-pushable"
          role="button"
          onClick={clearCart}
        >
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">clear cart</span>
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
