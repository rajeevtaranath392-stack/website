import { useRef } from "react";
import Subscribe from "./Subscribe";
const Contact = () => {
    const form = useRef();

    return (
        <section id="contact" className="section" data-bs-theme="auto">
            <div className="container">
                <div className="row mb-4 wow fadeInUp">
                    <div className="col-lg-9 col-xl-8 mx-auto text-center">
                        <h2 className="fw-600 mb-3">Contact Us</h2>
                        <hr className="heading-separator-line border-primary border-2 opacity-10 mx-auto" />
                    </div>
                </div>
                <div className="row mb-4 wow fadeInUp">
                    <div className="col-lg-9 col-xl-8 mx-auto">
                        <p className="mb-2">
                            If you would like to honor and share the life and teachings of Rajeev Taranath—by organizing an event, offering a story or idea, or contributing support or materials to this archive—we warmly invite you to reach out.
                        </p>
                        <p className="mb-0 biography-indent ms-0">All content on this website is protected by copyright, so please contact us if you wish to use it for personal or commercial purposes.</p>
                    </div>
                </div>
                <div className="row wow fadeInUp mb-4">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <Subscribe text='Send'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
