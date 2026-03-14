import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import './_about.style.scss';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Tony's About",
    description: "Tony's about page - discover more about Tony"
};

const AboutPage: React.FC = () => {

    return (
        <div id="about-page" className='top-section mx-auto rounded-2 mb-4'>
            <div className="top-section-header px-4 px-lg-5">
                <div className="profile-holder text-center">
                    <Image
                        className="profile-img rounded-circle"
                        src="/assets/images/profile.jpg"
                        alt="Antonio Olvera profile"
                        width={200} height={200}
                    />
                </div>
                <div className="intro-holder">
                    <h2 className="intro-name text-center mb-3">ANTONIO OLVERA</h2>
                    <div className="profile-intro text-center limit-max-width mx-auto">
                        <p>Hi, I’m a Senior <strong>Software Engineer</strong> with over <strong>10</strong> years of experience building scalable web applications and <strong>cloud-based</strong> systems. I specialize in <strong>full-stack</strong> development, modern software <strong>architectures</strong>, and integrating <strong>AI-driven</strong> solutions to build efficient and reliable systems.</p>
                    </div>
                </div>
                <div className="text-center" style={{marginTop: '2rem'}}>
                    <Link href={'/resume'} className="btn-two btn btn-secondary py-2 d-inline-flex align-items-center">
                        View Resume <i className='bi bi-arrow-right-short' style={{fontSize: "1.6rem"}}/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;