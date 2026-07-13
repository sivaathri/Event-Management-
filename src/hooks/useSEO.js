import { useEffect } from 'react';

/**
 * Custom hook to dynamically update document title and description for SEO.
 * @param {string} title - The page title
 * @param {string} description - The page meta description
 */
export default function useSEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      
      // Update Open Graph and Twitter Titles too
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', title);
    }
    
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'description';
        newMeta.content = description;
        document.head.appendChild(newMeta);
      }

      // Update Open Graph and Twitter Descriptions too
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
      
      const twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', description);
    }

    // Update canonical link to match current path
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', window.location.href);
    }
  }, [title, description]);
}
