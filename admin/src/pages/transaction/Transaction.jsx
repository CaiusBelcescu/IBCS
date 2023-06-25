import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import "./transaction.css";
import { useState, useEffect, } from "react";
import { userRequest } from "../../requestMethods";
import { useSelector } from "react-redux";

export default function Transaction() {
    const [orders, setOrders] = useState([]);
    const location = useLocation();
    const orderId = location.pathname.split("/")[2];
    console.log(orders);
    useEffect(() => {
        const getOrder = async () => {
            try {
                const res = await userRequest.get(`orders/finds/${orderId}`);
                setOrders(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        getOrder();
    }, [orderId]);
    const updateUser = async () => {
        try {
            // Make the API request to update the user
            await userRequest.put(`orders/${orderId}`, { /* Updated user data */ });
            // Fetch the updated user data
            const res = await userRequest.get(`orders/finds/${orderId}`);
            setOrders(res.data);
        } catch (error) {
            console.error(error);
        }
    };
    console.log("aici");
    console.log(orders.products);
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src={
                                orders.img ||
                                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                            }
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{orders.userId}</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">{orders.username}</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">{orders.phone ? orders.phone : "Doesn't have one yet"}</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">{orders.email}</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">{orders.country ? orders.country : "Doesn't have one yet"}</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">

                            {orders?.products?.map((product, index) => (
                                <div className="userUpdateItem" key={index}>
                                    <label>Product  Name  {product.productId}</label>
                                    <label>Product  Quantity {product.quantity}</label>
                                </div>
                            ))}
                        </div>
                        <div className="userUpdateRight">
                            {/* Other form elements */}
                            <button onClick={updateUser} className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}