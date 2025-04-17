"use client";

import MagicButton from '@/components/ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { AtomIcon, Edit, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/moving-border";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SignInButton, useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import Link from 'next/link';

function Hero() {
  const { isSignedIn } = useUser();
  const path = usePathname();

  useEffect(() => {
    console.log("Current path:", path);
  }, [path]);

  return (
    <section>
      {/* Hero Section */}
      <div className="mx-auto max-w-screen-xl px-4 pt-32 lg:flex bg-grid-pattern">
        <div className="text-center mx-auto">
          <TextGenerateEffect
            words="Create Your Form With Artificial Intelligence"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          />

          <p className="mt-4 text-gray-500 sm:text-xl">
            Quickly generate smart, customizable forms with just a topic using our AI-powered form builder.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* Authenticated / Non-authenticated CTA */}
            {isSignedIn ? (
              <Link href="/dashboard" passHref>
                <Button
                  duration={Math.floor(Math.random() * 1000) + 1000}
                  borderRadius="1.95rem"
                  style={{ borderRadius: `calc(1.75rem * 0.96)` }}
                  className="rounded px-12 py-3 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow hover:opacity-90 focus:outline-none focus:ring active:opacity-75"
                >
                  Create Form
                </Button>
              </Link>
            ) : (
              <SignInButton>
                <Button
                  duration={Math.floor(Math.random() * 1000) + 1000}
                  borderRadius="1.95rem"
                  style={{ borderRadius: `calc(1.75rem * 0.96)` }}
                  className="rounded px-12 py-3 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow hover:opacity-90 focus:outline-none focus:ring active:opacity-75"
                >
                  Create Form
                </Button>
              </SignInButton>
            )}

            {/* Learn More CTA */}
            <Link href="#how-it-works" passHref>
              <Button
                duration={Math.floor(Math.random() * 1000) + 1000}
                borderRadius="1.95rem"
                style={{ borderRadius: `calc(1.75rem * 0.96)` }}
                className="rounded px-12 py-3 text-sm font-medium text-primary border border-primary shadow hover:text-purple-700 focus:outline-none focus:ring active:text-purple-500"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-grid-pattern py-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-gray-500">
              Turn your ideas into interactive forms in seconds. Share and manage responses effortlessly with AI-driven form creation.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/20 hover:shadow-pink-500/20">
              <AtomIcon className="h-8 w-8" />
              <h3 className="mt-4 text-xl font-bold text-black">Write a Prompt</h3>
              <p className="mt-1 text-sm text-gray-600">
                Describe your form's purpose and let AI instantly create a ready-to-use form tailored for you.
              </p>
            </div>

            {/* Step 2 */}
            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/20 hover:shadow-pink-500/20">
              <Edit className="h-8 w-8" />
              <h3 className="mt-4 text-xl font-bold text-black">Edit & Customize</h3>
              <p className="mt-1 text-sm text-gray-600">
                Easily adjust your form by adding, removing, or rearranging fields to match your needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/20 hover:shadow-pink-500/20">
              <Share2 className="h-8 w-8" />
              <h3 className="mt-4 text-xl font-bold text-black">Share & Collect</h3>
              <p className="mt-1 text-sm text-gray-600">
                Share your form via a unique link and start collecting and analyzing responses instantly.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <Link href={isSignedIn ? "/dashboard" : "/sign-in"} passHref>
              <MagicButton
                otherClasses="border-2 border-violet-500"
                title="Get Started Today"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Hero;
