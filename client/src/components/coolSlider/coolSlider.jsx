import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./coolSlider.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const CoolSlider = () => {
  return (
    <div className="container">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div className="imageDiv">
          {" "}
          <img
            src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653248414/surf%20boards/jeremy-bishop-_CFv3bntQlQ-unsplash_vomxfv.jpg"
            alt="surfimage1"
          />
        </div>
        <div className="imageDiv">
          <img
            src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653248414/surf%20boards/austin-neill-uHD0uyp79Dg-unsplash_mtclze.jpg"
            alt="surfimage2"
          />
        </div>
        <div className="imageDiv">
          <img
            src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653248414/surf%20boards/zachary-shea-MAFUZ8Nh7XQ-unsplash_odfnxa.jpg"
            alt="surfimage3"
          />
        </div>
        <div className="imageDiv">
          <img
            src="https://res.cloudinary.com/dqexqyy2j/image/upload/v1653250780/surf%20boards/lacie-slezak-7yqyQQXgOT8-unsplash_kgnle9.jpg"
            alt="surfimage4"
          />
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default CoolSlider;
