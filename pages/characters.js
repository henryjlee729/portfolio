import {FaBook} from "react-icons/fa";
import Image from 'next/image'
import Head from 'next/head'

const characters = () => {
    return (
      <div className="h-screen mx-5 sm:mx-auto pt-32">
        <Head>
          <title>LofiTea Friends</title>
          <link rel="icon" href="./images/beanie.jpg" />
        </Head>
        <h1 className="font-bold text-3xl text-center">
          Meet the LofiTea Friends!
        </h1>
        <div className="max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-10">
          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Henry
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-5 aspect-h-3">
                <Image
                  src="/images/lofitea-friends/henry.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  Meet Henry, a daydreamer! He doesn't understand why Kirby is pink when
                  he is not busy.
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Kaelen
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-5 aspect-h-3">
                <Image
                  src="/images/lofitea-friends/kaelen.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  This is Kaelen, a former DJ. His favorite
                  activities include travelling, singing, meditating, and not 
                  talking to people.
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Aira
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-5 aspect-h-3">
                <Image
                  src="/images/lofitea-friends/aira.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  Say hello to Aira, a spray-painting artist who believes all living things
                  (including people) should have empathy, even though she is a conscious AI...
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Serion
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-5 aspect-h-3">
                <Image
                  src="/images/lofitea-friends/serion.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  Serion, this is the world. The world, Serion. A weakened
                  angel whose wings got burned in an
                  unfortunate "accident".  Interestingly, he hates tomatoes.
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Melsirius
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-5 aspect-h-3">
                <Image
                  src="/images/lofitea-friends/melsirius.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  Say hello to Melsirius, a servant to the Demon King of a
                  faraway land. She was supposed to be a powerful demon, but 
                  was stuck raising a child named Nirin.
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Luca
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-5 aspect-h-3">
                <Image
                  src="/images/lofitea-friends/luca.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  Ah, yes. Luca, the first of the Wild Duo. He is constantly
                  finding ways to pick a fight with other people if he feels jealous.
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Raella
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-5 aspect-h-3">
                <Image
                  src="/images/lofitea-friends/raella.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  Raella, the second of the Wild Duo, is a slacker who
                  loves to sleep and do nothing. She is like an immovable
                  object. No matter what you do, nothing can ever wake her up.
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Worlds Apart: Fables of Edea
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src="/images/lofitea-friends/worlds-apart.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  This is my large-scale fantasy project! Consisting of five
                  worlds and a long history, Worlds Apart is a tale of two
                  characters (Luca and Raella) trying to prevent the
                  destruction of the Realms before it is too late. The story is
                  currently in progress although you can see the completed draft
                  down below. The story is currently over 700 pages and it took
                  two years to complete. It is currently still under
                  development.
                </p>
                <div className="flex pt-8 space-x-4">
                  <div>
                    <a
                      href="https://www.wattpad.com/story/355628801-worlds-apart-fables-of-edea"
                      target="_blank"
                      rel="noopner noreferrer"
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