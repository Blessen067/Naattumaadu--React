import React from "react";
import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";

const orders = [
  { id: 1, productName: "Product A", status: "Shipped" },
  { id: 2, productName: "Product B", status: "Pending" },
  { id: 3, productName: "Product C", status: "Delivered" },
];

const OrderList = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container" style={{marginBottom:"200px", marginTop:"100px"}}>
        <h2>My Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <th scope="row">{order.id}</th>
                <td>{order.productName}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
      {/* <Scrollbar /> */}
    </Fragment>
  );
};

export default OrderList;
