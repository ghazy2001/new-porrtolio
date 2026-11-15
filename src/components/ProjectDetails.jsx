import { motion } from "motion/react";
import PropTypes from "prop-types";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-hidden backdrop-blur-sm bg-black/60">
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border shadow-2xl rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-full top-4 right-4 bg-midnight/80 hover:bg-neutral-700 border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <img src="assets/close.svg" className="w-5 h-5" alt="close" />
        </button>
        <img src={image} alt={title} className="w-full max-h-72 object-cover rounded-t-2xl" />
        <div className="p-5 sm:p-6">
          <h5 className="mb-2 text-xl sm:text-2xl font-bold text-white break-words">{title}</h5>
          <p className="mb-3 font-normal text-sm sm:text-base text-neutral-300">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-2 text-xs sm:text-sm font-normal text-neutral-400 leading-relaxed">
              {subDesc}
            </p>
          ))}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10"
                  title={tag.name}
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="size-5 object-contain"
                  />
                  <span className="text-xs text-neutral-300 font-medium">{tag.name}</span>
                </div>
              ))}
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 font-semibold text-xs sm:text-sm text-black bg-white rounded-lg hover:bg-neutral-200 transition-colors shrink-0"
            >
              View Project <img src="assets/arrow-up.svg" className="size-3.5" alt="arrow" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;

ProjectDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subDescription: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
  href: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
