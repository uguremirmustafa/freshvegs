import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const List = [
  {
    className: 'leafy-greens',
    name: 'Leafy Greens',
    href: '#',
  },
  {
    className: 'cabbage',
    name: 'Cabbage',
    href: '#',
  },
  {
    className: 'marrow',
    name: 'Marrow',
    href: '#',
  },
  {
    className: 'root',
    name: 'Root',
    href: '#',
  },
  {
    className: 'celery',
    name: 'Celery',
    href: '#',
  },
  {
    className: 'garlic',
    name: 'Garlic',
    href: '#',
  },
];
export default function Categories() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.01 });
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
    if (!inView) {
      controls.start({ opacity: 0 });
    }
  }, [controls, inView]);
  return (
    <>
      <motion.h3 ref={ref} animate={controls} className="startShopping">
        Start Shopping
      </motion.h3>
      <div className="categories">
        {List.map((item) => (
          <Category
            key={item.className}
            className={item.className}
            name={item.name}
            href={item.href}
          />
        ))}
      </div>
    </>
  );
}

export const Category = ({ className, name, href }) => {
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
  const { ref, inView } = useInView({ threshold: 0.5 });
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
      className={className}
    >
      <Link href={href}>{name}</Link>
    </motion.div>
  );
};
