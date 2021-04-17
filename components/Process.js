import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export default function Process() {
  return (
    <div className="process">
      {Data.map((item, index) => (
        <ProcessElement
          index={index + 1}
          image={item.image}
          title={item.title}
          text={item.text}
          width={item.width}
          height={item.height}
        />
      ))}
    </div>
  );
}

export const ProcessElement = ({ index, image, title, text, height, width }) => {
  const categoryVariants = {
    initial: {
      opacity: 0,
      // y: -100,
    },
    animate: {
      opacity: 1,
      // y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
    if (!inView) {
      controls.start('initial');
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      variants={categoryVariants}
      initial="initial"
      animate={controls}
      className={`processElement processElement-${index}`}
    >
      <Image src={image} width={width} height={height} objectFit="cover" alt="soil" />
      <div className="content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </motion.div>
  );
};
const Data = [
  {
    image: '/images/soil.jpg',
    title: 'We process the soil with hands!',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit molestiae recusandae voluptatibus, deserunt accusamus ab qui est aperiam reiciendis.',
    height: 500,
    width: 300,
  },
  {
    image: '/images/sun-panel.jpg',
    title: 'Ecofriendly energy solutions!',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit molestiae recusandae voluptatibus, deserunt accusamus ab qui est aperiam reiciendis.',
    height: 600,
    width: 600,
  },
  {
    image: '/images/field.jpg',
    title: 'Fair bargains with the local farmers!',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit molestiae recusandae voluptatibus, deserunt accusamus ab qui est aperiam reiciendis.',
    height: 900,
    width: 800,
  },
];
