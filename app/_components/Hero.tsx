// "use client";

// import MagicButton from '@/components/ui/MagicButton';
// import { FaLocationArrow } from 'react-icons/fa';
// import { AtomIcon, Edit, Share2 } from 'lucide-react';
// import { Button } from "@/components/ui/moving-border";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import { SignInButton, useUser } from '@clerk/nextjs';
// import { usePathname } from 'next/navigation';
// import React, { useEffect } from 'react';
// import Link from 'next/link';

// function Hero() {
//   const { isSignedIn } = useUser();
//   const path = usePathname();

//   useEffect(() => {
//     console.log("Current path:", path);
//   }, [path]);

//   return (
//     <>
//       <section className="relative">
//         <div className="mx-auto max-w-screen-xl z-30 px-4 pt-32 lg:flex bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
//           <div className="mx-auto text-center">
//             <TextGenerateEffect
//               words="Create Your Form With Artificial Intelligence"
//               className="text-center text-[40px] md:text-5xl lg:text-6xl"
//             />

//             <p className="mt-4 sm:text-xl text-gray-500">
//               Create your form with our AI powered form builder. With just a topic, our AI will generate a form for you to use.
//             </p>

//              <div className="mt-8 flex flex-wrap justify-center gap-4">
//             {/* Authenticated / Non-authenticated CTA */}
//             {isSignedIn ? (
//               <Link href="/dashboard" passHref>
//                  <Button
//                  duration={Math.floor(Math.random() * 1000) + 1000}
//             borderRadius="1.95rem" style={{
//               //   add these two
//               //   you can generate the color from here https://cssgradient.io/
//               background: "rgb(2,0,36)",
//               backgroundColor:
//                 "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(15,70,179,1) 35%)",
//               // add this border radius to make it more rounded so that the moving border is more realistic
//               borderRadius: `calc(1.75rem* 0.96)`,
//             }}
//             className="block w-full rounded  px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto">
//                   Create Form
//                 </Button>
//               </Link>
//             ) : (
//               <SignInButton>
//                   <Button
//                  duration={Math.floor(Math.random() * 1000) + 1000}
//             borderRadius="1.95rem" style={{
//               //   add these two
//               //   you can generate the color from here https://cssgradient.io/
//               background: "rgb(2,0,36)",
//               backgroundColor:
//                 "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(15,70,179,1) 35%)",
//               // add this border radius to make it more rounded so that the moving border is more realistic
//               borderRadius: `calc(1.75rem* 0.96)`,
//             }}
//             className="block w-full rounded  px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto">
//                   Create Form
//                 </Button>
//               </SignInButton>
//             )}

//               <a href="#how-it-works">
//                 <Button
//                   duration={Math.floor(Math.random() * 1000) + 1000}
//                   borderRadius="1.95rem"
//                   style={{ borderRadius: `calc(1.75rem * 0.96)` }}
//                   className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-purple-700 focus:outline-none focus:ring active:text-purple-500 sm:w-auto"
//                 >
//                   Learn More
//                 </Button>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* HOW IT WORKS SECTION */}
//         <section id="how-it-works" className="bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
//           <div className="mx-auto max-w-screen-xl px-4 py-56">
//             <div className="mx-auto max-w-lg text-center">
//               <h2 className="text-3xl font-bold sm:text-4xl">How it Works</h2>
//               <p className="mt-4 text-gray-500">
//                 Our SaaS app lets you quickly create forms from any prompt, share them via a unique link, and securely save all responses in the database for easy tracking and analysis.
//               </p>
//             </div>

//             <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//               <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
//                 <AtomIcon className="h-8 w-8" />
//                 <h2 className="mt-4 text-xl font-bold text-black">Write prompt for your form</h2>
//                 <p className="mt-1 text-sm text-gray-600">
//                   Input your prompt, and our AI-powered tool creates a fully customizable form tailored to your needs.
//                 </p>
//               </div>

//               <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
//                 <Edit className="h-8 w-8" />
//                 <h2 className="mt-4 text-xl font-bold text-black">Edit Your form</h2>
//                <p className="mt-1 text-sm text-gray-600">
//   Easily edit your form to include additional questions, change the order of questions, or adjust the form&apos;s appearance.
// </p>
//               </div>

