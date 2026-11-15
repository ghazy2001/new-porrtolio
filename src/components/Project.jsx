import { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import PropTypes from "prop-types";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between py-6 sm:py-10 gap-4 sm:gap-6"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="flex-1 min-w-0">
          <p className="text-xl sm:text-2xl font-bold break-words">{title}</p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 text-sand text-xs sm:text-sm font-medium">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="inline-block px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-sand whitespace-nowrap"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="inline-flex items-center gap-1.5 self-start sm:self-center px-4 py-2 sm:px-0 sm:py-0 text-sm font-semibold cursor-pointer hover-animation text-neutral-300 hover:text-white shrink-0"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="arrow" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subDescription: PropTypes.arrayOf(PropTypes.string).isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setPreview: PropTypes.func.isRequired,
};
