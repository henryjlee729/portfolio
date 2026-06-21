import { FiGithub } from "react-icons/fi";
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
            Shape Synthesis
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="relative aspect-[5/3]">
              <Image
                src="/images/shape-synthesis/menu.png"
                fill
                style={{ objectFit: "contain" }}
                alt=""
                unoptimized
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                Shape Synthesis is a machine learning and computer graphics
                project that generates new 3D chair models using a Variational
                Autoencoder (VAE). The generated point clouds are processed and
                reconstructed into 3D meshes, which can then be explored in an
                interactive OpenGL viewer. The project combines AI-driven shape
                generation with traditional graphics techniques to create and
                visualize unique 3D objects in real time.
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  Python, OpenGL, Variational Autoencoders, Computer Graphics, 3D
                  Modeling
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div>
                  <a
                    href="https://github.com/henryjlee729/shape-synthesis"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <FiGithub size="30px" />
                  </a>
                </div>
              </div>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            HTTP Web Server
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="relative aspect-[5/3]">
              <Image
                src="/images/web-server/server.png"
                fill
                style={{ objectFit: "contain" }}
                alt=""
                unoptimized
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                Developed a multithreaded HTTP/1.1 web server in C and C++ for
                CS 25200: Systems Programming. The server supports static file
                serving, Basic HTTP Authentication, multiple concurrency models,
                dynamic directory browsing, CGI execution, request logging, and
                server statistics. The project provided hands-on experience with
                sockets, networking protocols, process management, threading,
                synchronization, and server-side systems programming. scripts
                for player control, obstacle spawning, and game state
                management.
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  C/C++, Networking, HTTP, Multithreading, CGI, Systems
                  Programming
                </p>
              </cite>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            Custom Shell
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="relative aspect-[5/3]">
              <Image
                src="/images/shell/shell.png"
                fill
                style={{ objectFit: "contain" }}
                unoptimized
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                Developed a Unix shell in C++ for CS 25200: Systems Programming
                that supports command execution, pipelines, redirection,
                background jobs, signal handling, built-in commands, wildcard
                expansion, subshells, and command history. The project leveraged
                Flex and Bison for parsing and provided hands-on experience with
                process management, inter-process communication, file
                descriptors, and operating-system internals.
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  C/C++, Operating Systems, Shell, Lex, Yacc, Process Management
                </p>
              </cite>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            Custom Memory Allocator
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="relative aspect-[5/3]">
              <Image
                src="/images/memory-allocator/title.png"
                fill
                style={{ objectFit: "contain" }}
                unoptimized
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                Completed as part of CS 25200: Systems Programming, this project
                involved implementing a custom memory allocator similar to
                malloc in C. The allocator manages heap memory using free lists,
                boundary tags, block splitting, and coalescing techniques to
                efficiently allocate and reclaim memory while minimizing
                fragmentation. It provided hands-on experience with low-level
                memory management, pointer arithmetic, and systems programming
                concepts.
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  C/C++, Systems Programming, Memory Management, Malloc, Data
                  Structures
                </p>
              </cite>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            Ticket Search Utility
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="relative aspect-[5/3]">
              <Image
                src="/images/ticket-search/ticket-search-2.png"
                fill
                style={{ objectFit: "contain" }}
                unoptimized
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                The Ticket Search Utility enables fast, configurable searches
                across ConnectWise ticket data by performing full-text queries
                on SQL databases populated via the ConnectWise API. It supports
                filters such as author and resolution status, and uses indexed
                fields to maintain efficient performance on large datasets,
                streamlining analysis and troubleshooting workflows.
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
            <div className="relative aspect-[5/3]">
              <Image
                src="/images/kirby-flapventure/kirby.gif"
                fill
                style={{ objectFit: "contain" }}
                unoptimized
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
              </div>
            </blockquote>
          </div>
        </section>
        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            Digit Classifier
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="relative aspect-[5/3]">
              <Image
                src="/images/digit-classifier/mnist.png"
                fill
                style={{ objectFit: "contain" }}
                unoptimized
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
              </div>
            </blockquote>
          </div>
        </section>
        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            Financial Data Converter
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="relative aspect-[5/3]">
              <Image
                src="/images/data-converter/menu2.png"
                fill
                style={{ objectFit: "contain" }}
                unoptimized
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
              <div className="flex pt-8 space-x-4">
                <div>
                  <a
                    href="https://github.com/henryjlee729/leadership-dashboard"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <FiGithub size="30px" />
                  </a>
                </div>
              </div>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            SimpleC Compiler
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="relative aspect-[5/3]">
              <Image
                src="/images/simplec-compiler/title.png"
                fill
                style={{ objectFit: "contain" }}
                unoptimized
                alt=""
              />
            </div>
            <blockquote className="sm:col-span-2">
              <p className="text-xs md:text-base">
                Completed as part of CS 25000 Computer Architecture at Purdue
                University, this project involved building a compiler for
                SimpleC, a subset of the C programming language. Using Lex and
                Yacc, the compiler translates SimpleC source code into x86-64
                assembly, supporting arithmetic expressions, variables,
                functions, arrays, and control flow constructs such as loops and
                conditionals. The project provided hands-on experience with
                compiler construction, parsing, code generation, and low-level
                computer architecture concepts.
              </p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                  C, Compiler Design, Lex & Yacc, x86-64 Assembly, Computer
                  Architecture
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
            <div className="relative aspect-[5/3]">
              <Image
                src="/images/wikimedia/wikimedia.png"
                fill
                style={{ objectFit: "contain" }}
                unoptimized
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
              </div>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-xl text-blue-500 pb-4">
            Tickets@Purdue
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="relative aspect-[5/3]">
              <Image
                src="/images/tickets-at-purdue/tickets-at-purdue.png"
                fill
                style={{ objectFit: "contain" }}
                unoptimized
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
              </div>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
};

export default projects;