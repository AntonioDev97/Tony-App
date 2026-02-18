'use client';
import React, { useEffect, useState } from 'react';
import './_floating-buttons.style.scss';

const FloatingButtons: React.FC = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Initialize Bootstrap tooltips
        const initTooltips = async () => {
            const { Tooltip } = await import('bootstrap');
            const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
            tooltipElements.forEach((element) => {
                const existingTooltip = Tooltip.getInstance(element);
                if (!existingTooltip) {
                    new Tooltip(element);
                }
            });
        };

        // Cleanup tooltips for removed elements
        const cleanupTooltips = async () => {
            const backToTopBtn = document.querySelector('.back-to-top[data-bs-toggle="tooltip"]');
            if (!backToTopBtn && !showBackToTop) {
                // Button was removed, find and destroy any orphaned tooltips
                document.querySelectorAll('.tooltip.show').forEach((tooltip) => {
                    tooltip.remove();
                });
            }
        };

        initTooltips();
        cleanupTooltips();
    }, [showBackToTop]);

    const scrollToTop = async () => {
        // Hide tooltip before scrolling
        const backToTopBtn = document.querySelector('.back-to-top[data-bs-toggle="tooltip"]');
        if (backToTopBtn) {
            // Remove any visible tooltips
            document.querySelectorAll('.tooltip.show').forEach((tooltip) => {
                tooltip.remove();
            });
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const downloadResume = async () => {
        const html2pdf = (await import('html2pdf.js')).default;
        const resumeElement = document.getElementById('resume');
        if (!resumeElement) {
            alert('Resume section not found!');
            return;
        }

        try {
            const clonedElement = resumeElement.cloneNode(true) as HTMLElement;
            const bodyStyles = window.getComputedStyle(document.body);
            const numberOfPages = 2;
            clonedElement.classList.add('pdf-resume');
            clonedElement.style.width = '1000px';
            clonedElement.style.minWidth = '1000px';
            clonedElement.style.maxWidth = '1000px';
            clonedElement.style.transform = 'scale(0.75)';
            clonedElement.style.transformOrigin = 'top center';
            clonedElement.style.height = `${345*numberOfPages}mm`;
            clonedElement.style.minHeight = `${345*numberOfPages}mm`;
            clonedElement.style.maxHeight = `${345*numberOfPages}mm`;
            // Temporary container without margins
            const tempContainer = document.createElement('div');
            tempContainer.style.width = '100%';
            tempContainer.style.padding = '1rem 0';
            tempContainer.style.margin = '0';
            tempContainer.style.maxHeight = `${279.4*numberOfPages}mm`;
            tempContainer.style.background = bodyStyles.backgroundColor || '#fff';
            tempContainer.style.display = 'flex';
            tempContainer.style.justifyContent = 'center';
            tempContainer.appendChild(clonedElement);
            document.body.appendChild(tempContainer);
            // Configure html2pdf options
            const options = {
                margin: 0,
                filename: 'tony-resume.pdf',
                image: { type: 'jpeg', quality: 1.0 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    letterRendering: true,
                    backgroundColor: null,
                    windowWidth: 1000,
                },
                jsPDF: { orientation: 'portrait', unit: 'mm', format: 'letter' },
                pagebreak: { mode: ['css', 'legacy'] }
            } as const;

            await html2pdf().set(options).from(tempContainer).save();
            document.body.removeChild(tempContainer);
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Error generating PDF. Please try again.');
        }
    };

    return (
        <div className="floating-buttons">
            {showBackToTop && (
                <button
                    className="floating-btn back-to-top"
                    onClick={scrollToTop}
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Back to top"
                    aria-label="Back to top"
                >
                    <i className="bi bi-chevron-up"></i>
                </button>
            )}

            <button
                className="floating-btn download-resume"
                onClick={downloadResume}
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Download Resume"
                aria-label="Download Resume"
            >
                <i className="bi bi-download"></i>
            </button>
        </div>
    );
};

export default FloatingButtons;
