const QuoteCard = ({ quote, avatar }) => {
    return (
        <div className="item text-center px-5 d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '14rem' }}>
            <p className="text-4 quote-message">
                {quote.quote}
            </p>
        </div>
    )
}

export default QuoteCard;