import React from 'react'

const Recognition = () => {
  return (
    <div className='bg-[#f5f5f5] py-12 px-4 md:py-16 md:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl md:text-4xl font-normal text-gray-900 text-center mb-8 md:mb-12'>
          Recognition & Affiliations
        </h1>

        <div className='flex justify-center'>
          <a
            href='https://nyefpokhara.org/member/140'
            target='_blank'
            rel='noopener noreferrer'
            className='group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 md:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 max-w-md w-full border border-gray-100 hover:border-gray-200'
          >
            <img
              src='images/nyefpokharalogo1.png'
              alt='NYEF Pokhara Chapter'
              className='w-20 h-20 md:w-24 md:h-24 object-contain shrink-0'
            />
            <div className='text-center sm:text-left'>
              <p className='text-lg md:text-xl font-semibold text-gray-900 group-hover:text-[#f37a20] transition-colors'>
                NYEF Pokhara Chapter
              </p>
              <p className='text-sm md:text-base text-gray-500 mt-1'>
                Verified Member
              </p>
              <p className='text-sm text-[#f37a20] mt-2 inline-flex items-center gap-1'>
                View Profile
                <span className='group-hover:translate-x-1 transition-transform'>→</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Recognition