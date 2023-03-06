import Link from "next/link";
import Image from "next/image";

const MDXComponents = {
  Link,
  Image,
  // p: (props) => (
  //   <p
  //     className="my-4 leading-7 last:mb-0 text-zinc-700 dark:text-zinc-300 md:my-5"
  //     {...props}
  //   />
  // ),
  // a: (props) => (
  //   <a
  //     className="underline underline-offset-2 decoration-zinc-400 decoration-2 transition-colors hover:decoration-zinc-500"
  //     {...props}
  //   />
  // ),
  // strong: (props) => <strong className="" {...props} />,
  // em: (props) => <em className="" {...props} />,
  h1: (props) => <h1 className="dark:text-zinc-100" {...props} />,
  h2: (props) => <h2 className="dark:text-zinc-100" {...props} />,
  h3: (props) => <h3 className="dark:text-zinc-100" {...props} />,
  h4: (props) => <h4 className="dark:text-zinc-100" {...props} />,
  p: (props) => <p className="dark:text-zinc-400" {...props} />,
  a: (props) => (
    <a
      className="decoration-zinc-400 decoration-2 underline-offset-2 dark:text-zinc-400 dark:decoration-zinc-700"
      {...props}
    />
  ),
  strong: (props) => <strong className="dark:text-zinc-300" {...props} />,
  ul: (props) => (
    <ul className="dark:text-zinc-400 dark:marker:text-zinc-600" {...props} />
  ),
  ol: (props) => (
    <ol className="dark:text-zinc-400 dark:marker:text-zinc-500" {...props} />
  ),
  pre: (props) => <pre className="p-0" {...props} />,
  code: (props) => <code className="dark:text-zinc-300" {...props} />,
};

export default MDXComponents;
