import TopStories from "./TopStories";

export const MUSICAL_INSIGHTS_BY_RAJEEV_TARANATH = 'Press Quotes';

const Intro = () => {
  return (
    <section id="/">
      <div className="section-highlight-bg">
        <img src="images/main.png" style={{
          width: '100%',
        }} />
        <p className="section-highlight fw-500 p-2 mx-auto welcome-message real-quote-message mt-3">
          This space is dedicated to honoring the life, artistry, and teachings of <span className="fw-bolder">Rajeev Taranath</span>. Through music, writings, interviews, and personal reflections, we celebrate his extraordinary legacy and share it with a global community.
          May this archive inspire listeners and musicians across generations, and keep alive the depth, beauty, and spirit of his work.
        </p>
      </div>
      <TopStories type='biography' />
      <TopStories type='videos' />
      <TopStories type={MUSICAL_INSIGHTS_BY_RAJEEV_TARANATH} />
      <TopStories type='articles' />
      <TopStories type='discography' />
    </section>
  );
};

export default Intro;
