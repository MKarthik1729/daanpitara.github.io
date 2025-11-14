import { motion } from 'framer-motion';

const logos = [
  { src: '/org1.jpg', alt: 'Organization 1' },
  { src: '/org2.avif', alt: 'Organization 2' },
  { src: '/org3.jpg', alt: 'Organization 3' },
  { src: '/org1.jpg', alt: 'Organization 1' },
  { src: '/org2.avif', alt: 'Organization 2' },
  { src: '/org3.jpg', alt: 'Organization 3' },
];

const ClientLogos = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="py-12 bg-gray-50 w-full overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 
          className="text-3xl font-bold mb-8"
          style={{
            color: 'var(--Grey-3, #4C4B4B)',
            fontFamily: 'Satoshi',
            fontSize: '32px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '36px',
          }}
        >
          Our Happy Clients
        </h2>
        <div className="relative h-24">
          <motion.div
            className="absolute flex"
            animate={{
              x: ['-100%', '0%'],
              transition: {
                ease: 'linear',
                duration: 20,
                repeat: Infinity,
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 mx-4 flex items-center justify-center">
                <img src={logo.src} alt={logo.alt} className="h-16 object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
