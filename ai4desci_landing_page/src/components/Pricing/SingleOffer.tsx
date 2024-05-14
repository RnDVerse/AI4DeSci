const checkIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
    <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
  </svg>
);

export default function SingleOffer({ text, status }: any) {
  return (
    <p
      className={`flex items-center text-base ${status === "active" ? "text-dark dark:text-white" : "text-dark-text"}`}
    >
      <span
        className={`inline-block pr-2 ${status === "active" ? "text-[#00CB99]" : ""}`}
      >
        {checkIcon}
      </span>
      {text}
    </p>
  );
}
