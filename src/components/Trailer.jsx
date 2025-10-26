const Trailer = () => {
    return (<div className="flex justify-content-center">
        <iframe
            style={{ width: '40rem', height: '20rem' }}
            src="https://www.youtube.com/embed/5c0NBXsoLr4?start=60"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    </div>);
}

export default Trailer;