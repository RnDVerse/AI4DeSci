import { SocialLink, Team } from "@/types/team";
import Image from "next/image";

export default function SingleTeam({ team }: { team: Team }) {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
      <div className="group mx-auto mb-10 max-w-[300px] text-center xs:max-w-[370px]">
        <div className="relative mb-8 aspect-[360/370] overflow-hidden rounded">
          <Image src={team?.image} alt={team?.name} fill className="w-full" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="flex items-center justify-center space-x-3">
              {team?.socialLinks.map((social) => (
                <SocialButton key={social?.id} social={social} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-1 font-heading text-xl font-medium text-dark dark:text-white sm:text-2xl">
            {team?.name}
          </h3>
          <p className="font-heading text-base text-dark-text">
            {team?.designation}
          </p>
        </div>
      </div>
    </div>
  );
}

function SocialButton({ social }: { social: SocialLink }) {
  return (
    <a
      href={social?.link}
      aria-label={social?.name}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white border-opacity-10 bg-white bg-opacity-10 text-white backdrop-blur transition hover:border-transparent hover:bg-primary hover:bg-opacity-100"
    >
      {social?.name === "Facebook" && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6667 11.2501H13.75L14.5834 7.91675H11.6667V6.25008C11.6667 5.39175 11.6667 4.58341 13.3334 4.58341H14.5834V1.78341C14.3117 1.74758 13.2859 1.66675 12.2025 1.66675C9.94004 1.66675 8.33337 3.04758 8.33337 5.58341V7.91675H5.83337V11.2501H8.33337V18.3334H11.6667V11.2501Z"
            fill="white"
          />
        </svg>
      )}

      {social?.name === "Twitter" && (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
            fill="currentColor"
          />
        </svg>
      )}

      {social?.name === "Discord" && (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.627 0H3.373C1.51 0 0 1.51 0 3.373V18.627C0 20.49 1.51 22 3.373 22H18.627C20.49 22 22 20.49 22 18.627V3.373C22 1.51 20.49 0 18.627 0ZM14.895 17.097L14.1 16.287C16.214 15.62 16.89 14.41 16.91 14.373C16.303 14.763 15.668 15.078 15.004 15.31C14.808 15.377 14.597 15.392 14.387 15.352C13.914 15.275 13.493 15.023 13.201 14.646C12.74 14.095 12.161 13.742 11.524 13.638C11.201 13.586 10.874 13.608 10.56 13.703C10.202 13.81 9.844 13.928 9.494 14.054C9.273 14.133 9.065 14.238 8.872 14.366C8.408 14.669 7.941 14.98 7.472 15.284C7.387 15.338 7.301 15.396 7.212 15.447C7.066 15.54 6.883 15.561 6.713 15.506C6.043 15.307 5.425 14.95 4.887 14.46C5.039 14.599 5.395 15.023 6.387 15.644C6.21 15.682 5.913 15.755 5.5 15.755C4.548 15.755 3.817 15.019 3.817 14.067C3.817 13.634 3.997 13.229 4.312 12.961C4.112 12.84 3.92 12.693 3.73 12.534C2.927 11.85 2.74 11.623 2.736 11.618C3.19 10.536 3.901 9.579 4.77 8.791C5.408 8.241 6.147 7.837 6.95 7.605C7.302 7.499 7.672 7.453 8.042 7.473C8.597 7.503 9.151 7.56 9.706 7.603C10.23 7.643 10.753 7.672 11.275 7.645C11.524 7.632 11.771 7.616 12.018 7.609C13.057 7.577 14.099 7.655 15.127 7.847C16.016 8.015 16.858 8.39 17.607 8.941C17.697 8.995 18.667 9.64 18.779 11.145C18.77 11.132 17.963 11.91 17.163 12.572C16.556 13.05 16.029 13.611 15.576 14.241C15.747 14.524 15.885 14.82 15.987 15.124C15.815 15.383 15.62 15.628 15.412 15.86C15.249 15.912 15.085 15.98 14.895 17.097Z"
            fill="currentColor"
          />
        </svg>
      )}

      {social?.name === "GitHub" && (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 0C4.92487 0 0 4.92487 0 11C0 15.8549 3.3852 19.9783 7.85127 21.3785C8.42143 21.4558 8.63651 21.0974 8.63651 20.7871V19.1978C5.7253 19.8625 5.01478 17.8782 5.01478 17.8782C4.57887 16.7358 3.96234 16.4937 3.96234 16.4937C3.08779 15.9657 4.02719 15.9753 4.02719 15.9753C4.99599 16.0251 5.53803 16.9523 5.53803 16.9523C6.39648 18.3491 7.79984 17.9348 8.30273 17.6936C8.37403 17.1107 8.59872 16.7294 8.8448 16.4946C6.45503 16.272 3.96667 15.3014 3.96667 10.9071C3.96667 9.69454 4.38744 8.69451 5.06267 7.91857C4.97012 7.67721 4.62979 6.51294 5.15416 5.02067C5.15416 5.02067 6.06157 4.758 8.62199 6.35251C9.49056 6.10447 10.4094 6 11.3285 6C12.2476 6 13.1664 6.10447 14.0349 6.35251C16.5954 4.758 17.5028 5.02067 17.5028 5.02067C18.0272 6.51294 17.6868 7.67721 17.5943 7.91857C18.2695 8.69451 18.6903 9.69454 18.6903 10.9071C18.6903 15.311 16.1986 16.268 13.796 16.4917C14.1257 16.7991 14.3927 17.3285 14.3927 18.1276V20.7871C14.3927 21.0974 14.6078 21.4558 15.178 21.3785C19.6441 19.9783 23.0293 15.8549 23.0293 11C23.0293 4.92487 18.1044 0 11 0Z"
            fill="currentColor"
          />
        </svg>
      )}


      {social?.name === "Linkedin" && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.78328 4.16677C5.78306 4.6088 5.60726 5.03263 5.29454 5.34504C4.98182 5.65744 4.55781 5.83282 4.11578 5.8326C3.67376 5.83238 3.24992 5.65657 2.93752 5.34386C2.62511 5.03114 2.44973 4.60713 2.44995 4.1651C2.45017 3.72307 2.62598 3.29924 2.9387 2.98683C3.25141 2.67443 3.67542 2.49905 4.11745 2.49927C4.55948 2.49949 4.98331 2.6753 5.29572 2.98801C5.60812 3.30073 5.78351 3.72474 5.78328 4.16677ZM5.83328 7.06677H2.49995V17.5001H5.83328V7.06677ZM11.1 7.06677H7.78328V17.5001H11.0666V12.0251C11.0666 8.9751 15.0416 8.69177 15.0416 12.0251V17.5001H18.3333V10.8918C18.3333 5.7501 12.45 5.94177 11.0666 8.46677L11.1 7.06677Z"
            fill="white"
          />
        </svg>
      )}
    </a>
  );
}