//               <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
//                 <Share2 className="h-8 w-8" />
//                 <h2 className="mt-4 text-xl font-bold text-black">Share & Start Accepting Responses</h2>
//                 <p className="mt-1 text-sm text-gray-600">
//                   Share your form with a unique link, and start collecting responses in real-time. Easily track and analyze responses.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-12 text-center">
//               <Link href="/dashboard">
//                 <MagicButton
//                   otherClasses="border-2 border-violet-500"
//                   title="Get Started Today"
//                   icon={<FaLocationArrow />}
//                   position="right"
//                 />
//               </Link>
//             </div>
//           </div>
//         </section>
//       </section>
//     </>
//   );
// }

// export default Hero;


"use client";

import { useUser, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AtomIcon, Edit, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

function Hero() {
  const { isSignedIn } = useUser();
  const path = usePathname();

  useEffect(() => {
    console.log("Path:", path);
  }, [path]);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const blobMotion = {
    animate: {
      y: [0, 20, 0],
      transition: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
    },
  };

  return (
    <motion.section
      className="relative flex flex-col justify-start items-center px-6 md:px-12 lg:px-20 bg-gray-950 text-white overflow-hidden pt-24 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {/* Decorative Blobs with Parallax */}
      <motion.div
        className="absolute top-[-100px] right-[-100px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-600 rounded-full blur-[180px] opacity-30"
        variants={fadeInUp}
        animate="animate"
        variants={blobMotion}
      ></motion.div>
      <motion.div
        className="absolute bottom-[-100px] left-[-100px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-pink-500 rounded-full blur-[180px] opacity-30"
        variants={fadeInUp}
        animate="animate"
        variants={blobMotion}
      ></motion.div>

      {/* Main Hero Content */}
      <motion.div
        className="z-10 w-full max-w-5xl text-center pt-16 md:pt-20"
        variants={fadeInUp}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          The Future of Form Creation is Here ✨
        </h1>
        <p className="text-md md:text-xl lg:text-2xl text-gray-400 mb-10">
          Build smart, responsive forms using AI in seconds. <br /> Focus on your ideas — we'll handle the forms.
        </p>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          variants={stagger}
        >
          {isSignedIn ? (
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
              <Link
                href="/dashboard"
                className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-full text-lg font-semibold"
              >
                Open Dashboard
              </Link>
            </motion.div>
          ) : (
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
              <SignInButton>
                <div className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-full text-lg font-semibold cursor-pointer">
                  Start Free
                </div>
              </SignInButton>
            </motion.div>
          )}

          <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
            <Link
              href="#how-it-works"
              className="border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition px-8 py-4 rounded-full text-lg font-semibold"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* --- Extra Space between sections --- */}
      <div className="h-28 md:h-32 lg:h-40"></div>

      {/* How it Works Section */}
      <motion.div
        id="how-it-works"
        className="z-10 w-full py-16 md:py-24"
        variants={stagger}
      >
        <div className="max-w-6xl mx-auto text-center px-4">
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-14"
            variants={fadeInUp}
          >
            How to Generate Your First Form
          </motion.h2>

          <motion.div
            className="grid gap-10 md:grid-cols-3"
            variants={stagger}
          >
            {/* Step 1 */}
            <motion.div
              className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition flex flex-col items-center text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-purple-600 p-4 rounded-full mb-4">
                <AtomIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Sign Up or Sign In</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Create your free account using Google, GitHub, or Email. Your journey starts with a single click.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition flex flex-col items-center text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-purple-600 p-4 rounded-full mb-4">
                <Edit className="h-8 w-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Describe Your Form</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Just type in what you need — like “Event Registration Form” — and let our AI build it instantly!
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition flex flex-col items-center text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-purple-600 p-4 rounded-full mb-4">
                <Share2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Customize & Publish</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Fine-tune your form with an easy editor. Then publish or embed it anywhere you want.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Badge */}
      <motion.div
        className="mt-16 mb-10 text-center text-gray-400 text-xs md:text-sm"
        variants={fadeInUp}
      >
        Trusted by 10,000+ developers and businesses worldwide 🌎
      </motion.div>
    </motion.section>
  );
}

export default Hero;
