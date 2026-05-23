import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
}: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Description Meta Tag
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement("meta");
      descMeta.setAttribute("name", "description");
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute("content", description);

    // 3. Update Keywords Meta Tag
    if (keywords) {
      let keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (!keywordsMeta) {
        keywordsMeta = document.createElement("meta");
        keywordsMeta.setAttribute("name", "keywords");
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute("content", keywords);
    }

    // 4. Update Canonical URL Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical || window.location.href);

    // 5. Helper function for Open Graph tags
    const updateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Update Open Graph Metadata
    updateMetaProperty("og:title", ogTitle || title);
    updateMetaProperty("og:description", ogDescription || description);
    updateMetaProperty("og:type", ogType);
    if (ogImage) {
      updateMetaProperty("og:image", ogImage);
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType]);

  return null;
}
