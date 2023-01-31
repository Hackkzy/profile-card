function App() {
  return (
    <div className='App w-full h-screen bg-gradient-to-r from-rose-300 via-pink-500 to-rose-500 animate-anigrad flex font-medium items-center justify-center h-screen"'>
      <section className='w-64 mx-auto backdrop-blur-md bg-white/30 rounded-2xl px-8 py-6 shadow-lg'>
        <div className='mt-6 w-fit mx-auto'>
          <img
            className='rounded-full w-28'
            src={require("./avatar.gif")}
            alt='Profile'
          />
        </div>
        <div className='mt-8 '>
          <h2 className='text-black font-sans antialiased text-2xl tracking-wide'>
            Jay Patel
          </h2>
        </div>
        <div className='mt-3 text-white text-sm'>
          <span className='text-gray-800 font-semibold'>
            I love video games
          </span>
        </div>
        <div className='flex flex-wrap justify-center gap-2 sm:gap-4 mt-4'>
          <a
            href='https://twitter.com/Hackkzy'
            className='text-blue-500 hover:text-gray-400 p-1 sm:p-2 inline-flex items-center'
          >
            <svg
              className='w-7 h-7 fill-current'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
            </svg>
          </a>
          <a
            href='https://github.com/Hackkzy'
            className='text-black hover:text-gray-400 p-1 sm:p-2 inline-flex items-center'
          >
            <svg
              className='w-7 h-7 fill-current'
              role='img'
              viewBox='0 0 30 30'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z' />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
