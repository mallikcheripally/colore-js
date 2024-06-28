import React from 'react';
import Head from '@docusaurus/Head';

const StructuredData = ({
                            json = {
                                "@context": "https://schema.org",
                                "@type": "SoftwareSourceCode",
                                "name": "Colore JS",
                                "description": "A robust JavaScript library for color conversions, manipulations, and validations. Generate harmonious schemes, enhance accessibility, and perform precise analysis.",
                                "codeRepository": "https://github.com/mallikcheripally/colore-js",
                                "programmingLanguage": "JavaScript",
                                "license": "https://opensource.org/licenses/MIT",
                                "keywords": ["colore-js", "colore", "colore js", "color conversion", "color manipulation", "color validation", "color harmony", "color utility", "color contrast ratio", "accessibility"],
                                "author": {
                                    "@type": "Person",
                                    "name": "Mallik Cheripally"
                                },
                                "datePublished": "2024-06-16",
                            }
}) => {
    return (
        <Head>
            <script type="application/ld+json">{JSON.stringify(json)}</script>
        </Head>
    );
};

export default StructuredData;
