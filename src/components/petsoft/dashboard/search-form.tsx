export type SearchFormProps = {
  className?: string;
};

export function SearchForm({ className }: SearchFormProps) {
  return (
    <form className={className}>
      <input type="text" className="h-full w-full bg-white/20" />
    </form>
  );
}
