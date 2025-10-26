import React, { useEffect, useState } from 'react';


import VideoModal from './VideoModal';
import CustomSlider from './CustomSlider';
import Filter from './VideosFilter';

export const API_KEY = 'AIzaSyDJnGMaoechV4E07AFGLUcWW-5D1vLFVcc';
export const CHANNEL_ID = 'UC3Q-QxmT46GWoanAfQ1mKyQ';
export const MAX_ITEMS = 8;
const VideosPage = ({ maxItems = MAX_ITEMS }) => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [playlists, setPlaylists] = useState([]);
    const [filterKey, setFilterKey] = useState('all');
    const [loading, setLoading] = useState(false);
    const handleFilterKeyChange = (key) => () => setFilterKey(key);
    useEffect(() => {
        async function fetchPlaylists() {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&key=${API_KEY}`
                );
                const data = await res.json();
                setPlaylists([{ id: 'all', snippet: { title: 'All' } }, ...(data?.items?.reverse() || [])]);
            } finally {
                setLoading(false);
            }
        }
        fetchPlaylists();
    }, []);

    useEffect(() => {
        async function fetchVideos() {
            setLoading(true);
            try {
                if (filterKey === 'all') {
                    if (playlists.length <= 1) return;
                    let allVideos = [];
                    for (let i = 1; i < playlists.length; i++) {
                        const pid = playlists[i].id;
                        if (pid === 'all') continue;
                        const res = await fetch(
                            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${pid}&key=${API_KEY}`
                        );
                        const data = await res.json();
                        if (data.items) allVideos = allVideos.concat(data.items);
                    }
                    setVideos(allVideos);
                } else {
                    if (filterKey === 'all' || !filterKey) return;
                    const playlistRes = await fetch(
                        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${filterKey}&key=${API_KEY}`
                    );
                    const playlistData = await playlistRes.json();
                    setVideos(playlistData.items || []);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchVideos();
    }, [filterKey, playlists]);

    const chunkArray = (array, size) => {
        return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
            array.slice(i * size, i * size + size)
        );
    }
    const videoChunks = chunkArray(videos, maxItems);

    const playlistFilters = playlists.reduce((acc, playlist) => {
        acc[playlist.id] = playlist.snippet.title;
        return acc;
    }, {});

    return (
        <section id="videos" className="section">
            <div className="container">
                <Filter
                    id='videos'
                    filters={playlistFilters}
                    filterKey={filterKey}
                    handleFilterKeyChange={handleFilterKeyChange}
                />
                {loading ? (<div style={{ textAlign: 'center', padding: '2rem' }}>
                    <span className="spinner-border" role="status" aria-hidden="true"></span>
                    <span style={{ marginLeft: '1rem' }}>Loading...</span>
                </div>) : (
                    <CustomSlider>
                        {videoChunks.map((chunk, index) => (
                            <div key={index}>
                                <div className="row g-4">
                                    {chunk.map((video) => {
                                        if (!video.snippet || !video.snippet.thumbnails || !video.snippet.resourceId) return null;
                                        const { title, thumbnails, resourceId } = video.snippet;
                                        const videoId = resourceId?.videoId;
                                        if (!videoId || !thumbnails?.medium?.url) return null;
                                        return (
                                            <div className="col-md-3 col-sm-6" key={videoId}>
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
                                </div>
                            </div>
                        ))}
                    </CustomSlider>
                )}
                <VideoModal selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
            </div>
        </section>
    );
}
export default VideosPage;