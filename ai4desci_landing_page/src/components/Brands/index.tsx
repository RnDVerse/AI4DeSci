import SectionTitle from "../Common/SectionTitle";

export default function Brands() {
  return (
    <section className="pt-14 sm:pt-20 lg:pt-24">
      <div className="px-4 xl:container">
        <SectionTitle
          title="Tech Stack that makes AI4DeSci Infrastructure"
          paragraph="We focus on integrating state-of-the-art modern digital tech stacks that facilitate decentralized AI and Science."
        />
        <div className="border-b pb-24 dark:border-[#2E333D]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <a
                  href="#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="./images/about/akash-red-t.png"
                    alt="image"
                    className="hidden h-10 w-full dark:block"
                  />
                  <img
                    src="./images/about/python_logo.png"
                    alt="image"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                <a
                  href="#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="./images/about/ollama_logo.png"
                    alt="image"
                    className="hidden h-10 w-full dark:block"
                  />
                  <img
                    src="./images/about/streamlit_logo.png"
                    alt="image"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                <a
                  href="#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="./images/about/label_studio_logo.png"
                    alt="image"
                    className="hidden h-10 w-full dark:block"
                  />
                  <img
                    src="./images/about/akash-red-t.png"
                    alt="image"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                <a
                  href="#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="./images/about/streamlit_logo.png"
                    alt="image"
                    className="hidden h-10 w-full dark:block"
                  />
                  <img
                    src="./images/about/jupyter_logo.png"
                    alt="image"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                <a
                  href="#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="./images/about/python_logo.png"
                    alt="image"
                    className="hidden h-10 w-full dark:block"
                  />
                  <img
                    src="./images/about/ollama_logo.png"
                    alt="image"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
