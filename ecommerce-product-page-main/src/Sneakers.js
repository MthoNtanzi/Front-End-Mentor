import React from 'react';
import { useState } from 'react';
import { images } from './images';
import './Sneakers.css'
import { ReactComponent as CartImg } from './images/icon-cart.svg';

export default function Sneakers() {

    const [itemCount, setItemCount] = useState(0);
    const [productImg, setProductImg] = useState(images[0]);

    const increaseCount = () => {
        setItemCount(itemCount + 1);
    }
    const decreaseCount = () => {
        if (itemCount > 0) {
            setItemCount(itemCount - 1);
        }
    }

    const viewImg1 = () => {
        setProductImg(images[0]);
    }
    const viewImg2 = () => {
        setProductImg(images[1]);
    }
    const viewImg3 = () => {
        setProductImg(images[2]);
    }
    const viewImg4 = () => {
        setProductImg(images[3]);
    }

  return (
    <div className='lg:grid grid-cols-2 gap-x-5 md:py-14 m-auto'>
        <div className='md:grid flex-col'>
              <div>
                <img src={productImg} className='md:rounded-lg w-auto'/>
                  {/* <div  className='flex justify-between h-56 md:hidden items-center'>
                      <img src='./images/icon-previous.svg' alt='Previous' className='bg-white rounded-full p-3 h-10 w-10 m-3 hover:cursor-pointer'/>
                      <img src='./images/icon-next.svg' alt='Next' className='bg-white rounded-full p-3 h-10 w-10 m-3 hover:cursor-pointer'/>
                  </div> */}
              </div>
              <div className='hidden md:flex gap-x-10 mt-10 box-border'>
                  <div className='hover:opacity-70 border-2 border-transparent hover:border-2 hover:border-orange-500 rounded-xl box-border' onClick={ viewImg1 }><img className='rounded-lg' src='./images/image-product-1-thumbnail.jpg'/></div>
                  <div className='hover:opacity-70 border-2 border-transparent hover:border-2 hover:border-orange-500 rounded-xl box-border' onClick={ viewImg2 }><img className='rounded-lg' src='./images/image-product-2-thumbnail.jpg'/></div>
                  <div className='hover:opacity-70 border-2 border-transparent hover:border-2 hover:border-orange-500 rounded-xl box-border' onClick={ viewImg3 }><img className='rounded-lg' src='./images/image-product-3-thumbnail.jpg'/></div>
                  <div className='hover:opacity-70 border-2 border-transparent hover:border-2 hover:border-orange-500 rounded-xl box-border' onClick={ viewImg4 }><img className='rounded-lg' src='./images/image-product-4-thumbnail.jpg'/></div>
              </div>
        </div>
        <div className='flex flex-col justify-around p-5 md:p-20'>
            <h1 className='headingTitle uppercase text-sm font-bold'>Sneaker Company</h1>

            <h2 className='font-extrabold text-3xl mt-3'>Fall Limited Edition Sneakers</h2>

            <p className='paragraph font-medium py-3'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they'll withstand everything the weather can offer.</p>

            <div className='font-bold my-5 flex flex-row justify-between md:flex-col '>
                <div className='flex gap-5'>
                    <p className='text-2xl'>$125.00</p>
                    <p className='fiftyP w-fit p-1 px-2 rounded-md'>50%</p>  
                </div>
                  
                <p className='col-span-2 line-through specialPrice justify-self-end md:mt-4'>$250.00</p>
            </div>
            <div className='grid md:grid-cols-5 gap-5'>
                  <div className='grid grid-cols-3 md:col-span-2 valueBx p-4 rounded-xl'><img src='./images/icon-minus.svg' className='justify-self-center hover:cursor-pointer p-2' onClick={decreaseCount}/><p className='justify-self-center font-semibold'>{ itemCount}</p><img src='./images/icon-plus.svg'  className='justify-self-center hover:cursor-pointer p-1' onClick={increaseCount}/></div>
                <div className='grid grid-cols-2 md:col-span-3 gap-x-5 cartBx p-4 rounded-xl hover:cursor-pointer'><CartImg className='justify-self-end'/><p className='justify-self-start text-white font-semibold'>Add to cart</p></div>                  
            </div>
            
        </div>
    </div>
  )
}
