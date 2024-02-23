import { TV_IMG, VIDEO_TV } from "../utils/constant";

const TvSection = () => {
  return (
    <section className='bg-black  border-b-8 border-neutral-700'>
      <div className='max-w-[1200px] h-[80vh] mx-auto flex items-center gap-3'>
        <div className=' w-full h-full text-white flex flex-col gap-7 justify-center'>
          <div className='text-5xl font-bold '>Enjoy on your TV</div>
          <p className='text-2xl'>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className='w-full h-full relative'>
          <img
            src={TV_IMG}
            className='absolute  top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-[2]'
          />
          <video
            autoPlay={true}
            loop
            className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] scale-[0.92] mt-[-9px] ml-[-3px]'
          >
            <source src={VIDEO_TV} type='video/mp4' />
          </video>
        </div>
      </div>
    </section>
  );
};

export default TvSection;
