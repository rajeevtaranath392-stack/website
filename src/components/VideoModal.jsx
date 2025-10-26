import ReactPlayer from 'react-player';
const VideoModal = ({ selectedVideo, setSelectedVideo }) => {
    return (<div
        className={`modal fade ${selectedVideo ? 'show d-block' : ''}`}
        tabIndex="-1"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        role="dialog"
        onClick={() => setSelectedVideo(null)}
    >
        <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="modal-content">
                <div className="modal-header">
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setSelectedVideo(null)}
                    ></button>
                </div>
                <div className="modal-body p-0">
                    {selectedVideo && (
                        <div className="ratio ratio-16x9">
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${selectedVideo}`}
                                playing
                                controls
                                width="100%"
                                height="100%"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>);
}


export default VideoModal;