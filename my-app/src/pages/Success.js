import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const cart = location.state.products;
  //const total = location.state.total;
  console.log("location vedem");
  console.log(location.state);
  console.log("location vedem2");
  //console.log(typeof products);
  console.log(cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();
  const handleClick = async (e) => {
    navigate("/");
  };

  useEffect(() => {
    const createOrder = async () => {
      try {
        //console.log(location);
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });

        console.log(data);
        console.log(currentUser);
        setOrderId(res.data._id);
      } catch (err) {
        console.log(err);

        console.log(data);
        console.log(currentUser);
      }
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}

      <button onClick={handleClick} style={{ padding: 10, marginTop: 20 }}>
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
