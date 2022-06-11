import "./styles.css";

const Banner = () => {
  return (
    <div className="ContainerBanner">
      <div className="BannerSlogan">
        <h2>
          We sell everything,
          <br />
          except purple things
        </h2>
      </div>
      <div className="BannerPicture">
        {/* <div className="Picture">
          <h2>What a beautiful picture</h2>
        </div> */}
      </div>
    </div>
  );
};

export { Banner };
