import { motion } from "motion/react";
import PropTypes from "prop-types";
const Card = ({ style, text, image, containerRef, className }) => {
  return image && !text ? (
    <motion.img
      className={`absolute cursor-grab ${className || "w-15"}`}
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

Card.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string,
  image: PropTypes.string,
  containerRef: PropTypes.object,
  className: PropTypes.string,
};

export default Card;
