export default function CommonCard({ children }: any) {
  return (
    <div className="mx-auto w-full rounded-xl border border-stroke bg-stroke/5 px-6 py-10 dark:border-transparent dark:bg-[#1D232D] sm:p-[70px]">
      {children}
    </div>
  );
}
