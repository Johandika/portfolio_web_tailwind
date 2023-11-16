import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  return (
    <section className="bg-Black ">
      <div
        className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;
