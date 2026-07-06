/* eslint-disable react-refresh/only-export-components */
import MapEmbed from "./MapEmbed";

function Paragraph(props: React.ComponentProps<"p">) {
  return <p className="article-p" {...props} />;
}

function HeadingTwo(props: React.ComponentProps<"h2">) {
  return <h2 className="article-section-heading" {...props} />;
}

function BlockQuote(props: React.ComponentProps<"blockquote">) {
  return <blockquote className="article-quote" {...props} />;
}

export const mdxComponents = {
  p: Paragraph,
  h2: HeadingTwo,
  blockquote: BlockQuote,
  MapEmbed,
};
