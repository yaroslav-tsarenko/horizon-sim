import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import CartFooter from "./CartFooter";
import PropTypes from "prop-types";
import "./CartItems.css";

const CartItems = ({ className = "" }) => {
  return (
    <section className={`cart-items ${className}`}>
      <div className="items-container">
        <div className="cart-item">
          <div className="item-summary">
            <div className="header2">
              <div className="header-child" />
              <div className="summary-titles">
                <div className="product">Product</div>
              </div>
              <div className="summary-titles1">
                <div className="price">Price</div>
              </div>
              <div className="quantity">Quantity</div>
              <div className="total">Total</div>
            </div>
            <div className="item-details">
              <div className="wrapper-product-thumbnail">
                <img
                  className="product-thumbnail-icon"
                  loading="lazy"
                  alt=""
                  src="/rectangle-4554@2x.png"
                />
              </div>
              <div className="item-price">
                <div className="fenty-beauty-50">
                  Fenty Beauty 50% OFF Gift Card
                </div>
                <div className="discount-20-off">Discount: 20% OFF</div>
              </div>
              <div className="quantity-adjust-parent">
                <div className="quantity-adjust">
                  <div className="price-value">$120.00</div>
                  <div className="credits1">12 Credits</div>
                </div>
                <div className="credit-adjustments">
                  <div className="adjust-buttons">
                    <div className="quantity-buttons-container">
                      <img
                        className="icon-plus1"
                        loading="lazy"
                        alt=""
                        src="/iconplus.svg"
                      />
                    </div>
                    <div className="icon-separator">3</div>
                    <input
                      className="quantity-buttons-container1"
                      type="checkbox"
                    />
                  </div>
                  <FormControl
                    className="item-time"
                    variant="standard"
                    sx={{
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#3e98b6",
                      borderRadius: "8px",
                      width: "99.10714285714286%",
                      height: "38px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "38px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "38px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "38px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "38px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: "Regular",
                        fontFamily: "Roboto",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "16px",
                      },
                    }}
                  >
                    <InputLabel color="primary" />
                    <Select
                      color="primary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="16px"
                          height="16px"
                          src="/time-input.svg"
                          style={{ marginRight: "16px" }}
                        />
                      )}
                    >
                      <MenuItem>Hourly</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
              <div className="separator">$120.00</div>
            </div>
          </div>
          <CartFooter shoppingSpreeGiftCard="Shopping Spree Gift Card" />
          <CartFooter shoppingSpreeGiftCard="Travel GiftCard" />
          <div className="item-info">
            <div className="action-divider" />
            <div className="action-buttons">
              <Button
                className="button1"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "18",
                  borderColor: "#000",
                  borderRadius: "4px",
                  "&:hover": { borderColor: "#000" },
                  width: 127,
                  height: 54,
                }}
              >
                Go Back
              </Button>
              <Button
                className="button2"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#3e98b6",
                  borderRadius: "4px",
                  "&:hover": { background: "#3e98b6" },
                  width: 136,
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
        <div className="checkout-details">
          <div className="summary-title">
            <div className="header3">
              <div className="checkout-details1">Checkout Details</div>
            </div>
          </div>
          <div className="summary-details">
            <div className="summary-values">
              <div className="cart-subtotal">Cart Subtotal</div>
              <div className="total-separator">$360.00</div>
            </div>
          </div>
          <div className="shipping-details">
            <div className="shipping-container">
              <div className="shipping-handling-parent">
                <div className="shipping-handling">{`Shipping & Handling`}</div>
                <div className="other-taxes">Other Taxes</div>
              </div>
              <div className="shipping-labels">
                <div className="div">$0.00</div>
                <div className="div1">$0.00</div>
              </div>
            </div>
          </div>
          <div className="footer-separator">
            <div className="summary-divider" />
          </div>
          <div className="summary-details1">
            <div className="grand-total-parent">
              <div className="grand-total">Grand Total</div>
              <div className="div2">$360.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartItems.propTypes = {
  className: PropTypes.string,
};

export default CartItems;
