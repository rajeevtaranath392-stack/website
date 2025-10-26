import { AboutSecDetails } from "../config/dataConfig";

const AboutUs = () => {
  return (
    <section id="about" className="section p-0 pt-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 text-left mb-5 mb-lg-0 wow fadeInUp d-flex align-items-center flex-column">
            <img
              className="img-fluid shadow-md rounded d-inline-block"
              src="images/about-me.jpeg"
              title="I'm Sarod Maestro Rajeev Taranath"
              alt=""
              style={{
                height: '24rem'
              }}
            />
            <div className="w-100 text-center">
              <div className="fw-bolder fs-6">Sarod Maestro</div>
              <div className="fw-bold fs-6">Rajeev Taranath</div>
              <div className="fst-italic small">(Oct. 17, 1932 - June 11, 2024)</div>
            </div>
          </div>
          <div className="col-lg-9 text-left fadeInUp">
            <p>{AboutSecDetails.information.desc1}</p>
            <p className="text-indent-3">{AboutSecDetails.information.desc2}</p>
            <p className="text-indent-3">{AboutSecDetails.information.desc3}</p>
            <div style={{ fontWeight: 'bold', fontStyle: 'italic' }} className="d-flex justify-content-center">
              <q>A performing art is the ultimate test of honesty.</q>

            </div>
            <div className="d-flex justify-content-center mt-2">
              <div style={{ fontWeight: 'bold', fontStyle: 'italic', marginLeft: '16rem' }}>- Rajeev Taranath</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
