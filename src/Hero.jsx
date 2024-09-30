import heroImg from './assets/hero.svg';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS </h1>
          <p>
            I'm baby tofu sus +1 kitsch, scenester messenger bag shabby chic.
            Iceland man bun gochujang sustainable, meggings kinfolk deep v blog
            cred banh mi polaroid you probably haven't heard of them roof party
            vegan. Chia godard distillery fam photo booth, palo santo truffaut
            lumbersexual helvetica cold-pressed.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
