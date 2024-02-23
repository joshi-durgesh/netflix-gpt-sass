import { Link } from "react-router-dom";

import { BG_POSTER, LOGO } from "../utils/constant";

const SignInPage = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BG_POSTER})` }}
      className='h-[100vh]  bg-cover'
    >
      <div className=' h-full bg-gradient-to-b from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.6)]'>
        <Link to={"/"} className='p-4 block'>
          <img src={LOGO} className='w-48' />
        </Link>

        <div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
