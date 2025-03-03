import React from "react";
import cartPreview from "../assets/My Cart Preview.png";
import imageOne from "../assets/image 1.png";
import imageTwo from "../assets/image 2.png";
import aventConfirm from "../assets/cart5.png";
import successIcon from "../assets/Success Icon.png";
import threeImg from "../assets/three.png";
import cross from "../assets/Group2.png";
import newcart from "../assets/new cart.png";


const Cart = () => {
  return (
    <>
      <div className=" container my-5 gap-6 ">
        <div className=" w-hug[348px]  mx-auto">
          <img className="w-45 mt-14" src={cartPreview} alt="cart-preview" />
          <br />
          <img src={imageOne} alt="first-cart" />
          <br />
          <img src={imageTwo} alt="image-2" />

          
          
          <br />
          <div>
            <img src={newcart} alt="" />
            <br />
          <img src={aventConfirm} alt="" />
          </div>
          <br />
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="w-76 h-[45px] bg-[#8D34FF] rounded-xl  text-[#F5F5F5] cursor-pointer text-sm"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Confirm Order
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-8/12 max-w-xl">
              <div className="flex justify-between">
                <img src={successIcon} alt="icon" />
                <img className="w-10 h-7 my-6" src={cross} alt="cross-icon" />
              </div>
              <h3 className="font-bold text-lg">Order Confirmed</h3>
              <p>We hope you enjoy your order</p>
              <br />
              <div>
                <img src={threeImg} alt="three" />
              </div>

              <p className="py-4"></p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="w-50 h-[40px] bg-[#8D34FF] rounded-2xl text-[#F5F5F5] cursor-pointer text-sm ">
                    Start New Order
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default Cart;
