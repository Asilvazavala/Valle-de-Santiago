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
      <img 
        src="/images/BannerTitulo.png"
        alt="Banner"
        title="Banner"
        className="w-[25rem] h-20"
      />
      <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
       font-MontserratAlternates font-semibold text-3xl text-primary flex justify-center items-center gap-x-4">
        <span>{image}</span>
        {title}
      </h2>
    </div>
  )
};

export default Title;