import { motion } from "framer-motion";
import "./Test.css";
import images from "./image";

function Test() {
  return (
    <div className="test">
      <motion.div className="carousel">
        <motion.div
            drag="x"
            dragConstraints={{right: 0, left:-1100}}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
            className="inner-carousel"
        >
          {images.map((image) => {
            return (
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 2 }}
                className="item"
                transition={{ duration: 3 }}
                key={image}
              >
                <img
                  src={image}
                  alt="image"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Test;