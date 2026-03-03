import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export  function MarkdownText({ content }: { content: string }) {
  return (
    <section className="rich-text py-6 ">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </section>
  );
}
