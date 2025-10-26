import { useState, useEffect } from 'react';
import CustomSlider from './CustomSlider';
import Filter from "./Filter";
import { MUSIC_FILTERS, musicLinks } from "../config/dataConfig";

export const spotifyLinks = [
    {
        id: "https://open.spotify.com/embed/artist/14Bg6ooADk8tSstCJfnJc6?utm_source=generator"
    },
    {
        id: "https://open.spotify.com/embed/album/5sBJEoV6qUMASC1uo2Wwhk?utm_source=generator"
    },
    {
        id: "https://open.spotify.com/embed/track/4MN0lFEAKubMty3MzY3ow5?utm_source=generator"
    },
    {
        id: "https://open.spotify.com/embed/track/1aOlzHtvRmpQaJqazySCPx?utm_source=generator"
    },
    {
        id: "https://open.spotify.com/embed/album/5aDhyj01HbIWZKECCQ7o7X?utm_source=generator"
    }
];

export const Spotify = ({ id, height = 355 }) => (<iframe
    src={id}
    width="100%"
    height={height}
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
></iframe>);

const Music = () => {
    const [musics, setFilteredMusics] = useState(musicLinks);
    const [filterKey, setFilterKey] = useState("*");
    const handleFilterKeyChange = (key) => () => setFilterKey(key);


    useEffect(() => {
        setFilteredMusics(musicLinks.filter((t) => {
            return filterKey === '*' ? true : t.type === filterKey
        }));
    }, [filterKey]);

    return (<section id="music" className="section">
        <div className="container">
            <Filter id='music' filters={MUSIC_FILTERS} filterKey={filterKey} handleFilterKeyChange={handleFilterKeyChange} />
            <div className='row g-3'>
                {musics.map((music, index) => {
                    return (<div key={`music-link-${index}`} className="col-6 col-md-4 col-lg-3">
                        <div className="portfolio-box rounded border-style-primary border-primary border-2" style={{
                            borderStyle: 'dashed', width: '100%',
                            padding: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            height: '100%'
                        }}
                            onClick={() => {
                                window.open(music.id, "_blank")
                            }}
                        >
                            <img src={`images/music/${music.imgId}`} alt={music.imgId} className='d-flex align-items-center' />
                        </div>
                    </div>)
                })}
            </div>
            <div className='row'>
                <div className='col-lg-12 col-sm-12 col-xs-12'>
                    <CustomSlider>
                        {spotifyLinks.map(({ id }, i) => <div key={`spotify-${i}`} className="p-4"><Spotify id={id} /></div>)}
                    </CustomSlider>
                </div>
            </div>
        </div>
    </section>)
}
export default Music;