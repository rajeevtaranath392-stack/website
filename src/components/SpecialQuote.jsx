const SpecialQuote = ({ author, quote }) => {
    return (
        <div className="row special-quote">
            <div className="col-lg-8 mx-auto text-center">
                <div className="item text-center px-5">
                    <span className="text-9 text-muted opacity-3">
                        <i className="fa fa-quote-left" style={{ color: '#fff' }} />
                    </span>
                    <p className="text-4 fst-italic real-quote-message">
                        {quote}
                    </p>
                    <strong className="d-flex justify-content-center fw-300 real-quote-message">-{author}</strong>
                </div>
            </div>
        </div>
    );
}
export default SpecialQuote;