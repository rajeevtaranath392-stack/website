import { useEffect, useState } from 'react';
import { API_KEY } from "./Videos";
import GallerySection from "./Gallery";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { projectsData, quotesList, musicalInsights } from '../config/dataConfig';
import QuoteCard from './QuoteCard';
import VideoModal from './VideoModal';
import AboutUs from "./About";
import { Spotify, spotifyLinks } from './Music';
import News from './News';
import { MUSICAL_INSIGHTS_BY_RAJEEV_TARANATH } from './Intro';
import CustomSlider from './CustomSlider';

function getRandomElementsWithRepeats(arr, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    return result;
}

const TopStories = ({ type }) => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    useEffect(() => {
        async function fetchVideos() {
            const playlistId = 'PLTWnkGDvGnMnaREnRFB2DjT1gYHiH4aLU';
            const playlistRes = await fetch(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,id&order=date&maxResults=3&playlistId=${playlistId}&key=${API_KEY}`
            );
            const playlistData = await playlistRes.json();
            setItems(playlistData.items);
        }

        if (type === 'videos')
            fetchVideos();
    }, [type]);


    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            <i className="fa fa-chevron-left"></i>
        </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            <i className="fa fa-chevron-right"></i>
        </button>
    );


    const settings = {
        dots: true,
        arrows: true,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const handleNavigation = (type) => {
        if (type === MUSICAL_INSIGHTS_BY_RAJEEV_TARANATH) type = 'quotes';
        navigate(type);
    }

    return (<section id={type} className="section p-0 pt-4">
        <div className="container">
            <VideoModal selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
            {type !== 'biography' && <div className="row wow fadeInUp">
                <div className="col-lg-9 col-xl-8 mx-auto text-center">
                    <h2 className="fw-600 mb-0" style={{ textTransform: 'capitalize' }}>
                        {type}
                    </h2>
                    <hr className="heading-separator-line border-primary border-2 opacity-10 mx-auto mb-2" />
                    {type !== 'biography' && <div
                        className='px-4 py-0 d-flex justify-content-center align-items-center more'
                        onClick={() => { handleNavigation(type) }} style={{ cursor: 'pointer' }}>
                        Explore more {type}<i className="fa fa-external-link-alt fa-xs ms-2 py-0" aria-hidden="true"></i>
                    </div>}
                </div>
            </div>}
            <div className="brands-grid wow fadeInUp">
                <div className="row">
                    {type === 'biography' && <AboutUs />}
                    {type === 'discography' && <Spotify id={spotifyLinks[0].id} height={450} />}
                    {type === MUSICAL_INSIGHTS_BY_RAJEEV_TARANATH && <div id='musical-insights'>
                        <CustomSlider>
                            {musicalInsights?.clients?.map((quote, index) => {
                                return (<div key={`quote-card-${index}`} className="quote-card w-100">
                                    <span className="quote-card-icon" aria-hidden="true">&#10077;</span>
                                    <div className="quote-card-body">
                                        <div className="quote-card-text">
                                            <i><span className="mx-1">❝</span>{quote.quote}<span className="mx-1">❞</span></i>
                                        </div>
                                        <div className="quote-card-author">- {quote.author}</div>
                                    </div>
                                </div>)
                            })}
                        </CustomSlider>
                    </div>}
                    {
                        type === 'videos' && <>{items.map((video) => {
                            const { title, thumbnails, resourceId } = video.snippet;
                            const videoId = resourceId.videoId;
                            return (
                                <div className="col-md-4 col-sm-6" key={videoId}>
                                    <div
                                        className="card h-100 shadow-sm border-0"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setSelectedVideo(videoId)}
                                    >
                                        <img
                                            src={thumbnails.medium.url}
                                            className="card-img-top"
                                            alt={title}
                                        />
                                        <div className="card-body">
                                            <div className="card-title" style={{ fontSize: '12px', fontWeight: 'bold' }}>{title}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        </>
                    }
                    {
                        type === 'articles' && projectsData.length > 0 && <News maxItems={3} />
                    }
                    {
                        type === 'gallery' && <GallerySection maxItems={8} />
                    }
                    {
                        type === 'quotes' &&
                        <div className='px-3'>
                            <Slider {...settings}>
                                {
                                    getRandomElementsWithRepeats(quotesList.clients, 5).map((quote, i) => (
                                        <QuoteCard key={`quote-${i}`} quote={quote} />
                                    ))
                                }
                            </Slider>
                        </div>
                    }
                </div>
            </div>
        </div>
    </section>)
}

export default TopStories;