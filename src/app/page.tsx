import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              fill
              alt="heroimage"
              src="https://i.ibb.co.com/bXBJb15/KMSPico-1.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl text-red-500">
              Download Kms pico now
            </h2>

            <p className="mt-4 dark:text-gray-400">
              KMSpico is a powerful tool designed to activate Windows 10 and
              Windows 11 operating systems. It provides a quick and efficient
              method to unlock the full features of your Windows installation.
              With KMSpico, you can easily activate your Windows 10 or Windows
              11 system without the need for a product key or complex activation
              processes. This tool ensures that you have access to all the
              latest updates, security features, and functionalities that
              Microsoft offers for their operating systems. Whether you&apos;re
              using Windows 10 or have upgraded to Windows 11, KMSpico offers a
              seamless activation solution to enhance your computing experience.
            </p>
            <p className="mt-4 text-red-500 font-bold text-lg">
              Password is: 12345
            </p>

            <Link
              href="https://drive.google.com/file/d/1UKRz2oOP9dX6qKA9XNaVt55-y5eeGZhm/view?usp=sharing"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Download Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
