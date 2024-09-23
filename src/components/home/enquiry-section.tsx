const EnquirySection = () => {
  return (
    <section className="mt-20 bg-[#f1f2f2] py-12">
      <div className="container-fluid contact-form">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2 className="mb-0">Book Your appointment today</h2>
              <p>Or Send your enquiry to us</p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex flex-col gap-3">
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Name"
                className="rounded-lg !border !border-gray-400 bg-[#f1f2f2] p-2 !text-gray-400"
              />
              <input
                type="text"
                placeholder="+974"
                className="rounded-lg !border !border-gray-400 bg-[#f1f2f2] p-2 !text-gray-400"
              />
              <input
                type="text"
                placeholder="Email"
                className="rounded-lg !border !border-gray-400 bg-[#f1f2f2] p-2 !text-gray-400"
              />
            </div>
            <input
              type="text"
              placeholder="Enquiry"
              className="rounded-lg !border !border-gray-400 bg-[#f1f2f2] p-2 !text-gray-400"
            />

            <button
              type="submit"
              className="mx-auto mt-2 w-[330px] rounded-lg bg-[#1d8aca] py-2 text-sm text-white"
            >
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
