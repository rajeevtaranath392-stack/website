const NewsCard = ({ project }) => {
    const navigateToNews = () => {
        if (project?.document?.url?.link)
            window.open(project?.document?.url?.link, "_blank");
    }
    return (<div className="col-lg-4">
        <div className="card w-100 h-100 d-flex flex-column">
            <div className="card-body flex-grow-1 px-4">
                <div className="d-flex flex-column h-100">
                    <div className="flex-grow-1">
                        <h5 className="card-title" style={{
                            cursor: 'pointer'
                        }}
                            onClick={() => navigateToNews()}>
                            {project.title}
                        </h5>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        {project?.document?.date && <div className="fw-500 text-1 flex-grow-1 d-flex"><em>{project?.document?.date}</em></div>}
                        {project?.document?.author && <div className="fw-600 text-1">{`- ${project?.document?.author}`}</div>}
                    </div>
                </div>
            </div>
            <div className="card-footer bg-white py-0 d-flex align-items-center justify-content-between">
                <button type="button" className="btn btn-outline-primary py-0 px-0" style={{ height: '2rem', width: '5rem' }} onClick={() => navigateToNews()}>
                    <i className="fa fa-solid fa-eye me-2"></i>Read</button>
                <img src={project.thumbImage} alt={project.title} style={{
                    width: '8rem',
                    height: '5rem',
                    objectFit: 'contain'
                }} />
            </div>
        </div>
    </div>)
}

export default NewsCard;