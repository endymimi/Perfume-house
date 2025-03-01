import React from 'react'
import { perfumeDatas } from '../product';
import perfstar from "../assets/Frame 27.png";
import amountImg from "../assets/Frame 1000005520.png";


const Products = () => {
  
  return (
    <>
      <main className="">
        <div className=" md:grid grid-cols-3 ">
          {perfumeDatas.map((perfumeData) => {
            return (
              <div key={perfumeData.id} className="card bg-base-100 w-[300px] md:w-[256.62px] md:h-[415.55px] border-[1.14px] border-[#F3F2FB] rounded-[4.56px] shadow-sm  ">
                <figure>
                  <img className='' src={perfumeData.image} alt={perfumeData.id} />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title">{perfumeData.title}</h2>
                  <div>
                    <img src={perfstar} alt="star-pics" />
                    <img src={amountImg} alt="amount" />
                  </div>
                  <p>
                    {perfumeData.rating} ({perfumeData.rateCount})
                  </p>
                  <div className="card-actions justify-end">
                    <button className="w-full h-[25px] bg-[#8D34FF] rounded text-[#F5F5F5] cursor-pointer text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Products