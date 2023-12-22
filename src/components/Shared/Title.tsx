import type { ReactNode } from "react";

interface TitleProps {
  title: string;
  image: ReactNode;
}
const Title: React.FC<TitleProps> = ({
  title,
  image
}) => {
  return (
    <div className="relative mb-12">
      <article className="relative p-4 bg-gradient-to-br from-primary to-secondary
       text-white text-3xl rounded-xl flex justify-center items-center gap-x-2 font-MontserratAlternates">
        <span>{image}</span>
        {title}
        <aside className="absolute inset-0 border-4 border-primary rounded-xl"></aside>
      </article>
    </div>
  )
};

export default Title;