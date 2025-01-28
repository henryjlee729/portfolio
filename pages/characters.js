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
                  Meet Henry, the person who made this website! He is a
                  daydreamer who likes to do go to different fantasy worlds when
                  he is not busy with other things.
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Harmon
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-5 aspect-h-3">
                <Image
                  src="/images/lofitea-friends/harmon.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  This is Harmon, a soldier who is a part-time DJ. His favorite
                  activities include travelling, singing, and meditating. Oddily
                  enough, he prefers to not talk to people.
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Aurora
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-5 aspect-h-3">
                <Image
                  src="/images/lofitea-friends/aurora.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  Say hello to Aurora, a spray-painting artists who is very much against capitalism. 
                  She believes in the fundamental idea that all humans are made equal regardless of status.
                  That idea is very funny since she might be a conscious artificial intelligence...
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Orion
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-5 aspect-h-3">
                <Image
                  src="/images/lofitea-friends/orion.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  Orion, this is the world. The world, Orion. A weakened angel
                  with the holy sword whose wings got burned in an unfortunate
                  "accident", he is forever doomed to be the black sheep of the
                  angel world. Interestingly, he hates tomatoes.
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Melody
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-5 aspect-h-3">
                <Image
                  src="/images/lofitea-friends/melody.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  Say hello to Melody, a servant to the Demon King of a faraway
                  land. She ran away from her realm to become an idol, but
                  unfortunately, both the angels and the demons refuse to leave
                  her alone.
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              Cyprus
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-5 aspect-h-3">
                <Image
                  src="/images/lofitea-friends/cyprus.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  Ah, yes. Cyprus, the first of the Wild Duo. He is constantly
                  finding ways to pick a fight with other people while always
                  losing. No matter what he says, he will never, ever get the
                  roadrunner.
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
                  Zzz... Raella, the second of the Wild Duo, is a slacker who 
                  loves to sleep and do nothing. She is like an immovable object. 
                  No matter what you do, nothing can ever wake her up. Not even a car horn. 
                  How odd. She isn't supposed to be sleeping for that long...
                </p>
              </blockquote>
            </div>
          </section>

          <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
              The World of Aionis
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src="/images/lofitea-friends/work-in-progress.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base">
                  This small novel describes the origin story of all of the
                  LofiTea Friends. It is currently in development and will be
                  finished by the end of 2025. Tune in to see the completed
                  project!
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
                  characters (Cyprus and Raella) trying to prevent the
                  destruction of the Realms before it is too late. The story is
                  currently in progress although you can see the completed draft
                  down below. The story is currently over 700 pages and it took
                  two years to complete. It is currently still under
                  development, however.
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