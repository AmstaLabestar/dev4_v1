type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-base-content md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-base-content/70 md:text-base">{description}</p>
    </div>
  );
};

export default SectionHeading;
