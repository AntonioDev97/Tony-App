import React from 'react';
import { Metadata } from 'next';
import './_page.style.scss';

export const metadata: Metadata = {
    title: "Tony's Under Development Page",
    description: "Tony's resume page, showcasing skills and experience.",
};

const ResumePage: React.FC = () => {
    return (
        <div id="coming-soon-page">
            <div className="coming-soon-content">
                <h1>🚧 Under Construction</h1>
                <p>
                    This page is currently under development.
                    <br />
                    Please check back soon.
                </p>
            </div>
        </div>
    );
};

export default ResumePage;