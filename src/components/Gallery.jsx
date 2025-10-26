import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import Filter from "./Filter";

const GallerySection = () => {
    const [images, setImages] = useState([]);
    const [imageFilters, setImageFilters] = useState(null);
    const [filterKey, setFilterKey] = useState("*");

    useEffect(() => {
        let url = "";
        if (import.meta.env.MODE === 'development') {
            url = "http://localhost:5000/api/images";
        } else {
            url = "/.netlify/functions/get-images";
        }
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setImageFilters(data);
            })
            .catch((err) => console.error("Error loading images:", err));
    }, []);

    useEffect(() => {
        if (filterKey && imageFilters) {
            if (filterKey === "*") {
                setImages(Object.values(imageFilters).flat() || []);
            } else {
                setImages(imageFilters[filterKey] || []);
            }
        }
    }, [filterKey, imageFilters]);

    const handleFilterKeyChange = (key) => () => setFilterKey(key);

    return (<section id="gallery" className="section">
        <div className="container">
            {imageFilters && <Filter id='gallery' filters={Object.keys(imageFilters)} filterKey={filterKey} handleFilterKeyChange={handleFilterKeyChange} />}
            {images.length > 0 ? (
                <ImageGallery
                    items={images}
                    thumbnailPosition="bottom"
                    showPlayButton={true}
                    showFullscreenButton={false}
                    slideInterval={4000}
                    slideDuration={450}
                    additionalClass="gallery-custom-height"
                />
            ) : (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <span className="spinner-border" role="status" aria-hidden="true"></span>
                    <span style={{ marginLeft: '1rem' }}>Loading...</span>
                </div>
            )}
        </div>
    </section>
    );
};

export default GallerySection;