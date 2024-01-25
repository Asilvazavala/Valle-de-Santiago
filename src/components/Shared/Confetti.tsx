import JSConfetti from "js-confetti";

export default function Confetti() {
  const handleClick = () => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
    });
  };

  return (
    <article
      onClick={handleClick}
      className="rounded-full hover:animate-fastWiggle transition 
      bg-white px-1 py-[3px] flex flex-col justify-center items-center text-primary  
      font-MontserratAlternates cursor-pointer animate-wiggle font-semibold
      animate-infinite w-fit lg:px-2 lg:py-[6px]"
    >
      <span className="lg:text-sm text-xs">31</span>
      <span className="lg:text-sm text-xs">años</span>
    </article>
  );
}
