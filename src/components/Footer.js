import { ButtonGroup } from "@material-ui/core";
import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <button
        className='footer__backToTop'
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Back to top
      </button>
      <div className='footer__links'>
        <div className='footer__linksColumn'>
          <div className='footer__linksColumnLinks footer__linksColumn--first'>
            Get to Know Us
          </div>
          <div className='footer__linksColumnLinks'> Careers</div>
          <div className='footer__linksColumnLinks'>Blog</div>
          <div className='footer__linksColumnLinks'> About Amazon</div>
          <div className='footer__linksColumnLinks'> Sustainability</div>
          <div className='footer__linksColumnLinks'> Press Center</div>
          <div className='footer__linksColumnLinks'> Investor Relations</div>
          <div className='footer__linksColumnLinks'> Amazon Devices</div>
          <div className='footer__linksColumnLinks'> Amazon Tours</div>
        </div>

        <div className='footer__linksColumn'>
          <div className='footer__linksColumnLinks footer__linksColumn--first'>
            Make Money with Us
          </div>
          <div className='footer__linksColumnLinks'>
            Sell products on Amazon
          </div>
          <div className='footer__linksColumnLinks'> Sell apps on Amazon</div>
          <div className='footer__linksColumnLinks'> Become an Affiliate</div>
          <div className='footer__linksColumnLinks'>
            Advertise Your Products
          </div>
          <div className='footer__linksColumnLinks'> Self-Publish with Us</div>
          <div className='footer__linksColumnLinks'> Host an Amazon Hub</div>
          <div className='footer__linksColumnLinks'>
            ›See More Make Money with Us
          </div>
        </div>

        <div className='footer__linksColumn'>
          <div className='footer__linksColumnLinks footer__linksColumn--first'>
            Amazon Payment Products
          </div>
          <div className='footer__linksColumnLinks'>
            Amazon Rewards Visa Signature Cards
          </div>
          <div className='footer__linksColumnLinks'> Amazon.com Store Card</div>
          <div className='footer__linksColumnLinks'> Amazon Secured Card</div>
          <div className='footer__linksColumnLinks'> Amazon Business Card</div>
          <div className='footer__linksColumnLinks'>
            Amazon Business Line of Credit
          </div>
          <div className='footer__linksColumnLinks'> Shop with Points</div>
          <div className='footer__linksColumnLinks'>
            Credit Card Marketplace
          </div>
        </div>

        <div className='footer__linksColumn'>
          <div className='footer__linksColumnLinks footer__linksColumn--first'>
            Let Us Help You
          </div>
          <div className='footer__linksColumnLinks'>Amazon and COVID-19</div>
          <div className='footer__linksColumnLinks'> Your Account</div>
          <div className='footer__linksColumnLinks'> Your Orders</div>
          <div className='footer__linksColumnLinks'>
            Shipping Rates & Policies
          </div>
          <div className='footer__linksColumnLinks'> IAmazon Prime</div>
          <div className='footer__linksColumnLinks'>Returns & Replacements</div>
          <div className='footer__linksColumnLinks'>
            Manage Your Content and Devices
          </div>
          <div className='footer__linksColumnLinks'> Amazon Assistant</div>
          <div className='footer__linksColumnLinks'> Help</div>
        </div>
      </div>

      <div className='footer__accessibility'>
        <img
          className='footer__logo'
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='Amazon Logo'
        />

        <div className='footer__accessibility__input1'>
          <select className='select' name='sortBy'>
            <option value='date'>English</option>
            <option value='amount'>Other</option>
          </select>
        </div>

        <div className='footer__accessibility__input2'>
          <select className='select' name='sortBy'>
            <option value='date'>🇺🇸 United States</option>
            <option value='amount'>Other</option>
          </select>
        </div>
      </div>

      <div className='footer__end'>
        <div className='footer__end--links'>
          <div className='footer__end--link'>
            <span>Amazon Music</span>
            Stream millions of songs
          </div>
          <div className='footer__end--link'>
            <span>Sell on Amazon </span>
            Start a Selling Account
          </div>
          <div className='footer__end--link'>
            <span>Audible</span>
            Listen to Books & Original Audio Performances
          </div>
          <div className='footer__end--link'>
            <span>Goodreads </span>
            Book reviews & recommendations
          </div>
          <div className='footer__end--link'>
            <span>Amazon Warehouse</span>
            Great Deals on Quality Used Products
          </div>
          <div className='footer__end--link'>
            <span>Amazon Advertising</span>
            Find, attract, and engage customers
          </div>
          <div className='footer__end--link'>
            <span>Amazon Business </span>
            Everything For Your Business
          </div>
          <div className='footer__end--link'>
            <span>Book Depository</span>
            Books With Free Delivery Worldwide
          </div>
          <div className='footer__end--link'>
            <span>IMDb </span>
            Movies, TV & Celebrities
          </div>
          <div className='footer__end--link'>
            <span>Whole Foods Market</span>
            America’s Healthiest Grocery Store
          </div>
          <div className='footer__end--link'>
            <span>Amazon Subscription </span>
            Boxes Top subscription boxes – right to your door
          </div>
          <div className='footer__end--link'>
            <span>Amazon Drive </span>
            Cloud storage from Amazon
          </div>
          <div className='footer__end--link'>
            <span>Amazon Fresh</span>
            Groceries & More Right To Your Door
          </div>
          <div className='footer__end--link'>
            <span>Box Office Mojo </span>
            Find Movie Box Office Data
          </div>
          <div className='footer__end--link'>
            <span>IMDbPro </span>
            Get Info Entertainment Professionals Need
          </div>
          <div className='footer__end--link'>
            <span> Woot! </span>
            Deals and Shenanigans
          </div>
          <div className='footer__end--link'>
            <span>PillPack </span>
            Pharmacy Simplified
          </div>
          <div className='footer__end--link'>
            <span>6pm </span>
            Score deals on fashion brands
          </div>
          <div className='footer__end--link'>
            <span>AmazonGlobal</span>
            Ship Orders Internationally
          </div>
          <div className='footer__end--link'>
            <span>ComiXology </span>
            Thousands of Digital Comics
          </div>
          <div className='footer__end--link'>
            <span>Kindle Direct Publishing </span>
            Indie Digital & Print Publishing Made Easy
          </div>
          <div className='footer__end--link'>
            <span>Zappos </span>
            Shoes & Clothing
          </div>
          <div className='footer__end--link'>
            <span>Amazon Renewed </span>
            Like-new products you can trust
          </div>
          <div className='footer__end--link'>
            <span>AbeBooks</span> Books, art & collectibles
          </div>
          <div className='footer__end--link'>
            <span>Home Services</span> Experienced Pros Happiness Guarantee
          </div>
          <div className='footer__end--link'>
            <span> DPReview</span> Digital Photography
          </div>
          <div className='footer__end--link'>
            <span>Amazon Photos</span> Unlimited Photo Storage Free With Prime
          </div>
          <div className='footer__end--link'>
            <span>Ring </span>Smart Home Security Systems
          </div>
          <div className='footer__end--link'>
            <span>Amazon Second Chance</span>
            Pass it on, trade it in, give it a second life
          </div>
          <div className='footer__end--link'>
            <span>ACX </span>
            Audiobook Publishing Made Easy
          </div>

          <div className='footer__end--link'>
            <span>East Dane</span>
            Designer Men's Fashion
          </div>
          <div className='footer__end--link'>
            <span>Prime Video Direct</span>
            Video Distribution Made Easy
          </div>
          <div className='footer__end--link'>
            <span>eero WiFi</span>
            Stream 4K Video in Every Room
          </div>
          <div className='footer__end--link'>
            <span>Amazon Ignite</span>
            Sell your original Digital Educational Resources
          </div>
          <div className='footer__end--link'>
            <span> Alexa</span>
            Actionable Analytics for the Web
          </div>
          <div className='footer__end--link'>
            <span> Amazon Web Services</span>
            Scalable Cloud Computing Services
          </div>
          <div className='footer__end--link'>
            <span>Fabric</span>
            Sewing, Quilting & Knitting
          </div>
          <div className='footer__end--link'>
            <span>Shopbop</span>
            Designer Fashion Brands
          </div>
          <div className='footer__end--link'>
            <span> Neighbors App</span>
            Real-Time Crime & Safety Alerts
          </div>
        </div>
      </div>
      <div className='footer__closer'>
        <div className='footer__closer--link'>Conditions of Use</div>
        <div className='footer__closer--link'>Privacy Notice</div>
        <div className='footer__closer--link'>Interest-Based Ads </div>
        <div className='footer__closer--link'>
          ©1996-2021, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </div>
  );
}

export default Footer;
