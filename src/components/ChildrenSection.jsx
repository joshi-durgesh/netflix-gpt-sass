import { CHILDREN_IMG } from "../utils/constant";

const ChildrenSection = () => {
  return (
    <section className='bg-black  border-b-8 border-neutral-700 '>
      <div className='max-w-[1200px] h-[80vh] mx-auto flex items-center gap-4'>
        <div className='w-full h-full relative'>
          <img
            src={CHILDREN_IMG}
            className='absolute  top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10'
          />
        </div>
        <div className='w-full h-full text-white flex flex-col gap-6 justify-center'>
          <div className='text-5xl font-bold  tracking-wider leading-tight'>
            Create profiles for kids
          </div>
          <p className='text-2xl'>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChildrenSection;
