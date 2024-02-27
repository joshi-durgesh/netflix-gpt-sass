import { Link } from "react-router-dom";

import { LOGO } from "../utils/constant";

const SignInPage = () => {
  return (
    <section>
      <div className=' '>
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
