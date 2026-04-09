type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  invert?: boolean;
};

const SectionHeading = ({ eyebrow, title, description, invert = false }: SectionHeadingProps) => {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className={`eyebrow justify-center ${invert ? "text-secondary" : ""}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-3xl font-bold md:text-5xl ${invert ? "text-white" : "text-base-content"}`}>
        {title}
      </h2>
      <p
        className={`mt-5 text-sm leading-7 md:text-base md:leading-8 ${
          invert ? "text-white/72" : "text-base-content/70"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
