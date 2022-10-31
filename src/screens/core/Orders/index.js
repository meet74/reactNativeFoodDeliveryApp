import { ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../../../store/actions/orderActions';
import TopMenu from '../../../components/TopMenu';
import OrderCard from '../../../components/OrderCard';

function OrderScreen() {
  const authData = useSelector((state) => state.auth);
  const orderData = useSelector((state) => state.order);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders(authData.token));
  }, []);

  return (
    <ScrollView className="flex-1 bg-white ">
      <TopMenu title="Your Orders" />
      {orderData.orders.map((order) => {
        console.log(order.createdAt);
        return (
          <OrderCard
            key={order.id}
            restaurantId={order.restaurant_id}
            orderDetails={order.OrderDetails}
            totalPrice={order.total_amount}
            createdAt={order.createdAt}
            orderStatus={order.status}
          />
        );
      })}
    </ScrollView>
  );
}

export default OrderScreen;
