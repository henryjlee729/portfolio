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
            Ticket Search Utility
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-5 aspect-h-3">
              <Image
                src="/images/ticket-search/ticket-search-2.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                The Ticket Search Utility is a specialized application designed
                to query a SQL database populated with ConnectWise ticket data
                obtained via the ConnectWise API. It performs full-text searches
                on ticket notes to identify entries containing a specified query
                string and supports advanced filtering parameters, such as
                author attribution and resolution status. The utility leverages
                indexed database fields to optimize query performance, ensuring
                efficient retrieval even with large ticket datasets. This tool
                is intended to streamline analysis and troubleshooting workflows
                by enabling precise, configurable searches across historical
                ticket records.
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  Python, HTML, CSS, JavaScript, Flask, SQL, Databases
                </p>
              </cite>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            Kirby's Flapventure
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-5 aspect-h-3">
              <Image
                src="/images/kirby-flapventure/kirby.gif"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                Kirby's Flapventure is a 2D game developed in Unity, inspired by
                the mechanics of Flappy Bird and featuring custom-designed
                assets based on Kirby. This project combines hand-drawn sprite
                animation, parallax background design, and physics-based
                gameplay implemented in C#. Core components include custom
                scripts for player control, obstacle spawning, and game state
                management.
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  Unity, Game Physics, C#, Animation, Game Development
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div>
                  <a
                    href="https://github.com/henryjlee729/kirby-flapventure"
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
            Digit Classifier
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-5 aspect-h-3">
              <Image
                src="/images/digit-classifier/mnist.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                Digit Classifier focused onhandwritten digit recognition using
                the MNIST dataset. Using Python, TensorFlow, and Jupyter, the
                project involves constructing a convolutional neural network
                (CNN) to classify digits. The workflow includes data
                preprocessing, model training and evaluation, and performance
                visualization. A Flask-based web application was also developed
                to demonstrate the model's capabilities in real-time.
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  Python, Neural Networks, MNIST, Tensorflow, Jupyter, Flask
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div>
                  <a
                    href="https://github.com/henryjlee729/digit-classifier"
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
            Financial Data Converter
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-5 aspect-h-3">
              <Image
                src="/images/data-converter/menu2.png"
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                The Financial Data Converter involved building a financial
                dashboard for the company leadership that takes in CSV files
                (and Excel files for certain options) and appended them to an
                Excel file. There are four types of data being imported:
                historical data, balance data, projected data, and actual data.
                This project can help keep track of income and expense streams
                to ensure that the company systems are working as intended.
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
            Wikidata Mismatches
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
                    href="https://github.com/henryjlee729/Wikidata-Mismatches"
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
                    href="https://github.com/henryjlee729/TicketsAtPurdue"
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