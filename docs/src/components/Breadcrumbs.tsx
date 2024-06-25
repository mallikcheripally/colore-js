import React from 'react';

const Breadcrumbs = () => (
    <script type="application/ld+json">
        {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://colore.mallikcheripally.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Introduction",
                    "item": "https://colore.mallikcheripally.com/docs/introduction"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Installation",
                    "item": "https://colore.mallikcheripally.com/docs/getting-started/installation"
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Quick Start",
                    "item": "https://colore.mallikcheripally.com/docs/getting-started/quick-start"
                }
            ]
        })}
    </script>
);

export default Breadcrumbs;
