import {FaBook} from "react-icons/fa";
import Image from 'next/image'
import Head from 'next/head'

const characters = () => {
    return (
      <div className="h-screen mx-5 sm:mx-auto pt-32">
        <Head>
          <title>Characters</title>
          <link rel="icon" href="./images/beanie.jpg" />
        </Head>
        <h1 className="font-bold text-3xl text-center">Meet the Friends!</h1>
        <div className="max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-10">
          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Jay
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="relative aspect-[5/3]">
                <Image
                  src="/images/beanie-friends/jay.jpg"
                  fill
                  style={{ objectFit: "contain" }}
                  unoptimized
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  Meet Jay, a daydreamer! He doesn't understand why Kirby is
                  pink when he is not busy.
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Aurora
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="relative aspect-[5/3]">
                <Image
                  src="/images/beanie-friends/aurora.jpg"
                  fill
                  style={{ objectFit: "contain" }}
                  unoptimized
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  Say hello to Aurora, an anime-loving administrator who
                  is busy fangirling over idols whenever she is not busy
                  managing the World Tree.
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Luca
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="relative aspect-[5/3]">
                <Image
                  src="/images/beanie-friends/luca.jpg"
                  fill
                  style={{ objectFit: "contain" }}
                  unoptimized
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  Luca, this is the world. The world, Luca. He has a
                  large sense of justice to help people. Perhaps too much.
                  Interestingly, he hates tomatoes.
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Raella
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="relative aspect-[5/3]">
                <Image
                  src="/images/beanie-friends/raella.jpg"
                  fill
                  style={{ objectFit: "contain" }}
                  unoptimized
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  Say hello to Raella, a tsundere. She claims she hates people
                  but on the inside, she's a giant softie. Be careful, though.
                  Mention anything about technology and she will go ballistic.
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Kai
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="relative aspect-[5/3]">
                <Image
                  src="/images/beanie-friends/kai.jpg"
                  fill
                  style={{ objectFit: "contain" }}
                  unoptimized
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  Ah, yes. Kai, the wanna-be hero. He is constantly
                  finding ways to pick a fight with other people if he feels
                  jealous.
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Rhee
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="relative aspect-[5/3]">
                <Image
                  src="/images/beanie-friends/rhee.jpg"
                  fill
                  style={{ objectFit: "contain" }}
                  alt=""
                  unoptimized
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  Rhee, the lazy one of the group, is a slacker who loves to
                  sleep and do nothing. She is like an immovable object. No
                  matter what you do, nothing can ever wake her up.
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Worlds Apart Tales
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="relative aspect-[5/3]">
                <Image
                  src="/images/beanie-friends/worlds-apart.png"
                  fill
                  style={{ objectFit: "contain" }}
                  alt=""
                  unoptimized
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  This is my large-scale fantasy project! Consisting of five
                  worlds and a long history, Worlds Apart is a tale of four
                  characters trying to prevent the destruction of the Realms
                  before it is too late. This story is still under development.
                </p>
                <div className="flex pt-8 space-x-4">
                  <div>
                    <a
                      href="https://www.wattpad.com/story/355628801-worlds-apart-fables-of-edea"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaBook size="30px" />
                    </a>
                  </div>
                </div>
              </blockquote>
            </div>
          </section>
        </div>
      </div>
    );
}

export default characters