import React from "react";
import { motion } from "framer-motion";
import SectionTwoVideos from "./section-two-videos.json";
import "./PECCLEC.css";

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ title, url_video, hueA, hueB }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container-pecclec"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash-pecclec" style={{ background }} />
      <motion.div className="card-pecclec" variants={cardVariants}>
        <h1>{title}</h1>
        <iframe 
          src={url_video} 
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen></iframe>
      </motion.div>
    </motion.div>
  );
}

const PECCLEC = () => {
  return (
    <section className="pecclec-main-container">
      <section className="section-two-videos">
        <h1 className="title">Modelajes para Plan de Evaluación, Recopilación de Evidencias y Cierre de Evaluación</h1>
        <div className="pecclec-container">
          {
            SectionTwoVideos.map(([title, url_video, hueA, hueB], index) => (
                <Card 
                  key={index} 
                  title={title}
                  url_video={url_video} 
                  hueA={hueA} 
                  hueB={hueB} 
                />
            ))
          }
        </div>
      </section>
    </section>
  );
};

export default PECCLEC;