import '../../styles/Wrapper.css';

export const Wrapper = ({ children, className = '' }) => {
  return (
    <section className={`wrapper ${className}`}>
      {children}
    </section>
  );
};
