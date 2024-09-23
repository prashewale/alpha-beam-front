const VideoBannerSection = () => {
  return (
    <div className="instagram-photo mt-20 flex flex-1 gap-2">
      <div
        className="insta-item set-bg"
        // data-setbg="img/insta-1.jpg"
        style={{
          backgroundImage: `url("img/insta-1.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // height: "",
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div className="inside-text">
          <h5>
            <a href="#">Why NX?</a>
          </h5>
          <a href="#" className="btn btn-primary btn-watch">
            {' '}
            Watch Now
          </a>
        </div>
      </div>
      <div
        className="insta-item set-bg"
        style={{
          backgroundImage: `url("img/insta-2.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // height: "",
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div className="inside-text">
          <h5>
            <a href="#">Know How to target?</a>
          </h5>
          <a href="#" className="btn btn-primary btn-watch">
            {' '}
            Watch Now
          </a>
        </div>
      </div>
      <div
        className="insta-item set-bg"
        style={{
          backgroundImage: `url("img/insta-3.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // height: "",
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div className="inside-text">
          <h5>
            <a href="#">Why Intellian?</a>
          </h5>
          <a href="#" className="btn btn-primary btn-watch">
            {' '}
            Watch Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoBannerSection;
