import { quotesList } from "../config/dataConfig";
import CustomSlider from "./CustomSlider";

const Quotes = () => {
  return (
    <section id="quotes" className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12 mx-auto text-center">
            <h2 className="fw-600 mb-0" style={{ textTransform: 'capitalize' }}>
              Rajeev Taranath
            </h2>
            <i className="mb-0">Insights on music</i>
            <hr className="heading-separator-line border-primary border-2 opacity-10 mx-auto mb-2 mt-1" />
            <div className="text-center mx-auto mb-0">
              <p className="mb-4">
                These expressions have been excerpted from published interviews online and in print. Sources will be added over time.
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 col-sm-12 col-xs-12'>
            <figure className="figure mb-0 d-flex flex-column justify-content-center">
              <img
                src="images/Rajeev Taranath photo credit Leigh Wachter.jpg"
                alt="Rajeev Taranath Quotes Banner" className="img-fluid rounded mx-auto d-block mb-4" />
              <figcaption className="figure-caption text-center mt-2">Photo Credit: Leigh Wachter</figcaption>
            </figure>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 col-sm-12 col-xs-12'>
            <CustomSlider>
              {quotesList?.clients?.map((quote, index) => {
                return (<div key={`quote-card-${index}`} className="d-flex justify-content-center">
                  <div className="slider-quote-card">
                    <div className="quote-card-body">
                      <div className="quote-card-text mt-4">
                        <i><span className="mx-1" style={{ fontSize: '1.5rem' }}>&ldquo;</span>{quote.quote}<span className="mx-1" style={{ fontSize: '1.5rem' }}>&rdquo;</span></i>
                      </div>
                    </div>
                  </div>
                </div>)
              })}
            </CustomSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
