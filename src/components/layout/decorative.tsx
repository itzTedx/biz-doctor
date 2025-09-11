interface Props {
  children?: React.ReactNode;
}

export const Decorative = ({ children }: Props) => {
  return (
    <div className="-mt-12">
      <div className="h-24 w-full rounded-3xl bg-card" />
      <div className="relative mx-auto flex h-16 max-w-3xl items-center justify-center gap-3 rounded-b-4xl bg-card">
        {children}
        <div className="absolute right-full h-full w-16">
          <div className="absolute top-0 right-0 size-1/2 bg-card" />
          <div className="absolute top-0 right-0 size-full rounded-full bg-background" />
        </div>
        <div className="absolute left-full h-full w-16">
          <div className="absolute top-0 left-0 size-1/2 bg-card" />
          <div className="absolute top-0 right-0 size-full rounded-full bg-background" />
        </div>
      </div>
    </div>
  );
};
