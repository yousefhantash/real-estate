import React from 'react'

export default function withWarpper(Component) {
  return (props)=>(

    <div className='w-[1310px] max-w-[calc(100%-30%)] mx-auto flex items-center justify-center'>
      <Component {...props}/>
    </div>
  )
}
