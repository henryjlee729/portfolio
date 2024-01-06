import { motion } from "framer-motion";
import Skills from "../components/Skills";
import Head from "next/head";

const About = () => {
  return (
    <div className="h-screen lg:pl-20 lg:pr-32">
      <Head>
        <link rel='icon' href='/LofiTea.ico' />
        <title>About</title>
      </Head>
      <div className="flex justify-between md:mx-20 md:pt-32 pt-28">
        <div className="flex flex-col md:ml-20 px-10 mt-10">
          <div className="flex flex-col md:flex-row">
            <div className=" md:px-8 ">
              <motion.div className="md:w-96"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                    },
                  },
                }}
              >
                <h1 className="text-3xl font-bold sm:text-4xl mb-8">
                  Hello, I&#39;m <span className="text-blue-500">Henry</span>.
                </h1>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 1,
                    },
                  },
                }}
              >
                <h2 className="font-bold text-3xl text-left mb-5">
                  I&#39;m a
                  <span className="text-blue-500"> Software Developer</span> with a
                  passion for
                  <span className="text-blue-500"> Computers</span>.
                </h2>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 1.6,
                  },
                },
              }}
            >
              <p className="text-left font-normal mb-5 flex-wrap">
                I'm a student attending Purdue University pursuing a Bachelor of Science in
                Computer Science. I am interested in software development and computer engineering.</p>
              <p className="text-left font-normal mb-5 flex-wrap"></p>
              <p className="text-left font-normal mb-5 flex-wrap">
                I'm a storyteller. Storytelling means communicating ideas, solving problems, and
                structuring information and insights. Storytelling is also the best way to people
                understand ideas and the process to solve problems.
              </p>
              <p className="text-left font-normal mb-5 flex-wrap"></p>
              <p className="text-left font-normal mb-5 flex-wrap">
                I am well-versed in several programming languages, including Java, R, Python, HTML, CSS, and Javascript.
                I am also familiar with different developer frameworks, such as Git and React.
              </p>
              <p className="text-left font-normal mb-5 flex-wrap"></p>
              <p className="text-left font-normal mb-5 flex-wrap">
                I am an excellent collaborator, a dedicated person, and a quick learner.  I adapt to any environment
                that I am in and I aim to do my best in anything that I do.
                This website template was made by <a
                  href="https://github.com/prasad-chavan1"
                  className="underline text-blue-500"
                >Prasad Ashok Chavan</a>.
              </p>
            </motion.div>
          </div>
          <div className="text-bold text-3xl mt-10">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
