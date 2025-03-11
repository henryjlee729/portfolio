import { FiGithub } from "react-icons/fi";
// import {HiOutlineExternalLink} from 'react-icons/hi'
import Image from "next/image";
import Head from "next/head";

const projects = () => {
  return (
    <div className="h-screen mx-5 sm:mx-auto pt-32">
      <Head>
        <title>Projects</title>
      </Head>
      <h1 className="font-bold text-3xl text-center"></h1>
      <div className="max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-28">
        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            Financial Data Converter
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-5 aspect-h-3">
              <Image
                src="/images/echopath/menu2.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                This project involved building a financial dashboard for the
                company leadership that takes in CSV files (and Excel files for
                certain options) and appended them to an Excel file. There are four types of 
                data being imported: historical data, balance data, projected data, 
                and actual data. This project can help keep track of
                income and expense streams to ensure that the company systems
                are working as intended.
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  Python, PyCharm, Tkinter, Git, GitHub
                </p>
              </cite>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            Beanie Pomodoro
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src="/images/beanie-pomodoro/work.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                Beanie Pomodoro is a custom Pomodoro timer I created after
                switching to Firefox. Built with HTML, CSS, and JavaScript, it
                features adjustable work/rest intervals, a stats page, and
                personalized artwork. The extension is available for both
                Firefox and Chrome, with ongoing improvements.
                <br></br>
                <br></br>
                <a
                  className="text-blue-500"
                  href="https://addons.mozilla.org/en-US/firefox/addon/beanie-pomodoro/"
                >
                  {" "}
                  Visit Firefox Extension.
                </a>
                <br></br>
                <a
                  className="text-blue-500"
                  href="https://chromewebstore.google.com/detail/beanie-pomodoro/gaaikgggdnjcolgjbekolakckfknpcop"
                >
                  {" "}
                  Visit Chrome Extension.
                </a>
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  JavaScript, HTML, CSS, Bootstrap
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div>
                  <a
                    href="https://github.com/LofiTea/beanie-pomodoro"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <FiGithub size="30px" />
                  </a>
                </div>
                {/* <div> */}
                {/*     <HiOutlineExternalLink size='30px'/> */}
                {/* </div> */}
              </div>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            Spring 2024 Data Mine Project
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-5 aspect-h-3">
              <Image
                src="/images/wikimedia/wikimedia.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                The Wikimedia Corporate Partners Project involved identifying
                data mismatches in Wikidata using Python. I compared Wikidata
                entries with external sources like MusicBrainz and found over
                900 mismatches, focusing on attributes like dates of birth and
                death. This project gave me practical experience in data
                analysis, coding, and collaboration.
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  Python, SPARQL, Jupyter, Visual Studio Code
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div>
                  <a
                    href="https://github.com/LofiTea/Wikidata-Mismatches"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <FiGithub size="30px" />
                  </a>
                </div>
                {/* <div> */}
                {/*     <HiOutlineExternalLink size='30px'/> */}
                {/* </div> */}
              </div>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            Tickets@Purdue
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-5 aspect-h-3">
              <Image
                src="/images/tickets-at-purdue/tickets-at-purdue.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                Tickets@Purdue is a Java-based marketplace project created
                during CS 18000 at Purdue. It allows users to create accounts as
                buyers or sellers, with buyers able to purchase tickets and
                sellers managing listings. The platform includes features like
                ticket sorting, shopping cart management, and viewing
                statistics. The project demonstrates key concepts in
                concurrency, server-client interactions, and GUI development.
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  Java, IntelliJ
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div>
                  <a
                    href="https://github.com/LofiTea/TicketsAtPurdue"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <FiGithub size="30px" />
                  </a>
                </div>
                {/* <div> */}
                {/*     <HiOutlineExternalLink size='30px'/> */}
                {/* </div> */}
              </div>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
};

export default projects;