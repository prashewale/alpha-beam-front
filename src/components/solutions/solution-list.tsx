import { solutionDetails } from '@/constants';

const SolutionList = () => {
  return (
    <section className="product-shop spad productDeatils">
      <div className="container">
        {solutionDetails.map((item, index) => (
          <>
            <div className="row">
              <div className="col-md-6">
                <img src={item.imageUrl} />
              </div>
              <div className="col-md-6">
                <div className="solution-content">
                  <h3>{item.title}</h3>
                  <p className="mb-3 ml-3">
                    <ul className="list-disc">
                      {item.solutionItems.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </p>
                  <div className="action">
                    <a
                      href="#"
                      className="prodt-btn border-gradient border-gradient-purple"
                    >
                      Know More
                    </a>
                    <a href="#" className="prodt-btn btn-red">
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr className="brd-line" />
          </>
        ))}
      </div>
    </section>
  );
};

export default SolutionList;
