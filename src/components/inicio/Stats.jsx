import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target.replace(/[^0-9]/g, ""), 10);
    if (start === end) return;

    const totalMilSecDur = duration;
    const incrementTime = 30;
    const step = (end / (totalMilSecDur / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count.toLocaleString()}+</>;
};

const Stats = () => {
  const data = [
    { value: "3000+", label: "Estudiantes Activos" },
    { value: "13+", label: "Carreras Disponibles" },
    { value: "11+", label: "Sedes de Estudio" },
    { value: "40000+", label: "Horas de Clases" },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  return (
    <section ref={ref} className="bg-white py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {data.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={variants}
            initial="hidden"
            animate={controls}
            className="flex flex-col items-center justify-center group"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 transition-transform duration-300 group-hover:scale-110">
              {inView ? <Counter target={item.value} duration={1500} /> : "0+"}
            </h2>
            <p className="mt-2 text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
