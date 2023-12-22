import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import FontAwesome from "../../components/UiStyle/FontAwesome";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Link from "next/link";
import { totalPrice } from "../../utils";
import axios from "axios";
import CheckWrap from "../CheckWrap";
import RazorpayScript from "./Razorpay";
import { useRouter } from "next/router";

const cardType = [
  {
    title: "visa",
    img: "/images/icon/visa.png",
  },
  {
    title: "mastercard",
    img: "/images/icon/mastercard.png",
  },
  {
    title: "skrill",
    img: "/images/icon/skrill.png",
  },
  {
    title: "paypal",
    img: "/images/icon/paypal.png",
  },
];

const CheckoutSection = ({ cartList }) => {
  const router = useRouter();

  // states
  const [tabs, setExpanded] = React.useState({
    cupon: false,
    billing_adress: false,
    payment: true,
  });
  const [forms, setForms] = React.useState({
    cupon_key: "",
    first_name: "",
    last_name: "",
    country: "",
    dristrict: "",
    address: "",
    post_code: "",
    email: "",
    phone: "",
    note: "",

    payment_method: "cash",
    card_type: "",

    fname2: "",
    lname2: "",
    country2: "",
    dristrict2: "",
    address2: "",
    post_code2: "",
    email2: "",
    phone2: "",

    card_holder: "",
    card_number: "",
    cvv: "",
    expire_date: "",
  });

  const [dif_ship, setDif_ship] = React.useState(false);

  // tabs handler
  function faqHandler(name) {
    setExpanded({
      cupon: false,
      billing_adress: false,
      payment: true,
      [name]: !tabs[name],
    });
  }

  // forms handler
  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      session_id: "",
      user_id: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      city: "marthandam",
      state: "marthandam",
      postcode: "545456",
      apartment: "apartment",
      company_name: "company_name",
      order_notes: "notes",
      product_id: "10",
      subtotal: "100",
      quantity: "5",
    };

    const mergedData = { ...userData, ...forms };

    console.log("Form data:", forms);
    try {
      const response = await axios.post(`${baseUrl}/place-order`, mergedData);

      console.log("res", response.data.data.prefill.name);
      const orderId = response.data.order_id;

      var options = {
        key: response.data.data.key,
        amount: response.data.data.amount,
        name: response.data.data.name,
        description: response.data.data.description,
        image: response.data.data.image,
        handler: function (response) {
          if (
            typeof response.razorpay_payment_id == "undefined" ||
            response.razorpay_payment_id < 1
          ) {
            console.log("not done");
          } else {
            axios
              .post(`${baseUrl}/payment/store`, {
                razorpay_payment_id: response.razorpay_payment_id,
                order_id: orderId,
              })
              .then((paymentResponse) => {
                router.push("/order-received");
                addToast(paymentResponse.data.data, {
                  appearance: "success",
                  autoDismiss: true,
                });
                console.log("Payment stored:", paymentResponse.data.data);
              })
              .catch((error) => {
                console.error(
                  "Error storing payment on the backend:",
                  error.response ? error.response.data : error.message
                );
              });
          }
        },
        prefill: {
          name: response.data.data.prefill.name,
          email: response.data.data.prefill.email,
          contact: response.data.data.prefill.contact,
        },
        notes: {
          address: response.data.data.notes.address,
          city: response.data.data.notes.city,
        },
        theme: {
          color: response.data.data.theme.color,
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.error(
        "Error placing order:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <Fragment>
      <RazorpayScript />

      <Grid className="checkoutWrapper section-padding">
        <Grid className="container" container spacing={3}>
          <Grid item md={6} xs={12}>
            <div className="check-form-area">
              <Grid className="cuponWrap checkoutCard">
                <Button
                  className="collapseBtn"
                  fullWidth
                  onClick={() => faqHandler("cupon")}
                >
                  Have a coupon ? Click here to enter your code.
                  <FontAwesome name={tabs.cupon ? "minus" : "plus"} />
                </Button>
                <Collapse in={tabs.cupon} timeout="auto" unmountOnExit>
                  <Grid className="chCardBody">
                    <p>If you have coupon code,please apply it</p>
                    <form className="cuponForm">
                      <TextField
                        fullWidth
                        type="text"
                        className="formInput radiusNone"
                        value={forms.cupon_key}
                        name="cupon_key"
                        onChange={(e) => changeHandler(e)}
                      />
                      <Button className="cBtn cBtnBlack">Apply</Button>
                    </form>
                  </Grid>
                </Collapse>
              </Grid>
              <Grid className="cuponWrap checkoutCard">
                <Button
                  className="collapseBtn"
                  fullWidth
                  onClick={() => faqHandler("billing_adress")}
                >
                  Billing Address
                  <FontAwesome name={tabs.billing_adress ? "minus" : "plus"} />
                </Button>
                <Collapse in={tabs.billing_adress} timeout="auto" unmountOnExit>
                  <Grid className="chCardBody">
                    <form className="cuponForm" onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item sm={6} xs={12}>
                          <TextField
                            fullWidth
                            label="First Name"
                            name="first_name"
                            value={forms.first_name}
                            onChange={(e) => changeHandler(e)}
                            type="text"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className="formInput radiusNone"
                          />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <TextField
                            fullWidth
                            label="Last Name"
                            name="last_name"
                            value={forms.last_name}
                            onChange={(e) => changeHandler(e)}
                            type="text"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className="formInput radiusNone"
                          />
                        </Grid>
                        {/* <Grid item sm={6} xs={12}>
                          <InputLabel id="demo-simple-select-filled-label">
                            Country
                          </InputLabel>
                          <FormControl
                            className="formSelect"
                            fullWidth
                            variant="filled"
                          >
                            <Select
                              disabled
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              defaultValue="India"
                              value={forms.country}
                              name="country"
                              onChange={(e) => changeHandler(e)}
                            >
                              <MenuItem value="">
                                <em>India</em>
                              </MenuItem>
                              <MenuItem value={10}>India</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid> */}
                        <Grid item sm={12} xs={12}>
                          <TextField
                            fullWidth
                            label="Dristrict"
                            name="dristrict"
                            value={forms.dristrict}
                            onChange={(e) => changeHandler(e)}
                            type="text"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className="formInput radiusNone"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            multiline
                            rows="3"
                            label="Address"
                            name="address"
                            value={forms.address}
                            onChange={(e) => changeHandler(e)}
                            type="text"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className="formInput radiusNone"
                          />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <TextField
                            fullWidth
                            label="Post Code"
                            name="post_code"
                            value={forms.post_code}
                            onChange={(e) => changeHandler(e)}
                            type="text"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className="formInput radiusNone"
                          />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <TextField
                            fullWidth
                            label="Email Adress"
                            name="email"
                            value={forms.email}
                            onChange={(e) => changeHandler(e)}
                            type="email"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className="formInput radiusNone"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Phone No"
                            name="phone"
                            value={forms.phone}
                            onChange={(e) => changeHandler(e)}
                            type="text"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className="formInput radiusNone"
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <Collapse
                            in={dif_ship}
                            timeout="auto"
                            unmountOnExit
                          ></Collapse>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            multiline
                            label="Order Notes"
                            placeholder="Note about your order"
                            name="note"
                            value={forms.note}
                            onChange={(e) => changeHandler(e)}
                            type="text"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className="formInput radiusNone note"
                          />
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          className="cardType"
                          style={{ marginTop: "20px" }}
                        >
                          <button
                            href="#"
                            type="submit"
                            className="theme-btn-s3 cBtn cBtnLarge cBtnTheme mt-20"
                          >
                            Proceed to Checkout
                          </button>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </Collapse>
              </Grid>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <Grid className="cartStatus">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grid className="cartTotals">
                    <h4>Cart Total</h4>
                    <Table>
                      <TableBody>
                        {cartList.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>
                              <b>{item.name}</b> ₹{item.price} x {item.qty}
                            </TableCell>
                            <TableCell align="right">
                              ₹{item.qty * item.price}
                            </TableCell>
                          </TableRow>
                        ))}
                        <TableRow className="totalProduct">
                          <TableCell>Total product</TableCell>
                          <TableCell align="right">{cartList.length}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Sub Price</TableCell>
                          <TableCell align="right">
                            ₹{totalPrice(cartList)}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Total Price</TableCell>
                          <TableCell align="right">
                            ₹{totalPrice(cartList)}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CheckoutSection;
