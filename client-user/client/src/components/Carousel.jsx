import Slider from "react-slick";
export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <div className="container mx-auto w-10/12">
        <Slider {...settings}>
          <div className="">
            <img
              className="w-full h-3/6"
              src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/94f8e9882921a8f020fc5263462846e1-1695368415903"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-3/6"
              src=" https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/361c663c1bb42c40d57fba4e2eec9070-1694054714058"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-3/6"
              src=" https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/525911fbfd26e612ea336f2e756f193b-1675838676547"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-3/6"
              src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/c4b37a644132677dfd1f4f1126805a78-1660125200083"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-3/6"
              src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/6ac88edc2faefd9738ee958a127f9206-1691641088761"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-3/6"
              src="https://hokben-images.s3.ap-southeast-3.amazonaws.com/slider/7c8ec314a07e1ee01bb02c0ad0dc7ea7-1680335831001"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </>
  );
}
