import CodeWithCopy from "@/components/Common/CodeWithCopy";
import config from "@/sanity/config/client-config";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";

// Barebones lazy-loaded image component
const SampleImageComponent = (props: any) => {
  const { value, isInline } = props;

  const { width, height } = getImageDimensions(value);

  return (
    <Image
      src={urlBuilder(config as any)
        .image(value)
        .fit("max")
        .auto("format")
        .url()}
      width={width}
      height={height}
      alt={value?.attribution || "blog image"}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

const CodeComponent = (props: any) => {
  if (props?.value?.code) {
    return (
      <div className="relative">
        <CodeWithCopy code={props?.value} />
      </div>
    );
  }
};

const TableComponent = (props: any) => {
  return (
    <>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          {props?.value?.rows?.map((row: any, i: any) => {
            return (
              <tr
                key={i}
                className="border-body-color text-body-color dark:border-dark-stroke odd:bg-[#F3F6FF] odd:text-dark first-of-type:border-t dark:odd:bg-white/10 dark:odd:text-white"
              >
                {row?.cells?.map((cell: any, i: any) => (
                  <td
                    key={i}
                    className="border-body-color dark:border-dark-stroke dark:first-of-type:bg-tg-dark-gray max-w-[160px] border-b border-l px-2 py-5 text-center text-base font-medium first-of-type:bg-yellow-100 first-of-type:text-dark last-of-type:border-r dark:first-of-type:text-white"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

const myPortableTextComponents = {
  types: {
    image: SampleImageComponent,

    Code: CodeComponent,

    table: TableComponent,
  },

  marks: {
    link: ({ value, children }: any) => {
      if (value?.blank === true) {
        return (
          <a
            href={value?.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={
            value?.href?.toString()?.startsWith("/")
              ? `${value?.href}`
              : `/${value?.href}`
          }
        >
          {children}
        </Link>
      );
    },
  },
};

const RenderBodyContent = ({ post }: any) => {
  return (
    <>
      <PortableText value={post?.body} components={myPortableTextComponents} />
    </>
  );
};

export default RenderBodyContent;
