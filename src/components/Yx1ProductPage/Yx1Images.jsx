import React from 'react'

import gallery1Mobile from '/product-yx1-earphones/mobile/image-gallery-1.jpg'
import gallery1Tablet from '/product-yx1-earphones/tablet/image-gallery-1.jpg'
import gallery1Desktop from '/product-yx1-earphones/desktop/image-gallery-1.jpg'


import gallery2Mobile from '/product-yx1-earphones/mobile/image-gallery-2.jpg'
import gallery2Tablet from '/product-yx1-earphones/tablet/image-gallery-2.jpg'
import gallery2Desktop from '/product-yx1-earphones/desktop/image-gallery-2.jpg'

import gallery3Mobile from '/product-yx1-earphones/mobile/image-gallery-3.jpg'
import gallery3Tablet from '/product-yx1-earphones/tablet/image-gallery-3.jpg'
import gallery3Desktop from '/product-yx1-earphones/desktop/image-gallery-3.jpg'

const Yx1Images = () => {
  return (
    <section className='flex flex-col gap-3 mx-6 md:mx-10 lg:mx-auto max-w-[1110px] md:flex-row'>
      <div className='flex flex-col gap-6'>
        <img className='w-full rounded-lg md:hidden' src={gallery1Mobile} />
        <img className='w-full hidden rounded-lg md:block lg:hidden' src={gallery1Tablet} />
        <img className='hidden rounded-lg md:block lg:hidden' src={gallery2Tablet} />
        <img className='hidden h-full rounded-lg lg:block ' src={gallery1Desktop} />
        <img className='hidden h-full rounded-lg lg:block ' src={gallery2Desktop} />
      </div>
      <div>
        <img className='w-full rounded-lg md:hidden' src={gallery2Mobile} />
      </div>
      <div>
        <img className='w-full rounded-lg md:hidden'  src={gallery3Mobile} />
        <img className='hidden h-full rounded-lg md:block lg:hidden' src={gallery3Tablet} />
        <img className='hidden h-full rounded-lg lg:block' src={gallery3Desktop} />
      </div>
    </section>
  )
}

export default Yx1Images