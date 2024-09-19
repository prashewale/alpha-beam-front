import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';

const LogoCarousel: React.FC = () => {
  const logos = [
    {
      brandName: 'plastimo',
      imageUrl: 'img/partner_logos/partner-1.png',
    },
    {
      brandName: 'sionix',
      imageUrl: 'img/partner_logos/partner-2.png',
    },
    {
      brandName: 'fusion',
      imageUrl: 'img/partner_logos/partner-3.png',
    },
    {
      brandName: 'germin',
      imageUrl: 'img/partner_logos/partner-4.png',
    },
    {
      brandName: 'mgnetron',
      imageUrl: 'img/partner_logos/partner-5.png',
    },
    {
      brandName: 'onwa',
      imageUrl: 'img/partner_logos/partner-6.png',
    },
    {
      brandName: 'inmarsat',
      imageUrl: 'img/partner_logos/partner-7.png',
    },
    {
      brandName: 'intellian',
      imageUrl: 'img/partner_logos/partner-8.png',
    },
    {
      brandName: 'lowrance',
      imageUrl: 'img/partner_logos/partner-9.png',
    },
    {
      brandName: 'shakesphere-global',
      imageUrl: 'img/partner_logos/partner-10.png',
    },
    {
      brandName: 'sailor',
      imageUrl: 'img/partner_logos/partner-11.png',
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="!container mx-auto mb-12 flex flex-col justify-center gap-6 px-4">
      <div className="flex justify-center">
        <span className="text-[36px] font-semibold text-gray-800">
          Choose by brands
        </span>
      </div>
      <div className="flex justify-center">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {logos.map((item, index) => {
            return (
              <div
                className="flex w-48 cursor-pointer items-center justify-center bg-[#f5f6f6] px-3 py-2 transition ease-in-out hover:-translate-x-2 hover:-translate-y-2"
                key={index}
                onClick={() => navigate(`/products?brand=${item.brandName}`)}
              >
                <img src={item.imageUrl} className="max-h-24" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
