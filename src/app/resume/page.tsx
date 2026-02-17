import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import './_resume.style.scss';

export const metadata: Metadata = {
    title: "Tony's Resume",
    description: "Tony's resume page, showcasing skills and experience.",
};

const ResumePage: React.FC = () => {
    return (
        <div id='resume' className='mx-auto rounded-2'>
            <div className="resume-header px-4 px-lg-5">
                <div className="resume-profile-holder text-center">
                    <Image
                        className="resume-profile-img rounded-circle"
                        src="/assets/images/profile.jpg"
                        alt="Antonio Olvera profile"
                        width={200} height={200}
                    />
                    <h2 className="resume-name text-uppercase">Antonio Olvera </h2>
                    <div className="resume-role-title text-uppercase">Software Engineer</div>
                    <div className="resume-contact mt-4">
                        <ul className="resume-contact-list list-unstyled list-inline mb-0">
                            <li className="list-inline-item"><i className="resume-contact-icon bi bi-telephone-inbound me-2"></i> +52 241 110 96 70</li>
                            <li className="list-inline-item"><i className="resume-contact-icon bi bi-envelope me-2"></i> antonio.olvera.cruz@icloud.com</li>
                            <li className="list-inline-item"><i className="resume-contact-icon bi bi-globe me-2"></i> antonioolvera.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="resume-body p-4 p-lg-5">
                <div className="row">
                    <div className="col-main col-12 col-lg-8 pe-lg-4">
                        <section className="resume-section">
                            <h3 className="resume-section-heading text-uppercase py-2 pb-lg-3 pt-lg-2">
                                <i className="resume-section-heading-icon bi bi-person me-2" />
                                About Me
                            </h3>
                            <div className="resume-about-me text-justify">
                                I’m a passionate full-stack developer who has loved building creative,
                                efficient solutions since I was 15. I thrive in collaborative environments,
                                constantly improving my skills while working with diverse teams and technologies worldwide.
                                I believe we can make a real difference by helping each other and using technology to build a better world.
                            </div>
                        </section>
                        <hr />
                        <section className="resume-section resume-experience">
                            <h3 className="resume-section-heading text-uppercase py-lg-3 py-3">
                                <i className="resume-section-heading-icon bi bi-briefcase me-2" />
                                Work Experience
                            </h3>
                            <div className='resume-timeline position-relative'>
                                <article className='resume-timeline-item position-relative pb-5'>
                                    <div className="resume-timeline-item-header mb-2">
                                        <div className="resume-position-meta d-flex justify-content-between mb-1">
                                            <div className="resume-position-time">IBM, April 2022 - Present</div>
                                            <div className="resume-company-name">
                                                <Image
                                                    src="/assets/images/logos/ibm.png"
                                                    alt="IBM logo"
                                                    width={45} height={22}
                                                />
                                            </div>
                                        </div>
                                        <h3 className="resume-position-title mb-1">Software Engineer</h3>
                                    </div>
                                    <div className="resume-timeline-item-desc">
                                        <ul className="resume-timeline-list">
                                            <li>Design and develop scalable full-stack solutions <strong>(React, Next.js, Node.js, Express, GraphQL)</strong> including web apps and REST APIs.</li>
                                            <li>Get legacy system migrations into unified, <strong>high-performance platforms serving 50K+ weekly users</strong>, implementing <strong>SSO</strong> and <strong>RBAC</strong> architectures.</li>
                                            <li>Ensure <strong>high</strong> code quality through <strong>unit testing</strong>, <strong>Storybook</strong> documentation, performance <strong>optimization</strong>, and engineering <strong>best</strong> practices.</li>
                                            <li><strong>Open Innovation Community (OIC): </strong>Migrated <strong>5</strong> legacy applications into one modular and <strong>robust</strong> platform. Implemented advanced <strong>role</strong> management, session control, <strong>SSO</strong> authentication, and supported <strong>50K+</strong> weekly users.</li>
                                            <li><strong>Emailer Application: </strong>Built a platform managing <strong>500K+ emails per month</strong>, including template management, segmentation, distribution logic, and interactive performance metrics (delivery, opens, clicks).</li>
                                            <li><strong>InnerSource Portal:</strong> Developed a <strong>React-based</strong> front-end application to <strong>manage</strong> and <strong>track</strong> internal collaborative projects across the organization. Implemented user preference management and participation <strong>workflows</strong> to improve visibility and <strong>cross-team</strong> contribution.</li>
                                        </ul>
                                    </div>
                                </article>
                                <article className='resume-timeline-item position-relative pb-5 softtek'>
                                    <div className="resume-timeline-item-header mb-2">
                                        <div className="resume-position-meta d-flex justify-content-between mb-1">
                                            <div className="resume-position-time">Softtek, October 2020 - March 2022</div>
                                            <div className="resume-company-name">
                                                <Image
                                                    src="/assets/images/logos/softtek.png"
                                                    alt="Softtek logo"
                                                    width={49} height={25}
                                                    className='resume-company-logo'
                                                />
                                            </div>
                                        </div>
                                        <h3 className="resume-position-title mb-1">Senior Full-Stack Developer</h3>
                                    </div>
                                    <div className="resume-timeline-item-desc">
                                        <ul className="resume-timeline-list">
                                            <li>Developed <strong>high-quality</strong>, scalable <strong>enterprise</strong> applications, ensuring reliability and performance in <strong>production</strong> environments.</li>
                                            <li>Built a <strong>large-scale</strong> restaurant management platform for <strong>Tim Hortons</strong> and <strong>Burger King</strong>, supporting operations, inventory, logistics, equipment, personnel, and product management.</li>
                                            <li>Implemented advanced hierarchical role-based access control <strong>(RBAC)</strong> structures for multi-level organizational management.</li>
                                            <li>Designed and developed <strong>cloud-based</strong> architecture using <strong>Node.js, React, AWS (Lambda, SQS, EC2, S3), Redis</strong>, and queue-based asynchronous processing.</li>
                                            <li>Diagnosed and resolved <strong>production issues</strong>, maintaining <strong>high availability</strong> and system stability through <strong>effective</strong> team collaboration.</li>
                                        </ul>
                                    </div>
                                </article>
                                <article className='resume-timeline-item position-relative pb-5'>
                                    <div className="resume-timeline-item-header mb-2">
                                        <div className="resume-position-meta d-flex justify-content-between mb-1">
                                            <div className="resume-position-time">Golstats, August 2019 - October 2020</div>
                                            <div className="resume-company-name p-0">
                                                <Image
                                                    src="/assets/images/logos/golstats.png"
                                                    alt="Golstats logo"
                                                    width={65} height={31.3}
                                                    className='resume-company-logo'
                                                />
                                            </div>
                                        </div>
                                        <h3 className="resume-position-title mb-1">Software Tech Lead</h3>
                                    </div>
                                    <div className="resume-timeline-item-desc">
                                        <ul className="resume-timeline-list">
                                            <li>Led the development of the <strong>Football Data Management System (FDMS)</strong> for the FIFA World Cup <strong>Qatar 2022</strong>, a robust platform managing teams, players, scouting, coaches, evaluations, and transfers, with complex role <strong>hierarchies</strong> and <strong>microservices</strong> architecture.</li>
                                            <li>Managed and <strong>mentored</strong> a team of <strong>5</strong> developers, conducted technical <strong>interviews</strong>, and participated in <strong>hiring</strong> new developers.</li>
                                            <li>Designed <strong>full-stack</strong> solutions using the <strong>MEVN</strong> stack <strong>(MongoDB, Express, Vue.js, Node.js)</strong> and additional frameworks like <strong>Angular, TypeScript, HTML5, CSS3, SASS, and Bootstrap</strong>.</li>
                                            <li>Built <strong>RESTful APIs</strong>, managed <strong>SQL</strong> & <strong>MongoDB</strong> databases, implemented unit testing, and maintained <strong>agile</strong> workflows with <strong>Git/GitHub</strong> collaboration.</li>
                                        </ul>
                                    </div>
                                </article>
                                <article className='resume-timeline-item position-relative'>
                                    <div className="resume-timeline-item-header mb-2">
                                        <div className="resume-position-meta d-flex justify-content-between mb-1">
                                            <div className="resume-position-time">Farmacias Guadalajara, January 2018 - August 2019</div>
                                            <div className="resume-company-name">
                                                <Image
                                                    src="/assets/images/logos/fg.png"
                                                    alt="Farmacias Guadalajara logo"
                                                    width={55} height={25}
                                                    className='resume-company-logo'
                                                />
                                            </div>
                                        </div>
                                        <h3 className="resume-position-title mb-1">Full-Stack Developer</h3>
                                    </div>
                                    <div className="resume-timeline-item-desc">
                                        <ul className="resume-timeline-list">
                                            <li>Developed and maintained multiple platforms and modules using the <strong>MEAN</strong> stack, <strong>Java</strong>, <strong>Node.js</strong>, and front-end frameworks <strong>(Angular, React, HTML5, CSS3, SASS, Bootstrap, TypeScript)</strong>.</li>
                                            <li>Built <strong>mobile applications</strong> with <strong>Ionic</strong> and <strong>React</strong>, enhancing <strong>UX/UI</strong> for internal and customer-facing tools.</li>
                                            <li>Managed databases <strong>(SQL, MongoDB, MySQL, ProgressSQL)</strong> and integrated <strong>IBM e-commerce systems (WCS, OMS)</strong> for multi-project deployments.</li>
                                            <li>Collaborated in agile workflows <strong>(SCRUM)</strong>, implemented <strong>RESTful APIs</strong>, resolved bugs, and coordinated with international teams in <strong>English</strong> for <strong>effective</strong> team collaboration.</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </section>
                    </div>
                    <div className="col-12 col-lg-4 ps-lg-4">
                        <hr className="d-none d-md-block d-lg-none" />
                        <section className="resume-skills resume-section">
                            <h3 className="resume-section-heading text-uppercase py-2 pb-lg-3 pt-lg-2">
                                <i className="resume-section-heading-icon bi bi-gear me-2"></i>
                                Tech Stack
                            </h3>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <div className="resume-skill-name"><span>JavaScript</span><span className='skill-level'>Expert</span></div>
                                    <div className="progress resume-progress" role="progressbar" aria-label="Basic example" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar resume-progress-bar" style={{ width: "98%" }}></div>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="resume-skill-name"><span>Node.js, Express</span><span className='skill-level'>Expert</span></div>
                                    <div className="progress resume-progress" role="progressbar" aria-label="Basic example" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar resume-progress-bar" style={{ width: "95%" }}></div>
                                    </div>

                                </li>
                                <li className="mb-2">
                                    <div className="resume-skill-name"><span>REST APIs</span><span className='skill-level'>Expert</span></div>
                                    <div className="progress resume-progress" role="progressbar" aria-label="Basic example" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar resume-progress-bar" style={{ width: "95%" }}></div>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="resume-skill-name"><span>React, Next.js</span><span className='skill-level'>Expert</span></div>
                                    <div className="progress resume-progress" role="progressbar" aria-label="Basic example" aria-valuenow={93} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar resume-progress-bar" style={{ width: "93%" }}></div>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="resume-skill-name"><span>MongoDB</span><span className='skill-level'>Advanced</span></div>
                                    <div className="progress resume-progress" role="progressbar" aria-label="Basic example" aria-valuenow={87} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar resume-progress-bar" style={{ width: "87%" }}></div>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="resume-skill-name"><span>SQL Databases </span><span className='skill-level'>Advanced</span></div>
                                    <div className="progress resume-progress" role="progressbar" aria-label="Basic example" aria-valuenow={87} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar resume-progress-bar" style={{ width: "87%" }}></div>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="resume-skill-name"><span>AWS Cloud</span><span className='skill-level'>Advanced</span></div>
                                    <div className="progress resume-progress" role="progressbar" aria-label="Basic example" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar resume-progress-bar" style={{ width: "86%" }}></div>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="resume-skill-name"><span>IBM Cloud</span><span className='skill-level'>Advanced</span></div>
                                    <div className="progress resume-progress" role="progressbar" aria-label="Basic example" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar resume-progress-bar" style={{ width: "86%" }}></div>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="resume-skill-name"><span>AI, TypeScript</span><span className='skill-level'>Intermediate</span></div>
                                    <div className="progress resume-progress" role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar resume-progress-bar" style={{ width: "75%" }}></div>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="resume-skill-name"><span>Angular, Vue.js</span><span className='skill-level'>Intermediate</span></div>
                                    <div className="progress resume-progress" role="progressbar" aria-label="Basic example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar resume-progress-bar" style={{ width: "75%" }}></div>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="resume-skill-name"><span>GraphQL</span><span className='skill-level'>Intermediate</span></div>
                                    <div className="progress resume-progress" role="progressbar" aria-label="Basic example" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar resume-progress-bar" style={{ width: "70%" }}></div>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <hr />
                        <section className="resume-skills resume-section">
                            <h3 className="resume-section-heading text-uppercase py-lg-3 py-3">
                                <i className="resume-section-heading-icon bi bi-person-gear me-2" />
                                Soft Skills
                            </h3>
                            <ul className="list-inline">
                                <li className="list-inline-item"><span className="badge resume-skill-badge">Tech Leadership</span></li>
                                <li className="list-inline-item"><span className="badge resume-skill-badge">Public Speaking</span></li>
                                <li className="list-inline-item"><span className="badge resume-skill-badge">DevOps</span></li>
                                <li className="list-inline-item"><span className="badge resume-skill-badge">Strategic Thinking</span></li>
                                <li className="list-inline-item"><span className="badge resume-skill-badge">Effective Communication</span></li>
                                <li className="list-inline-item"><span className="badge resume-skill-badge">Agile</span></li>
                                <li className="list-inline-item"><span className="badge resume-skill-badge">SCRUM</span></li>
                                <li className="list-inline-item"><span className="badge resume-skill-badge">Cross-Team Collaboration</span></li>
                            </ul>
                        </section>
                        <hr />
                        <section className="resume-educate resume-section certifications">
                            <h3 className="resume-section-heading text-uppercase py-lg-3 py-3">
                                <i className="resume-section-heading-icon bi bi-patch-check me-2" />
                                Certifications
                            </h3>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <div className="resume-degree font-weight-bold">Certified Professional Developer</div>
                                    <div className="resume-degree-org">IBM - August 2025</div>
                                    <div className="resume-degree-time">Cloud & Serverless, Kubernetes, Clusters, CI/CD, IBM Cloud Services</div>
                                </li>
                                <li>
                                    <div className="resume-degree font-weight-bold">IBM Certified Advocate - Cloud v2</div>
                                    <div className="resume-degree-org">IBM - March 2023</div>
                                    <div className="resume-degree-time">Cloud Introduction, Cloud Arquitecture, Node.js, IBM Cloud Services</div>
                                </li>
                            </ul>
                        </section>
                        <hr />
                        <section className="resume-educate resume-section">
                            <h3 className="resume-section-heading text-uppercase py-lg-3 py-3">
                                <i className="resume-section-heading-icon bi bi-book me-2" />
                                Education
                            </h3>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <div className="resume-degree font-weight-bold">MSc in Software Engineering</div>
                                    <div className="resume-degree-org">Universidad Autónoma de Tlaxcala</div>
                                    <div className="resume-degree-time">2025 - Present</div>
                                </li>
                                <li>
                                    <div className="resume-degree font-weight-bold">BSc Computer Systems Engineering</div>
                                    <div className="resume-degree-org">Universidad de Tecnologías Digitales</div>
                                    <div className="resume-degree-time">2016 - 2020</div>
                                </li>
                            </ul>
                        </section>
                        <hr />
                        <section className="resume-languages resume-section">
                            <h3 className="resume-section-heading text-uppercase py-lg-3 py-3">
                                <i className="resume-section-heading-icon bi bi-translate me-2" />
                                Languages
                            </h3>
                            <ul className="list-unstyled resume-lang-list">
                                <li className="mb-2">
                                    <div className="resume-lang-name"><span>English</span><span className='lang-level'>Advanced (C1)</span></div>
                                    <div className="resume-level-indicator row gx-0 flex-nowrap">
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-half"></span></div>
                                        <div className="col"><span className="item item-half"></span></div>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="resume-lang-name"><span>Spanish</span><span className='lang-level'>Native</span></div>
                                    <div className="resume-level-indicator row gx-0 flex-nowrap">
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                        <div className="col"><span className="item item-full"></span></div>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <hr />
                        <section className="resume-projects resume-section">
                            <h3 className="resume-section-heading text-uppercase py-lg-3 py-3">
                                <i className="resume-section-heading-icon bi bi-code-slash me-2" />
                                Projects
                            </h3>
                            <div className="project-item">
                                <h4 className="project-item-heading">
                                    <i className="project-item-icon bi bi-square-fill me-2"/>
                                    <a href="#">IBM - OIC Platform</a>
                                </h4>
                                <div className="project-item-desc">
                                    Migrated <strong>5</strong> apps into a single platform with <strong>Next.js</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>GraphQL</strong>, <strong>SSO</strong>, serving <strong>50K+</strong> users/week.
                                </div>
                            </div>
                            <div className="project-item">
                                <h4 className="project-item-heading">
                                    <i className="project-item-icon bi bi-square-fill me-2"/>
                                    <a href="#">IBM - Emailer App</a>
                                </h4>
                                <div className="project-item-desc">
                                    Built email system sending <strong>500K+</strong> emails/month with templates, <strong>metrics</strong>, and <strong>CI/CD</strong>.
                                </div>
                            </div>
                            <div className="project-item">
                                <h4 className="project-item-heading">
                                    <i className="project-item-icon bi bi-square-fill me-2"/>
                                    <a href="#">Softtek - Restaurant Manager</a>
                                </h4>
                                <div className="project-item-desc">
                                    Developed restaurant management app for <strong>Tim Hortons & Burger King</strong> using <strong>Node.js, AWS, Redis, React</strong>.
                                </div>
                            </div>
                            <div className="project-item">
                                <h4 className="project-item-heading">
                                    <i className="project-item-icon bi bi-square-fill me-2"/>
                                    <a href="#">Golstats - FDMS</a>
                                </h4>
                                <div className="project-item-desc">
                                    Led <strong>4</strong> developers to build Football Data System for <strong>Qatar World Cup</strong> with microservices and role management.
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;