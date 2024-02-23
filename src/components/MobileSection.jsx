import { DOWNLOAD_GIF, MOBILE_IMG, MOVIE_POSTER } from "../utils/constant";

const MobileSection = () => {
  return (
    <section className='bg-black  border-b-8 border-neutral-700 '>
      <div className='max-w-[1200px] h-[80vh] mx-auto flex items-center gap-4'>
        <div className='w-full h-full relative'>
          <img
            src={MOBILE_IMG}
            alt='mobile image'
            className='absolute  top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10'
          />
          <div className='absolute flex border top-[65%] left-[50%] translate-x-[-50%]  z-10 items-center bg-black h-28 p-3 gap-2 w-[55%] justify-between rounded-xl'>
            <div className='flex w-full h-full gap-3 items-center'>
              <img src={MOVIE_POSTER} alt='movie poster' className='h-full' />
              <div>
                <div className='text-white'>Stranger Things</div>
                <div className='text-blue-500'>Downloading...</div>
              </div>
            </div>
            <img src={DOWNLOAD_GIF} className='w-14 h-14' />
          </div>
        </div>
        <div className='w-full h-full text-white flex flex-col gap-6 justify-center'>
          <div className='text-5xl font-bold  tracking-wider leading-tight'>
            Download your shows to watch offline
          </div>
          <p className='text-2xl'>
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
