import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="prose prose-lg mx-auto max-w-3xl">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mb-4 mt-10 font-serif text-2xl font-semibold text-dark-green md:text-3xl">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-3 mt-8 font-serif text-xl font-semibold text-dark-green">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 leading-relaxed text-dark-green/80">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="mb-4 space-y-2 pl-6 text-dark-green/80">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 space-y-2 pl-6 text-dark-green/80 list-decimal">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-dark-green">
              {children}
            </strong>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-4 border-tan pl-6 italic text-dark-green/70">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-tan underline decoration-tan/30 transition-colors hover:text-tan-dark hover:decoration-tan"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
