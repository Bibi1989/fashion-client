import React, { useEffect, useState } from "react";
import { Table, Header, Button, Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import PaystackButton from "react-paystack";
import styled from "styled-components";
import { deleteOrder } from "../../ProductReducer/store";

const OrderList = () => {
  const token = sessionStorage.getItem("ere_token");
  const [state] = useState({
    // key: "sk_test_c147536a9ed04530bd70cc7cc5cc098a7e54bfc7",
    key: "pk_test_17a5e226d534f69c1e08c24e0342229530ea5b75",
    email: "bibiaremieye1@gmail.com",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const order: any = localStorage.getItem("fashions");
  let orders: any = JSON.parse(order) || [];
  const order_loading = useSelector(
    ({ products }: any) => products.order_loading
  );
  const total_price: number | null = orders.reduce(
    (a: number, v: any) => (a += parseInt(v.price) * parseInt(v.quantity)),
    0
  );
  useEffect(() => {
    // eslint-disable-next-line
  }, [order_loading]);
  const removeCart = (id: string) => {
    orders = orders.filter((order: any) => order.id !== id);
    localStorage.setItem("fashions", JSON.stringify(orders));
    deleteOrder(dispatch, id, orders.length);
  };

  const continueShopping = () => {
    history.goBack();
  };

  const callback = (response: any) => {
    console.log(response); // card charged successfully, get reference here
  };

  const close = () => {
    alert("Payment closed");
  };

  const getReference = () => {
    //you can put any unique reference implementation code here
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  return (
    <Div data-aos='fade-left'>
      <h1>Your Cart</h1>
      <Button
        content='Continue Shopping'
        color='orange'
        onClick={continueShopping}
      ></Button>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Product Image</Table.HeaderCell>
            <Table.HeaderCell>Product Category</Table.HeaderCell>
            <Table.HeaderCell>
              Product Description / Category_type
            </Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {orders.map((order: any, i: number) => {
            let b: any = [];
            JSON.parse(order.image_url).forEach((a: any) => {
              b.push(a);
            });
            return (
              <Table.Row
                key={order.id}
                data-aos='zoom-in-up'
                data-aos-delay={(i + 1) * 100}
              >
                <Table.Cell
                  style={{ padding: "0 !important", margin: "0 !important" }}
                >
                  <Header as='h2' textAlign='center' style={{ width: "80px" }}>
                    <Link to={`/product/${order.id}`}>
                      <img
                        src={b[0]}
                        alt={order.title}
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "10%",
                        }}
                      />
                    </Link>
                  </Header>
                </Table.Cell>
                <Table.Cell singleLine>{order.title}</Table.Cell>
                <Table.Cell textAlign='right'>
                  {order.description} <br />
                  <a href='!#'>{order.category_type}</a>
                </Table.Cell>
                <Table.Cell>{order.category}</Table.Cell>
                <Table.Cell>{order.quantity}</Table.Cell>
                <Table.Cell style={{ width: "100px" }}>
                  <span>&#8358;</span> {order.price}
                  <br />
                  <br />
                  <Button
                    style={{ background: "white" }}
                    onClick={() => removeCart(order.id)}
                  >
                    <Icon size='large' name='trash' color='red' />
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      {orders.length === 0 && (
        <div>
          <h3
            style={{
              textAlign: "center",
              padding: "10% 0",
              fontWeight: "bolder",
            }}
          >
            No Product ordered to Cart!!!
          </h3>
        </div>
      )}

      <h1 data-aos='zoom-in-up'>
        <span>Total Amount: </span> <span>&#8358;</span>{" "}
        <span>{total_price !== null && total_price}</span>
      </h1>
      <PayPalButton
        amount={`${total_price}`}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details: any, data: any) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID,
            }),
          });
        }}
      />
      <Checkout>Checkout</Checkout>
      <PaymentModal>
        <PaystackButton
          text='Make Payment'
          className='payButton'
          callback={callback}
          close={close}
          disabled={true}
          embed={true}
          reference={getReference()}
          email={state.email}
          amount={total_price !== null && total_price * 1000}
          paystackkey={state.key}
          tag={<Button>Make Payment</Button>}
        />
      </PaymentModal>
    </Div>
  );
};

export default OrderList;

export const Div = styled.div`
  padding: 3% 10%;
`;
export const Checkout = styled.div`
  width: 120px;
  padding: 1em 0;
  text-align: center;
  background: orangered;
  color: white;
  border-radius: 0.3em;
`;
export const PaymentModal = styled.div`
  display: block;
  width: 50%;
  margin: auto;

  .paystack-box {
    overflow: hidden !important;
    padding: 3em !important;
    height: 500px;
  }
`;
