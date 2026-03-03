import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import ContactForm from '@/components/ContactForm';
import './_contact.style.scss';

export const metadata: Metadata = {
    title: "Tony's contact page",
    description: "Tony's contact form to get in touch with Tony"
}

const ContactPage: React.FC = () => {
    return (
        <div id='contact-page' className='top-section mx-auto rounded-2 mb-4'>
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
                    <h1 className="intro-name text-center">GET IN TOUCH</h1>
                    <div className="contact-intro text-md-center limit-max-width mx-auto">
                        <p>Whether it’s building scalable cloud solutions, developing high-quality software, or discussing a new opportunity, feel free to reach out. I’m always open to meaningful collaborations and innovative challenges. </p>
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;