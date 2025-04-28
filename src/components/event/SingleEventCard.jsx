import React from 'react'
import SingleEventSlider from './SingleEventSlider'

const SingleEventCard = () => {
  return (
    <div className=" mx-auto p-4  ">
    {/* Top Header */}
    <div className="text-sm text-black flex flex-row gap-2 mb-4">
      <span className="cursor-pointer ">Car Rental</span> /{" "}
      <span className="cursor-pointer ">Cars</span> /{" "}
      <span>Booking Summary</span>
    </div>

    {/* Main Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Left Section */}
      <div className="col-span-2">
        {/* <SingleEventSlider/> */}
        {/* <ProductImage images={product.images} /> */}

        {/* Features */}
        <div className="mt-6 ">
          {/* <Specifications product={product} /> */}
        </div>

       
      </div>

    </div>
  </div>
  )
}

export default SingleEventCard
