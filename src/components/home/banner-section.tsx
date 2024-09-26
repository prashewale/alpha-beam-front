const BannerSection = () => {
  const categoriesInfo = [
    {
      title: 'BOAT FLEET \n MANAGEMENT',
      url: '/products',
      icon: '/img/icon/1.svg',
    },
    {
      title: 'SERVICES ASSISTANCE',
      url: '/products',
      icon: '/img/icon/2.svg',
    },
    {
      title: 'COMMANDO RADARS',
      url: '/products',
      icon: '/img/icon/3.svg',
    },
    {
      title: 'SATELLITE PRODUCTS',
      url: '/products',
      icon: '/img/icon/4.svg',
    },
    {
      title: 'BEST \n BRANDS',
      url: '/products',
      icon: '/img/icon/5-1.svg',
    },
    {
      title: 'TRUSTED PRODUCTS',
      url: '/products',
      icon: '/img/icon/6.svg',
    },
  ];
  return (
    <div className="mx-28 mt-20">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {categoriesInfo.map((item, index) => (
          <div
            className="flex flex-col items-center justify-center gap-3"
            key={index}
          >
            <div className="flex h-36 w-36 items-center justify-center rounded-xl bg-[#E6E7E8] p-4">
              <img src={item.icon} alt="" />
            </div>
            <div className="flex w-full justify-center">
              <h4 className="flex max-w-36 flex-col text-center text-base font-bold text-[#005580]">
                {item.title.split('\n').map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSection;
