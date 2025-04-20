// "use client";

// import PricingPlan from '@/app/_data/PricingPlan';
// import { useUser } from '@clerk/nextjs';
// import React from 'react';

// function Upgrade() {
//     const { user } = useUser();

//     return (
//         <div className='p-10'>
//             <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
//                     {PricingPlan.map((item, index) => (
//                         <div key={index} className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
//                             <div className="text-center">
//                                 <h2 className="text-lg font-medium text-gray-900">
//                                     {item.duration}
//                                     <span className="sr-only">Plan</span>
//                                 </h2>

//                                 <p className="mt-2 sm:mt-4">
//                                     <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> {item.price}$ </strong>

//                                     <span className="text-sm font-medium text-gray-700">/{item.duration}</span>
//                                 </p>
//                             </div>

//                             <ul className="mt-6 space-y-2">
//                                 <li className="flex items-center gap-1">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         strokeWidth="1.5"
//                                         stroke="currentColor"
//                                         className="size-5 text-indigo-700"
//                                     >
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//                                     </svg>

//                                     <span className="text-gray-700"> Unlimted AI forms </span>
//                                 </li>

//                                 <li className="flex items-center gap-1">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         strokeWidth="1.5"
//                                         stroke="currentColor"
//                                         className="size-5 text-indigo-700"
//                                     >
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//                                     </svg>

//                                     <span className="text-gray-700"> Unlimted User Form Responses </span>
//                                 </li>

//                                 <li className="flex items-center gap-1">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         strokeWidth="1.5"
//                                         stroke="currentColor"
//                                         className="size-5 text-indigo-700"
//                                     >
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//                                     </svg>

//                                     <span className="text-gray-700"> Email support </span>
//                                 </li>
//                             </ul>

//                             <a
//                                 href={user?.primaryEmailAddress?.emailAddress ? `${item.link}?prefilled_email=${user.primaryEmailAddress.emailAddress}` : item.link}
//                                 target='_blank'
//                                 className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
//                             >
//                                 Get Started
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Upgrade;
"use client";

import PricingPlan from '@/app/_data/PricingPlan';
import { useUser } from '@clerk/nextjs';
import React from 'react';

function Upgrade() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-6 sm:p-8 md:p-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          Upgrade Your Plan
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PricingPlan.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-100">
                  {item.duration}
                </h3>
                <p className="mt-4">
                  <strong className="text-4xl font-bold text-white">
                    {item.price}$
                  </strong>
                  <span className="text-sm font-medium text-gray-400">
                    /{item.duration}
                  </span>
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={
                  user?.primaryEmailAddress?.emailAddress
                    ? `${item.link}?prefilled_email=${user.primaryEmailAddress.emailAddress}`
                    : item.link
                }
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block rounded-full bg-indigo-600 px-6 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
