import algoliasearch from "algoliasearch";
import { useEffect } from "react";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch";
import CustomHits from "./CustomHits";

const APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_PROJECT_ID as string;
const API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string;
const INDEX = process.env.NEXT_PUBLIC_ALGOLIA_INDEX as string;

const algoliaClient = algoliasearch(APP_ID, API_KEY);

type Props = {
  searchModalOpen: boolean;
  setSearchModalOpen: (value: boolean) => void;
};

const GlobalSearchModal = (props: Props) => {
  const { searchModalOpen, setSearchModalOpen } = props;

  useEffect(() => {
    // closing modal while clicking outside
    function handleClickOutside(event: any) {
      if (!event.target.closest(".modal-content")) {
        setSearchModalOpen(false);
      }
    }

    if (searchModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchModalOpen, setSearchModalOpen]);

  return (
    <>
      {searchModalOpen && (
        <div className="fixed left-0 top-0 z-[99999] flex h-full min-h-screen w-full justify-center bg-[rgba(0,0,0,0.25)] px-4 py-[12vh] backdrop-blur-sm">
          <div className="modal-content relative w-full max-w-[600px] overflow-y-auto rounded-xl bg-white dark:bg-dark">
            <div>
              <InstantSearch
                // insights={false}
                searchClient={algoliaClient}
                indexName={INDEX}
              >
                <SearchBox
                  placeholder="Search Entire Site | Products, Docs, Pages ..."
                  classNames={{
                    form: "sticky top-0 z-[999] border-b border-stroke dark:border-white/20 dark:bg-black",
                    input:
                      "h-[74px] w-full rounded-t-lg pl-[60px] pr-5 text-dark outline-none dark:bg-dark dark:text-white",
                    submitIcon:
                      "absolute left-0 top-0 flex h-[74px] w-[60px] p-5 items-center justify-center text-dark dark:text-white",
                    reset: "hidden",
                    resetIcon: "hidden",
                    loadingIndicator: "hidden",
                    loadingIcon: "hidden",
                  }}
                />

                <Hits
                  hitComponent={(props) => (
                    <CustomHits
                      {...props}
                      setSearchModalOpen={setSearchModalOpen}
                    />
                  )}
                />
              </InstantSearch>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GlobalSearchModal;
