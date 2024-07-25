import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { clients } from "@/lib/constant";


export default function Home() {
  return (
    <main className="dark flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <Button
              size={'lg'}
              className="group mb-8 flex w-full items-center justify-center gap-4 rounded-full border-t-2 border-[#4D4D4D] bg-[#1F1F1F] p-8 text-2xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-neutral-500 sm:w-fit md:mb-0"
            >
              <span className="goup-hover:to-black bg-gradient-to-r from-neutral-500 to-neutral-600 bg-clip-text font-sans text-transparent group-hover:bg-gradient-to-r group-hover:from-black md:text-center">
                Start For Free Today
              </span>
            </Button>
            <h1 className="bg-gradient-to-b from-white to-neutral-600 bg-clip-text font-sans text-5xl font-bold text-transparent md:text-8xl">
              Automate Your Work With Fuzzie
            </h1>
          </div>
        }
      />
      <InfiniteMovingCards
        className="mt-[-100px] md:mt-[18rem]"
        items={clients}
        direction="right"
        speed="slow"
      />
    </main>
  );
}
