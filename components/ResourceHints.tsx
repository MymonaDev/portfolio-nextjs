"use client";

import { useEffect } from "react";

export default function ResourceHints() {
  useEffect(() => {
    // Add preconnect and dns-prefetch links for external domains
    const links = [
      {
        rel: "preconnect",
        href: "https://user-images.githubusercontent.com",
      },
      {
        rel: "dns-prefetch",
        href: "https://user-images.githubusercontent.com",
      },
      {
        rel: "preconnect",
        href: "https://res.cloudinary.com",
      },
      {
        rel: "dns-prefetch",
        href: "https://res.cloudinary.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
    ];

    links.forEach(({ rel, href, crossOrigin }) => {
      const link = document.createElement("link");
      link.rel = rel;
      link.href = href;
      if (crossOrigin) {
        link.crossOrigin = crossOrigin;
      }
      // Check if link already exists
      const existingLink = document.querySelector(
        `link[rel="${rel}"][href="${href}"]`,
      );
      if (!existingLink) {
        document.head.appendChild(link);
      }
    });
  }, []);

  return null;
}
