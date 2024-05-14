export default function BlogComment() {
  return (
    <div className="mx-auto max-w-[920px]">
      <h3 className="mb-14 font-heading text-3xl font-medium text-dark dark:text-white md:text-[40px]">
        Leave a comment
      </h3>
      <form>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/3">
            <div className="mb-12">
              <input
                type="text"
                name="name"
                id="name"
                placeholder=" Name"
                className="w-full border-b bg-transparent py-5 text-base text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
              />
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/3">
            <div className="mb-12">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email "
                className="w-full border-b bg-transparent py-5 text-base text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
              />
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/3">
            <div className="mb-12">
              <input
                type="text"
                name="website"
                id="website"
                placeholder="Website "
                className="w-full border-b bg-transparent py-5 text-base text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
              />
            </div>
          </div>

          <div className="w-full px-4">
            <div className="mb-10">
              <textarea
                rows={4}
                name="message"
                id="message"
                placeholder="Type Message"
                className="w-full resize-none border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
              ></textarea>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="mb-12">
              <label
                htmlFor="supportCheckbox"
                className="flex cursor-pointer select-none text-dark-text hover:text-primary"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="supportCheckbox"
                    className="sr-only"
                  />
                  <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border dark:border-[#414652]">
                    <span className="opacity-0">
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        className="stroke-current"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          strokeWidth="0.4"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                I have read the terms of the Service & I accept Privacy Policy
              </label>
            </div>
          </div>

          <div className="w-full px-4">
            <button className="flex items-center justify-center rounded bg-primary px-8 py-[14px] font-heading text-base text-white hover:bg-opacity-90">
              Submit Comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
