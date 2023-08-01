interface HeadingProps {
  title: string;
  description: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h2 className="md:text-3xl text-lg font-bold tracking-tight">{title}</h2>
      <p className="md:text-sm text-xs text-muted-foreground md:mt-2">
        {description}
      </p>
    </div>
  );
};
