import { useRouter } from "next/router";

export default function ArticlePage() {
  const { query } = useRouter();

  return (
    <div>
      <h1>{query.articleId}</h1>
    </div>
  );
}
