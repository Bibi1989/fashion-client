import React from "react";
import { Button, Icon, Input } from "semantic-ui-react";
import { Footers, Div } from "./style";

const Footer = () => {
  return (
    <Div data-aos='zoom-in'>
      <Footers>
        <div className='company'>
          <h2>COMPANY INFO</h2>
          <div>
            <p>About Ere Place</p>
            <p>Affiliate</p>
            <p>Fashion Blogger</p>
          </div>
        </div>
        <div className='help'>
          <h2>HELP & SUPPORT</h2>
          <div>
            <p>Returns</p>
            <p>Shippings Info</p>
            <p>How to help</p>
            <p>Size Guide</p>
          </div>
        </div>
        <div className='customer'>
          <h2>CUSTOMER CARE</h2>
          <div>
            <p>Contact Us</p>
            <p>Payment Method</p>
            <p>Bonus Point</p>
            <p>Coupon</p>
          </div>
        </div>
        <div className='customer'>
          <h2>FIND US</h2>
          <div className='social-icons'>
            <Button color='facebook'>
              <Icon name='facebook' /> Facebook
            </Button>
            <Button color='twitter'>
              <Icon name='twitter' /> Twitter
            </Button>
            <Button color='google plus'>
              <Icon name='google plus' /> Google Plus
            </Button>
            {/* <Button color='linkedin'>
            <Icon name='linkedin' /> LinkedIn
          </Button>
          <Button color='instagram'>
            <Icon name='instagram' /> Instagram
          </Button> */}
            <Button color='youtube'>
              <Icon name='youtube' /> YouTube
            </Button>
          </div>
          <div className='suscribe'>
            <Input
              label='SUSCRIBE'
              labelPosition='right'
              placeholder='Your Email Address'
            />
          </div>
          <div className='payment'>
            <h3>We Accept</h3>
            <i className='fab fa-cc-paypal'></i>
            <i className='fab fa-cc-visa'></i>
            <i className='fab fa-cc-mastercard'></i>
          </div>
        </div>
      </Footers>
      <div className='copy-right'>
        <span>©2009-2020 ERE PLACE All Rights Reserved</span>
      </div>
    </Div>
  );
};

export default Footer;
