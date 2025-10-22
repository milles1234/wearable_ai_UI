import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col items-center'>
      
        <ul className='flex space-x-8 mt-4 text-lg font-medium'>
                {
                    [
                        {label: 'Wearable'},
                        {label: 'Neural'},
                        {label: 'Programs'},
                        {label: 'Updates'},
                        {label: 'Search'},
                       
                        
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
           <div className='flex absolute inset-x-0 bottom-0 h-50 px-16'>
            <p>augen</p>
              </div>
            <div className='flex absolute inset-x-0 bottom-0 h-45  gap-3  text-bold px-16'>
                <h3>
              Beyond Humanware
            </h3>
              </div>
            <div className='flex absolute inset-x-0 bottom-0 h-36  gap-3   text-bold px-16'>
              <p>Explore</p>
            <p>A'Sense</p>
            <p>B'Eye</p>
            <p>A'Neuro</p>
            </div>
            
        
            
         
  
         
            
        <img src='./src/assets/page1.webp'/>
    </div>
  )
}

export default Navbar