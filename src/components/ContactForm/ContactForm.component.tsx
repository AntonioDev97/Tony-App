'use client'

import React, { useEffect, useState } from 'react';
import './_contactForm.style.scss';

const ContactForm = () => {
    const initControls = { name: '', email: '', message: '' };
    const [{ controls, submit }, setForm] = useState<{
        controls: {
            name: string;
            email: string;
            message: string;
        };
        submit: {
            loading: boolean;
            status: null | 'error' | 'success';
        };
    }>({
        controls: initControls,
        submit: { loading: false, status: null }
    });

    const handleSubmitForm = async (e: React.SubmitEvent) => {
        e.preventDefault();
        try {
            setForm(prev => ({ ...prev, submit: { ...prev.submit, loading: true } }));
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(controls)
            });
            if (response.ok) {
                setForm(prev => ({
                    ...prev,
                    submit: { ...prev.submit, status: 'success' },
                    controls: initControls
                }));
            } else {
                console.error(response.status, response.statusText);
                setForm(prev => ({ ...prev, submit: { ...prev.submit, status: 'error' } }));
            }
        } catch (error) {
            console.error(error);
            setForm(prev => ({ ...prev, submit: { ...prev.submit, status: 'error' } }));
        } finally {
            setForm(prev => ({ ...prev, submit: { ...prev.submit, loading: false } }));
        }
    };

    useEffect(() => {
        if (submit.status) {
            const timer = setTimeout(() => {
                setForm(prev => ({ ...prev, submit: { ...prev.submit, status: null } }));
            }, 7000); // 7 seconds
            return () => clearTimeout(timer); // cleanup
        }
    }, [submit.status]);

    return (
        <div className="form-wrapper">
            <form id='contact-form' onSubmit={handleSubmitForm} className="contact-form p-md-4 px-lg-5">
                <h4 className="text-center mb-4 form-title">Contact Form</h4>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="sr-only" htmlFor="cname">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cname"
                            name="name"
                            placeholder="Name"
                            minLength={2}
                            required={true}
                            value={controls.name}
                            onChange={e => setForm(prev => ({ ...prev, controls: { ...prev.controls, name: e.target.value } }))}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="sr-only" htmlFor="cemail">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="cemail"
                            name="email"
                            placeholder="Email"
                            required={true}
                            value={controls.email}
                            onChange={e => setForm(prev => ({ ...prev, controls: { ...prev.controls, email: e.target.value } }))}
                        />
                    </div>
                    <div className="col-12">
                        <label className="sr-only" htmlFor="cmessage">Your message</label>
                        <textarea
                            className="form-control"
                            id="cmessage" name="message"
                            placeholder="Enter your message"
                            rows={10}
                            required={true}
                            value={controls.message}
                            onChange={e => setForm(prev => ({ ...prev, controls: { ...prev.controls, message: e.target.value } }))}
                        />
                    </div>
                    <div className="col-12">
                        <button
                            type="submit"
                            className="btn w-100 btn-secondary py-2"
                            disabled={submit.loading}
                        >
                            {submit.loading ?
                                <div className="spinner-border spinner-border-sm" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div> : 'Submit'}
                        </button>
                    </div>
                </div>
                {submit.status === 'success' &&
                    <div className="alert alert-success mt-4" role="alert">
                        🎉 &nbsp;&nbsp;<strong>Thanks</strong>! your message was <strong>sent successfully</strong>, I’ll get back to you as soon as possible.
                    </div>}
                {submit.status === 'error' &&
                    <div className="alert alert-danger mt-4" role="alert">
                        😅 &nbsp;&nbsp;<strong>Oops</strong>! Something <strong>went wrong</strong> while sending your message. Please try again.
                    </div>}
            </form>
        </div>
    );
}

export default ContactForm;