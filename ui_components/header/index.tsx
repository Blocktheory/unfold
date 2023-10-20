import Image from "next/image";

import { useContext, useEffect } from "react";

import { GlobalContext } from "../../context/GlobalContext";

import { icons } from "../../utils/images";

import BackBtn from "../BackBtn";

interface IHeader {
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  step: number;
}

const Header = (props: IHeader) => {
  const { step, signIn, signOut } = props;

  const {
    state: { isConnected },
  } = useContext(GlobalContext);

  return (
    <header className="z-[9] fixed left-1/2 -translate-x-1/2 top-4 rounded-3xl h-[64px] bg-secondary-100 text-center flex items-center justify-between px-3 w-[calc(100vw-32px)] lg:w-[600px]">
      {step === 1 ? (
        <Image src={icons.logo} alt="logo" className="w-10" />
      ) : (
        // <BackBtn onClick={() => handleSteps(step === 3 ? 1 : step - 1)} />
        <Image src={icons.logo} alt="logo" className="w-10" />
      )}

      <div className="flex gap-4 items-center">
        <div className="relative">
          {isConnected ? (
            <button
              type="button"
              onClick={signOut}
              className="h-[40px] rounded-2xl bg-secondary-600 flex items-center px-3 py-2 justify-center gap-2"
            >
              <Image src={icons.logOut} alt="logout" className="w-6 " />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 14.5C4.41594 14.5 1.5 11.5791 1.5 7.98906C1.5 6.0375 2.35156 4.20781 3.83625 2.97187C3.90557 2.91382 3.98567 2.87001 4.07195 2.84295C4.15822 2.81589 4.24899 2.80612 4.33905 2.81419C4.42912 2.82227 4.5167 2.84803 4.59679 2.89C4.67688 2.93197 4.74791 2.98933 4.8058 3.05879C4.86369 3.12825 4.90731 3.20845 4.93416 3.29479C4.96101 3.38114 4.97057 3.47193 4.96228 3.56197C4.95399 3.65201 4.92802 3.73953 4.88585 3.81952C4.84369 3.89951 4.78616 3.9704 4.71656 4.02812C3.54625 5.00312 2.875 6.44687 2.875 7.98906C2.875 10.8209 5.17406 13.125 8 13.125C10.8259 13.125 13.125 10.8209 13.125 7.98906C13.1249 7.23223 12.9572 6.48482 12.6339 5.80051C12.3107 5.11619 11.8399 4.51197 11.2553 4.03125C11.1829 3.97472 11.1226 3.90426 11.0778 3.82402C11.0331 3.74378 11.0049 3.65539 10.995 3.56408C10.985 3.47276 10.9934 3.38038 11.0197 3.29237C11.046 3.20436 11.0897 3.12252 11.1482 3.05168C11.2067 2.98084 11.2787 2.92243 11.3602 2.87992C11.4416 2.8374 11.5307 2.81163 11.6223 2.80413C11.7138 2.79664 11.806 2.80756 11.8932 2.83627C11.9805 2.86497 12.0611 2.91087 12.1303 2.97125C12.8713 3.58073 13.4682 4.3468 13.8779 5.2144C14.2876 6.082 14.5001 7.02958 14.5 7.98906C14.5 11.5791 11.5841 14.5 8 14.5Z"
                  fill="#FF8B7C"
                />
                <path
                  d="M8 8.5C7.81766 8.5 7.6428 8.42757 7.51386 8.29864C7.38493 8.1697 7.3125 7.99484 7.3125 7.8125V2.1875C7.3125 2.00516 7.38493 1.8303 7.51386 1.70136C7.6428 1.57243 7.81766 1.5 8 1.5C8.18234 1.5 8.3572 1.57243 8.48614 1.70136C8.61507 1.8303 8.6875 2.00516 8.6875 2.1875V7.8125C8.6875 7.99484 8.61507 8.1697 8.48614 8.29864C8.3572 8.42757 8.18234 8.5 8 8.5Z"
                  fill="#FF8B7C"
                />
              </svg> */}
              <p className="supportText_medium text-white">Log out</p>
            </button>
          ) : (
            <button
              type="button"
              onClick={signIn}
              className="h-[40px] rounded-2xl bg-secondary-600 flex items-center px-3 py-2 justify-center gap-2"
            >
              <Image src={icons.googleIcon} alt="login" className="w-6 " />
              <p className="supportText_medium text-white">Login</p>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
