import React from 'react'

function DetailsBdoy(props) {
    const {item}=props
  return (
    <div>
      <table className='pb-[80px]'>
    <tbody>
      <tr className='mt-[10px]'>
        <td className='font-bold pr-4'>Property Details:</td></tr>
      <tr className='mt-[10px]'>
        <td className=' pr-4 '>Published:</td>
        <td>{item.title}</td>
      </tr>
      <tr className='mt-[10px]'>
        <td className=' pr-4'>Offer:</td>
        <td>{item.title}</td>
      </tr>
      <tr className='mt-[10px]'>
        <td className=' pr-4'>Property Type:</td>
        <td>{item.title}</td>
      </tr>
      <tr className='mt-[10px]'>
        <td className=' pr-4'>Space:</td>
        <td>{item.title}</td>
      </tr>
      <tr className='mt-[10px]'>
        <td className=' pr-4'>Length:</td>
        <td>{item.title}</td>
      </tr>
      <tr className='mt-[10px]'>
        <td className=' pr-4'>Width:</td>
        <td>{item.title}</td>
      </tr>
      <tr className='mt-[10px] mb-[40px]'>
        <td className=' pr-4'>Range Rate:</td>
        <td>{item.title}</td>
      </tr>
      <tr className='mt-[10px]'>
        <td className=' pr-4'>City:</td>
        <td>{item.title}</td>
      </tr>
      <tr className='mt-[10px]'>
        <td className=' pr-4'>Location:</td>
        <td>{item.title}</td>
      </tr>
      <tr className='mt-[10px]'>
        <td className=' pr-4'>Area classification:</td>
        <td>{item.title}</td>
      </tr>
      <tr className='mt-[10px]'>
        <td className=' pr-4'>Address:</td>
        <td>{item.title}</td>
      </tr>
      <tr className='mt-[10px]'>
        <td className=' pr-4'>Additional Description:</td>
        <td>{item.title}</td>
      </tr>
    </tbody>
  </table>

<ul>
  <li className=' font-bold'>Services:</li>
  <li className='my-[20px] ml-[50px]'>Water / Electricity / Tabo / Main Road / Ceiling Storage
</li>
  </ul>
  <table >
  <thead>
    <tr className=''>
      <th className='text-left py-2 px-4 font-bold'>Advertiser Details</th>
      <th className='text-left py-2 px-4'></th> 
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='py-2 px-4 '>Name:</td>
      <td className='py-2 px-4'>{item.title}</td>
    </tr>
    <tr >
      <td className='py-2 px-4 '>Phone:</td>
      <td className='py-2 px-4'>{item.description}</td>
    </tr>
    <tr >
      <td className='py-2 px-4 '>Whatsapp:</td>
      <td className='py-2 px-4'>{item.description}</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default DetailsBdoy
