import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown>;
}

function setOrRemoveMeta(
  attr: string,
  value: string | undefined,
  attrType: "name" | "property" = "name",
) {
  const selector = `meta[${attrType}="${attr}"]`;
  const existing = document.querySelector(selector);
  if (value) {
    if (existing) {
      existing.setAttribute("content", value);
    } else {
      const el = document.createElement("meta");
      el.setAttribute(attrType, attr);
      el.setAttribute("content", value);
      document.head.appendChild(el);
    }
  } else if (existing) {
    existing.remove();
  }
}

function setOrRemoveLink(
  rel: string,
  href: string | undefined,
) {
  const selector = `link[rel="${rel}"]`;
  const existing = document.querySelector(selector);
  if (href) {
    if (existing) {
      existing.setAttribute("href", href);
    } else {
      const el = document.createElement("link");
      el.setAttribute("rel", rel);
      el.setAttribute("href", href);
      document.head.appendChild(el);
    }
  } else if (existing) {
    existing.remove();
  }
}

function setJsonLd(data: Record<string, unknown> | undefined) {
  const selector = 'script[type="application/ld+json"]';
  const existing = document.querySelector(selector);
  if (data) {
    const json = JSON.stringify(data);
    if (existing) {
      existing.textContent = json;
    } else {
      const el = document.createElement("script");
      el.setAttribute("type", "application/ld+json");
      el.textContent = json;
      document.head.appendChild(el);
    }
  } else if (existing) {
    existing.remove();
  }
}

export function PageMeta(props: PageMetaProps) {
  useEffect(() => {
    document.title = props.title;
    setOrRemoveMeta("description", props.description);
    setOrRemoveMeta("og:title", props.ogTitle, "property");
    setOrRemoveMeta("og:description", props.ogDescription, "property");
    setOrRemoveMeta("og:url", props.ogUrl, "property");
    setOrRemoveMeta("og:image", props.ogImage, "property");
    setOrRemoveMeta("twitter:title", props.twitterTitle);
    setOrRemoveMeta("twitter:description", props.twitterDescription);
    setOrRemoveLink("canonical", props.canonical);
    setJsonLd(props.jsonLd);
  });

  return null;
}
