type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export const PageHeader = (props: PageHeaderProps) => {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-6xl">
          {props.title}
        </h2>
        <p className="md:mt-6 text-base leading-8 text-primary/80">
          {props.subtitle}
        </p>
      </div>
    </div>
  );
};
