import './slider.css'
import SagoKonseri from '../../assets/images/sagoKonseri.jpg';
import ZaferAlagoz from '../../assets/images/zaferAlagöz.png';

const SliderComp = () => {
  return (
    <div className="bodySlider">
      <div className="carousel">
        <div className="carousel-inner">
          <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden checked={true} />
          <div className="carousel-item">
            <img src="https://picsum.photos/1100/500?random=1" />
          </div>
          <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden checked={true} />
          <div className="carousel-item">
            <img src={ZaferAlagoz} />
          </div>
          <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden checked={true} />
          <div className="carousel-item">
            <img src={SagoKonseri} />
          </div>
          <label htmlFor="carousel-3" className="carousel-control prev control-1">
            ‹
          </label>
          <label htmlFor="carousel-2" className="carousel-control next control-1">
            ›
          </label>
          <label htmlFor="carousel-1" className="carousel-control prev control-2">
            ‹
          </label>
          <label htmlFor="carousel-3" className="carousel-control next control-2">
            ›
          </label>
          <label htmlFor="carousel-2" className="carousel-control prev control-3">
            ‹
          </label>
          <label htmlFor="carousel-1" className="carousel-control next control-3">
            ›
          </label>
          <ol className="carousel-indicators">
            <li>
              <label htmlFor="carousel-1" className="carousel-bullet">
                •
              </label>
            </li>
            <li>
              <label htmlFor="carousel-2" className="carousel-bullet">
                •
              </label>
            </li>
            <li>
              <label htmlFor="carousel-3" className="carousel-bullet">
                •
              </label>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SliderComp;
