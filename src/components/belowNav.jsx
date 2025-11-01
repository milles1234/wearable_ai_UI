import { ArrowRight } from 'lucide-react'
import React from 'react'

const BelowNav = () => {
  return (
 <div className='min-h-screen bg-gray-100 flex px-74 gap-32 pt-60'>

  <div className=' flex-col  items-center justify-center  px-6 pt-7'>
    <h3 className='text-gray-500'>Overview</h3>
    <p className='font-bold text-2xl'>Breakthrough</p>
  </div>
    
<div className=' flex-col items-center jusit px-6 pt-7'>
  <p className='font-bold text-3xl'>Augen Pro is the first to engineer AI-driven, general-purpose Computing designed
    <p className='text-blue-400'>
      to improve peoples life.
      </p>  
    </p>
    
    <p className='flex pt-20  '><ArrowRight className='border rounded-full w-8 h-5 hover:text-blue-400 px-2 py-1 mr-6 '></ArrowRight>Research Insight</p>
</div>
    

 </div>
  )
}

export default BelowNav