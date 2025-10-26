const PrivacyPolicy = () => {
    return (<section id="biography" className="section py-5 bg-light">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="card shadow-sm border-0 mb-4">
                        <div className="card-body p-4">
                            <h2 className="card-title mb-4 text-center">Privacy Policy</h2>
                            <ol>
                                <li className="mt-1"><b className="me-2">Data Collection:</b><span>For our mailing list, we collect personal information such as names, email addresses, and payment details for donations.</span></li>
                                <li className="mt-1"><b className="me-2">Usage of Data:</b><span>Personal data is used to manage your account, process payments and improve the visitor experience.</span></li>
                                <li className="mt-1"><b className="me-2">Third-Party Services:</b><span>Payment processing is handled by third-party gateways, adhering to their security protocols.</span></li>
                                <li className="mt-1"><b className="me-2">Data Protection:</b><span>Your data is stored securely, and we take all reasonable steps to protect it from unauthorized access.</span></li>
                                <li className="mt-1"><b className="me-2">User Rights:</b><span>You may request access to or delete your data at any time.</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default PrivacyPolicy;