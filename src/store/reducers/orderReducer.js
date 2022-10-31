/* eslint-disable no-case-declarations */
import { SET_ALL_ORDER_DATA, SET_ORDER_DATA } from '../constant';

const initialState = {
  orders: [],
  orderStatus: 'PENDING',
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_DATA:
      const newOrder = {
        id: action.order_id,
        restaurant_id: action.restaurant_id,
        customer_id: action.customer_id,
        partner_id: action.partner_id,
        total_amount: action.total_amount,
        delivery_date: action.delivery_date,
        status: 'PENDING',
      };
      const allOrders = [...state.orders];
      let { orderStatus } = state;

      if (newOrder.id !== null) {
        allOrders.push(newOrder);
        orderStatus = 'SUCCESS';
      } else {
        orderStatus = 'FALILED';
      }
      return {
        ...state,
        orders: allOrders,
        orderStatus,
      };
    case SET_ALL_ORDER_DATA: {
      action.orders.reverse();
      return {
        ...state,
        orders: action.orders,
      };
    }
    default:
      return state;
  }
};
