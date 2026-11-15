import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-80 md:w-96 cursor-pointer overflow-hidden rounded-2xl border p-5 border-white/10 bg-midnight/90 backdrop-blur-md hover:border-blue-500/40 hover:bg-navy/90 transition-all duration-300 shadow-lg",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img
          className="rounded-full bg-white/10 object-cover border border-white/20"
          width="40"
          height="40"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-xs font-mono text-neutral-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-3 text-xs leading-relaxed text-neutral-300">
        &ldquo;{body}&rdquo;
      </blockquote>
    </figure>
  );
};

ReviewCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default function Testimonial() {
  if (!reviews || reviews.length === 0) return null;
  return (
    <div className="items-start mt-25 md:mt-35 c-space" id="endorsements">
      <h2 className="text-heading">Endorsements &amp; PR Reviews</h2>
      <p className="text-sm text-neutral-400 mt-2">
        Direct feedback from enterprise project leads, systems architects, and open-source maintainers.
      </p>
      <div className="relative flex flex-col items-center justify-center w-full mt-10 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s] mt-4">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/6 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/6 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
