import React from 'react'
import Flickity from 'react-flickity-component'
import testimonialsData from '../../data/testimonials.json'

type TestimonialData = {
  id: number
  name: string
  company: string
  testimonial: string
  image: string
}

const flickityOptions = {
  lazyLoad: true,
  initialIndex: 1,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: true,
  freeScroll: true
}

const Testimonials = () => {
  return (
    <div>
      <div className='py-20 px-10 md:px-48'>
        <h2 className='text-4xl font-bold mb-4'>
          Kind words
          <br />
          <span className='text-dark-grey'>from our clients</span>
        </h2>
      </div>
      <div className='max-w-md mx-auto pb-20'>
        <Flickity options={flickityOptions} className='testimonial-carousel'>
          {testimonialsData.map((testimonial: TestimonialData) => (
            <div
              key={testimonial.id}
              className='bg-grey rounded-lg shadow-lg p-6 mb-8 text-center mx-3'
            >
              <p className='mb-4 text-2xl font-semibold px-20'>
                {testimonial.testimonial}
              </p>
              <div className='flex flex-col items-center justify-center'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-28 py-4'
                />
                <div className='mr-4'>
                  <div className='text-lg font-semibold'>
                    {testimonial.name}
                  </div>
                </div>
                <div className='mr-4'>
                  <div className='text-lg'>{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </Flickity>
      </div>
    </div>
  )
}

export default Testimonials
