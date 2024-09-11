import React from 'react';
import './details.css';

function DetailsBdoy(props) {
  const { item } = props;

  if (!item) {
    return <p>No property details available.</p>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-1">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Property Details</h2>
        <table className="w-full">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4 font-semibold text-gray-600">Published:</td>
              <td className="py-2 text-blue-500 font-medium">{item.createdAt}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4 font-semibold text-gray-600">Offer:</td>
              <td className="py-2 text-blue-500 font-medium">{item.offerType}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4 font-semibold text-gray-600">Property Type:</td>
              <td className="py-2 text-blue-500 font-medium">{item.propertyType}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4 font-semibold text-gray-600">Space:</td>
              <td className="py-2 text-blue-500 font-medium">{item.space} sqm</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4 font-semibold text-gray-600">Expected Price:</td>
              <td className="py-2 text-blue-500 font-medium">{item.price} JOD</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4 font-semibold text-gray-600">City:</td>
              <td className="py-2 text-blue-500 font-medium">{item.city}</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-semibold text-gray-600">Address:</td>
              <td className="py-2 text-blue-500 font-medium">{item.address}</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-semibold text-gray-600">Additional Description:</td>
              <td className="py-2 text-blue-500 font-medium">{item.description}</td>
            </tr>
          </tbody>
        </table>
      </div>

      

      <div className="col-span-1 lg:col-span-2">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Advertiser Details</h2>
        <table className="w-full">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4 font-semibold text-gray-600">Name:</td>
              <td className="py-2 text-gray-700">{item.name || item.advertiserName}</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-semibold text-gray-600">Phone:</td>
              <td className="py-2 text-gray-700">{item.phone || item.advertiserPhone}</td>
            </tr>
          </tbody>
          
        </table>
      <div className="col-span-1 my-14">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Services</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="ml-4">{item.servicesString}</li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default DetailsBdoy;
