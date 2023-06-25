import "./transactionList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "../../redux/apiCalls";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js"

export default function TransactionList() {
    const [orders, setOrder] = useState([]);
    //const dispatch = useDispatch();
    useEffect(() => {
        const getOrder = async () => {
            try {
                const res = await userRequest.get("orders/");
                setOrder(res.data);
            } catch { }
        };
        getOrder();
    }, []);

    const handleDelete = async (userId) => {
        // try {
        //     await userRequest.delete(`order/${userId}`);
        //     setOrder((prevUsers) =>
        //         prevUsers.filter((order) => order._id !== userId)
        //     );
        // } catch (error) {
        //     console.error(error);
        // }
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 220 },
        {
            field: "amount",
            headerName: "Amount in Ron",
            width: 200,

        },
        { field: "createdAt", headerName: "Created", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/order/" + params.row._id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="userListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={orders}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}