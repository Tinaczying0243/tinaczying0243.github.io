interface MapEmbedProps {
  title?: string;
  src: string;
}

function resolveAssetPath(src: string): string {
  if (/^https?:\/\//i.test(src)) {
    return src;
  }

  const normalized = src.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
}

export default function MapEmbed({ title, src }: MapEmbedProps) {
  return (
    <div className="article-map-embed">
      {title && <h3 className="article-map-embed__title">{title}</h3>}
      <iframe
        src={resolveAssetPath(src)}
        title={title ?? "Article map"}
        className="article-map-embed__iframe"
        loading="lazy"
      />
    </div>
  );
}
