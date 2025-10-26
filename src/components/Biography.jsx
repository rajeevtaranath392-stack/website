import Trailer from "./Trailer";
const Biography = () => {
    return (
        <section id="biography" className="section py-5 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="card shadow-sm border-0 mb-4">
                            <div className="card-body p-4">
                                <h2 className="card-title mb-4 text-center">Biography</h2>
                                <div className="text-center mb-4">
                                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                                        <img
                                            src="images/bio_page/Rajeev Taranath 1987.jpg"
                                            alt="Rajeev Taranath"
                                            className="img-fluid rounded shadow-sm"
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    </div>
                                </div>
                                <p className="card-text biography-card-text mb-4" style={{ marginLeft: '1em' }}>
                                    Acclaimed performer Rajeev Taranath is recognized as one of India’s leading exponents of the Sarod. A distinguished disciple of Maestro Ali Akbar Khan, his performances masterfully combined the depth and rigor of the tradition of Hindustani classical music with an inspired imagination and emotional intensity. His passing on June 11, 2024 has been a true and poignant loss to the music fraternity.
                                </p>
                                <div className="row g-4 mb-4">
                                    <div className="col-md-3">
                                        <figure className="figure mb-0">
                                            <div style={{ maxHeight: '450px', overflow: 'hidden' }}>
                                                <img
                                                    src="images/bio_page/bio.png"
                                                    alt="Rajeev_Taranath"
                                                    className="figure-img img-fluid rounded shadow-sm mb-2 mt-2"
                                                    style={{
                                                        width: '100%',
                                                        height: '450px',
                                                        objectFit: 'cover',
                                                        objectPosition: 'top center'
                                                    }}
                                                />
                                            </div>
                                        </figure>
                                    </div>
                                    <div className="col-md-9">
                                        <p className="card-text biography-card-text" style={{ textAlign: 'justify' }}>
                                            Born into a highly creative family from Bangalore, India in 1932, Rajeev Taranath began studying music, song and poetry with his father at a very early age. As a teenager, he attended a concert featuring classical Indian music that would forever change his life and artistic path. Under the tutelage of the great sarod maestro Ustad Ali Akbar Khan, Taranath became dedicated to the sarod. Throughout his career, he also received crucial guidance from two other legendary musicians of this musical lineage, Pandit Ravi Shankar and Srimati Annapurna Devi. Rajeev Taranath today is considered one of India's top exponents of the sarod with musicianship that masterfully combines the depth and rigor of traditional Hindustani classical music with an inspired imagination and emotional intensity. For this, he has received wide acclaim and honors nationally in India, including the Padma Shri in 2019 and the Sangeet Natak Akademi award in 2000. In Karnataka he has been conferred the Sangeet Vidhwan (2018), the Kempe Gowda award (2006), the Chowdiah award (1998), Sangeet Kala Ratna and others. In 2018 the Kannada University, Hampi presented him with the Nadoja award.
                                        </p>
                                        <p className="card-text biography-card-text biography-indent" style={{ textAlign: 'justify' }}>
                                            Pt. Taranath travelled worldwide, both teaching and performing. His concerts included performances at major Indian music venues and internationally at universities, conservatories and world music festivals. In India these have included the Tansen Sangeet Samaroh, the Dover Lane Music Conference, Sawai Gandharv Mahatsov, Sangeet Research Academy Sangeet Sammelan, Swar Samrat Music Festival and many others. From 1995 to 2005, Taranath served on the music faculty of the prestigious California Institute of the Arts in Los Angeles. As an organizer and founder of the Pt Taranath foundation, he has striven to foster Hindustani music in south India for many years.
                                        </p>
                                    </div>
                                </div>


                                <div className="d-flex justify-content-center mb-4">
                                    <Trailer />
                                </div>
                                <div>
                                    <p>The documentary, <b>‘Pandit Rajeev Taranath – A Life in Music’</b> is a tribute to one of the great masters of sarod.  The documentary, directed by acclaimed filmmaker Amshan Kumar was released in 2022. In this film, the musical journey of Panditji is narrated by himself and has interviews of eminent musicians and people closely associated with him.</p>
                                </div>
                                <div className="row g-4 mb-4">
                                    <div className="col-md-4">
                                        <figure className="figure mb-0">
                                            <div style={{ height: '300px', overflow: 'hidden' }}>
                                                <img
                                                    src="images/bio_page/Performing in India 1980.jpg"
                                                    alt="Performing in India 1980"
                                                    className="figure-img img-fluid rounded shadow-sm"
                                                    style={{
                                                        width: '100%',
                                                        height: '300px',
                                                        objectFit: 'cover',
                                                        objectPosition: 'center'
                                                    }}
                                                />
                                            </div>
                                            <figcaption className="figure-caption text-center mt-2">Performing in India, 1980</figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-4">
                                        <figure className="figure mb-0">
                                            <div style={{ height: '300px', overflow: 'hidden' }}>
                                                <img
                                                    src="images/bio_page/Rajeev Taranath.jpg"
                                                    alt="Rajeev Taranath"
                                                    className="figure-img img-fluid rounded shadow-sm"
                                                    style={{
                                                        width: '100%',
                                                        height: '300px',
                                                        objectFit: 'cover',
                                                        objectPosition: 'center'
                                                    }}
                                                />
                                            </div>
                                        </figure>
                                    </div>
                                    <div className="col-md-4">
                                        <figure className="figure mb-0">
                                            <div style={{ height: '300px', overflow: 'hidden' }}>
                                                <img
                                                    src="images/bio_page/Rajeev Taranath Photo credit Saggere Radhakrishna (1).jpg"
                                                    alt="Rajeev Taranath Photo credit Saggere Radhakrishna"
                                                    className="figure-img img-fluid rounded shadow-sm"
                                                    style={{
                                                        width: '100%',
                                                        height: '300px',
                                                        objectFit: 'cover',
                                                        objectPosition: 'center'
                                                    }}
                                                />
                                            </div>
                                            <figcaption className="figure-caption text-center mt-2">Photo Credit: Saggere Radhakrishna</figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Biography;