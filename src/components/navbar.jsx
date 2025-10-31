import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col items-center'>
      
        <ul className='flex space-x-8 mt-4 text-lg font-medium pt-2 bg-gray-100/80 backdrop-blur-md px-6 py-2 rounded-xl shadow-sm'>
                {
                    [
                        {label: 'Wearable'},
                        {label: 'Neural'},
                        {label: 'Programs'},
                        {label: 'Updates'},
                        {label: 'Search'},
                      //  <div className="flex items-center gap-8 bg-gray-100/80 backdrop-blur-md px-6 py-2 rounded-xl shadow-sm"></div>
                        
                    ].map(({label}) => (
                        <li key={label}>
                        <a href={`#${label.toLowerCase()}`} className="hover:text-blue-500 transition-colors">
              {label}
            </a>
                            </li>
                        
                    )

                    )
                }
            </ul>
           <div className='flex absolute inset-x-0 bottom-0 h-50 px-16 '>
            <p className='font-bold'>augen</p>
              </div>
            <div className='flex absolute inset-x-0 bottom-0 h-45  gap-3  text-bold px-16 pt-1.5'>
                <h3 className='font-semibold text-2xl'>
              Beyond Humanware
            </h3>
              </div>
            <div className='flex absolute inset-x-0 bottom-0 h-36  gap-3   text-bold px-16 pt-4 '>
              <p>Explore</p>
           
            <p className="hover:text-blue-500 transition-colors border-2 border-blue-500 rounded-full w-18 h-7 px-1">A'Sense</p>
            <p className="hover:text-blue-500 transition-colors border-2 border-blue-500 rounded-full w-18 h-7 px-2.5">B'Eye</p>
            <p className="hover:text-blue-500 transition-colors border-2 border-blue-500 rounded-full w-18 h-7 px-1.5">A'Neuro</p>
            </div>
            
        
            
         
  
         
            
        <img src='./src/assets/page1.webp'/>
    </div>
  )
}

export default Navbar