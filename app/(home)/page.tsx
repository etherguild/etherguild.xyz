"use client";

import Image from "next/image";
import Link from "next/link";
import { useNavbar } from "@/app/contexts/navbar-context";
import { useEffect } from "react";
import { FaXTwitter, FaDiscord, FaGithub, FaEnvelope } from "react-icons/fa6";
import { SiFarcaster, SiLinear } from "react-icons/si";

export default function HomePage() {
  const { setShowNavbar } = useNavbar();

  useEffect(() => {
    setShowNavbar(false);
    return () => setShowNavbar(true);
  }, [setShowNavbar]);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Background Container */}
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/image/ether-guild-background-vertical.png"
            alt="Hero background"
            fill
            className="object-cover brightness-[.25]"
            priority
          />
        </div>
        {/* Optional gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-background to-transparent -z-10" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center -mt-20 z-10 px-4 text-center">
          {/* Logo */}
          <div className="w-[85%] sm:w-1/2 max-w-xl mb-8">
            <Image
              src="/image/ether-guild-logo-dark-mode.png"
              alt="Ether Guild Logo Dark Mode"
              width={800}
              height={400}
              className="hidden dark:block w-full h-auto"
              priority
            />
            <Image
              src="/image/ether-guild-logo-light-mode.png"
              alt="Ether Guild Logo Light Mode"
              width={800}
              height={400}
              className="dark:hidden block w-full h-auto"
              priority
            />
          </div>

          {/* Text and CTA */}
          <h2 className="text-5xl sm:text-6xl font-bold text-white mt-8 mb-8 px-4">
            Fund ETH Initiatives
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://www.ethismoney.xyz/"
              className="px-8 py-3 bg-[#A23B23] text-white rounded-lg text-lg font-semibold hover:bg-[#8B3220] transition-colors w-[200px]"
            >
              Donate
            </Link>
            <Link
              href="https://paragraph.xyz/@etherguild"
              className="px-8 py-3 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-[#1F2937] transition-colors w-[200px]"
            >
              Read More
            </Link>
          </div>

          <p className="text-white mt-16 mb-8">
            Looking to volunteer?{" "}
            <Link
              href="https://app.manifold.xyz/c/ether-guild-volunteer"
              className="underline hover:text-gray-300"
            >
              Mint the NFT
            </Link>{" "}
            and{" "}
            <Link href="/discord" className="underline hover:text-gray-300">
              join us
            </Link>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-8 z-10">
          <Link
            href="https://x.com/TheEtherGuild"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={28} />
          </Link>
          <Link
            href="https://discord.gg/9xTd9KfDsC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Discord"
          >
            <FaDiscord size={28} />
          </Link>
          <Link
            href="https://github.com/etherguild"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </Link>
          <Link
            href="https://warpcast.com/etherguild"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="FarCaster"
          >
            <SiFarcaster size={28} />
          </Link>
          <Link
            href="https://linear.app/ether-guild/join/2b32d285d3327e5ac35735e360229360?s=3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Linear"
          >
            <SiLinear size={28} />
          </Link>
          <Link
            href="https://paragraph.com/@etherguild/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Paragraph"
          >
            <FaEnvelope size={28} />
          </Link>
        </div>
      </div>
    </main>
  );
}
