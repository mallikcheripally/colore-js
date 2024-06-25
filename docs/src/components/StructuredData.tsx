import React from 'react';
import Head from '@docusaurus/Head';

const StructuredData = ({ json }) => {
    return (
        <Head>
            <script type="application/ld+json">{JSON.stringify(json)}</script>
        </Head>
    );
};

export default StructuredData;
