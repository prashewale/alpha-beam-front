const CounterClient = () => {
  return (
    <section className="counter">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <div className="count-up">
              <p className="counter-count">2300</p>
              <span className="plus">+</span>
              <h3>Satisfied Clients</h3>
            </div>
          </div>

          <div className="col-md-4  col-lg-4">
            <div className="count-up">
              <p className="counter-count">450</p>
              <span className="plus">+</span>
              <h3>Reliable Product</h3>
            </div>
          </div>

          <div className="col-md-4  col-lg-4">
            <div className="count-up">
              <p className="counter-count">15</p>
              <span className="plus">+</span>
              <h3>Trusted Brands</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterClient;
