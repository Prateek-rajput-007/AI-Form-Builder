// "use client";
// // import { Button } from '@/components/ui/button'
// import { Button } from "@/components/ui/moving-border";
// import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
// import Image from 'next/image'
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React, { useEffect } from 'react'

// function Header() {
//   const { user, isSignedIn } = useUser();
//   const path = usePathname();

//   useEffect(() => {
//     console.log(path);
//   }, []);

//   return !path.includes('aiform') && (
//     <div className='p-5 border-b shadow-sm'>
//       <div className='flex items-center justify-between'>
//         <div className='flex items-center gap-3'>
//           <Image src="/logo.png" alt="Logo" width={40} height={40} />
//           <span className='text-xl font-bold'>  <Link href={'/'}>AI-Form Builder</Link></span> {/* Add title here */}
//         </div>
//         {isSignedIn ? (
//           <div className='flex items-center gap-5'>
//             <Link href={'/dashboard'}>
//             <Button duration={Math.floor(Math.random() * 1000) + 1000}
//             borderRadius="1.95rem" style={{
//               //   add these two
//               //   you can generate the color from here https://cssgradient.io/
              
              
//               // add this border radius to make it more rounded so that the moving border is more realistic
//               borderRadius: `calc(1.75rem* 0.96)`,
//             }}
//             className="block w-full rounded px-7 py-3 text-bold font-medium text-gray-700 shadow hover:text-purple-700 focus:outline-none focus:ring active:text-purple-500 sm:w-auto"
//             href="">
//           Dashboard
//         </Button>
        
//             </Link>
//             <UserButton />
//           </div>
//         ) : (
//           <SignInButton>
//             <Button duration={Math.floor(Math.random() * 1000) + 1000}
//             borderRadius="1.95rem" style={{
//               //   add these two
//               //   you can generate the color from here https://cssgradient.io/
//               background: "rgb(2,0,36)",
//               backgroundColor:
//                 "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(15,70,179,1) 35%)",
//               // add this border radius to make it more rounded so that the moving border is more realistic
//               borderRadius: `calc(1.75rem* 0.96)`,
//             }}
//             className="block w-full rounded  px-8 py-3 text-sm font-medium text-white shadow">
//           Get Started
//         </Button>

//             {/* <Button>Get Started</Button> */}
//           </SignInButton>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Header;


"use client";

import { useUser, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

function Header() {
  const { isSignedIn } = useUser();
  const path = usePathname();

  useEffect(() => {
    console.log("Current Path:", path);
  }, []);

  if (path.includes('aiform')) return null;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950/90 backdrop-blur-lg border-b border-gray-800/70 shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 animate-fade-down">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
          <span className="text-white text-2xl md:text-3xl font-bold tracking-tight">
            AI-Form Builder
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4 md:gap-8 text-gray-300 animate-fade-down delay-100">
          {isSignedIn ? (
            <>
              <Link 
                href="/dashboard" 
                className="hover:text-white transition-colors font-semibold text-sm md:text-base"
              >
                Dashboard
              </Link>
              <div className="flex items-center">
                <UserButton afterSignOutUrl="/" />
              </div>
            </>
          ) : (
            <SignInButton>
              <div className="bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-2 rounded-full font-semibold text-sm md:text-base text-white cursor-pointer shadow-md hover:shadow-lg">
                Sign In
              </div>
            </SignInButton>
          )}
        </div>

      </div>
    </header>
  );
}

export default Header;

