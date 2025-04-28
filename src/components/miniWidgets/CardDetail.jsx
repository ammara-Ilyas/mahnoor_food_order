import React from 'react'

const CardDetail = () => {
  return (
    <div>
        {/* Payment Information */}
        <div className="mb-6 border-b pb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Payment information
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              placeholder="Name on card"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2"
            />
            <input
              type="text"
              placeholder="Card number"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2"
            />
            <input
              type="text"
              placeholder="MM / YY"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="CVC"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Zip Code"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2"
            />
          </div>
        </div>
  
        {/* Terms and Conditions */}
        <div className="mb-6">
          <div className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" />
            <label className="text-sm text-gray-700">
              Add this card to your account to save time when making future
              bookings and purchases.
            </label>
          </div>
          <div className="flex items-start space-x-2 mt-3">
            <input type="checkbox" className="mt-1" />
            <label className="text-sm text-gray-700">
              Sign me up to receive dining offers and news from this restaurant by
              email.
            </label>
          </div>
          <div className="flex items-start space-x-2 mt-3">
            <input type="checkbox" className="mt-1" />
            <label className="text-sm text-gray-700">
              Yes, I want to get text updates and reminders about my reservations.
            </label>
          </div>
        </div>
  
        {/* Cancellation Policy */}
        <div className="mb-6 bg-gray-100 p-4 rounded-md text-sm text-gray-700">
          <strong>Cancellation Policy:</strong> Prepaid experiences cannot be
          changed, canceled, or refunded through OpenTable. Please reach out to
          the restaurant directly to learn about their modification and
          cancellation policy.
        </div>
    </div>
  )
}

export default CardDetail
