import { solutionDetails } from '@/constants';

const SolutionList = () => {
  return (
    <section className="product-shop spad productDeatils">
      <div className="container">
        {solutionDetails.map((item, index) => (
          <div key={index}>
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
                  <div className="flex gap-2">
                    <a className="gradient-btn cursor-pointer px-3 py-2 text-sm font-semibold">
                      Know More
                    </a>
                    <a className="cursor-pointer rounded-xl border-none bg-[#FE5639] p-2 px-3 py-[5px] text-sm text-white outline-none">
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr className="brd-line" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionList;
