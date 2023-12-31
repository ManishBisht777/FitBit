import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <main>
      <section className="relative container p-10 bg-primary text-primary-foreground rounded-[3rem] mt-4">
        <h1 className=" font-heading md:text-2xl tracking-tight font-semibold  uppercase border-b-2 pb-2 border-black/70 offset">
          Make you body fit this spring with us
        </h1>
        <Image
          className="md:absolute md:flex hidden top-28 right-20 rotate-45"
          src="/decoration.svg"
          aria-hidden
          alt="decoration image"
          width={150}
          height={150}
        />

        <div className="flex flex-col gap-2 mt-6 lg:text-9xl md:text-5xl text-3xl font-heading tracking-tighter uppercase">
          <div className="flex gap-2 items-center">
            <p>Improve your</p>
            <div className="relative md:flex hidden md:w-24 md:h-24 w-10 h-10">
              <Image
                aria-hidden
                className="bg-blend-overlay w-28"
                src="/bicep.png"
                alt="bicep icon"
                fill
              />
            </div>
          </div>
          <p>Fitness level for</p>
          <div className="flex md:flex-row flex-col md:items-center items-start justify-between">
            <div className="flex md:gap-6 gap-2 md:flex-row flex-col md:items-center items-start">
              <p>The better</p>
              <p className="md:text-base text-xs font-sans font-medium tracking-normal capitalize w-60">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
                dicta?
              </p>
            </div>
            <Button
              className={cn(
                "mx-10 bg-orange-500 md:px-20 md:py-10 md:mt-0 mt-4 tracking-wider rounded-full md:text-3xl text-xl"
              )}
            >
              FREE PASS
            </Button>
          </div>
        </div>

        <div className="md:grid md:grid-cols-5 gap-4 mt-10">
          <div className="col-span-2">
            <div className="flex flex-col">
              <Image
                className="md:flex hidden rounded-3xl overflow-hidden bg-black border-[.5rem] border-black"
                src="/home_bg2.jpg"
                alt="home image"
                width={800}
                height={800}
              />

              <div className="md:flex hidden gap-2 items-center my-4 flex-wrap">
                <span className="rounded-full text-xs md:text-base text-primary md:px-10 md:py-3 px-2 py-1 bg-black text-white">
                  More than
                </span>
                <span className="rounded-full text-xs md:text-base text-primary md:px-10 md:py-3 px-2 py-1 bg-orange-400">
                  950
                </span>
                <span className="rounded-full text-xs md:text-base text-primary md:px-10 md:py-3 px-2 py-1 bg-black text-white">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-3 ">
            <Image
              className="w-full h-full object-cover rounded-3xl bg-black border-[.5rem] border-black"
              src="/home_img.webp"
              alt="home image"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="container md:my-10 mt-4 p-10 text-/90 flex justify-center md:gap-14 gap-4">
        <Icons.Slack className="md:w-20 md:h-20 w-10 h-10 text-white/70" />
        <Icons.Gitlab className="md:w-20 md:h-20 w-10 h-10 text-white/70" />
        <Icons.Dribbble className="md:w-20 md:h-20 w-10 h-10 text-white/70" />
        <Icons.Pocket className="md:w-20 md:h-20 w-10 h-10 text-white/70" />
        <Icons.Trello className="md:w-20 md:h-20 w-10 h-10 text-white/70" />
        <Icons.Hexagon className="md:w-20 md:h-20 w-10 h-10 text-white/70" />
      </section>

      <section className="container p-10 text-primary">
        <h3 className="font-heading lg:text-6xl md:text-3xl text-xl uppercase">
          Facilities at fitness rhinos
        </h3>
        <p className="text-primary/80 text-sm mt-4 max-w-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum non
          natus eveniet architecto fuga molestias similique? Voluptatem
          veritatis.
        </p>

        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-10 mt-6 ">
          <div className="bg-slate-900 relative rounded-3xl px-6 py-16 flex items-end flex-col gap-4">
            <Icons.CalendarDays className="w-12 h-12 text-slate-400" />
            <p className="md:text-4xl text-2xl uppercase font-heading">
              timetable
            </p>
            <p className="text-end md:text-base text-sm text-primary/70">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
              quisquam.
            </p>
            <div className="absolute left-8 -bottom-4 w-12 aspect-square rounded-full bg-orange-400 flex justify-center items-center">
              <Icons.MoveRight className=" text-white" />
            </div>
          </div>
          <div className="bg-slate-900 relative rounded-3xl px-6 py-16 flex items-end flex-col gap-4">
            <Icons.Users className="w-12 h-12 text-slate-400" />
            <p className="md:text-4xl text-2xl uppercase font-heading">club</p>
            <p className="text-end md:text-base text-sm text-primary/70">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
              quisquam.
            </p>
            <div className="absolute left-8 -bottom-4 w-12 aspect-square rounded-full bg-orange-400 flex justify-center items-center">
              <Icons.MoveRight className=" text-white" />
            </div>
          </div>
          <div className="bg-slate-900 relative rounded-3xl px-6 py-16 flex items-end flex-col gap-4">
            <Icons.Tv2 className="w-12 h-12 text-slate-400" />
            <p className="md:text-4xl text-2xl uppercase font-heading">class</p>
            <p className="text-end md:text-base text-sm text-primary/70">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
              quisquam.
            </p>
            <div className="absolute left-8 -bottom-4 w-12 aspect-square rounded-full bg-orange-400 flex justify-center items-center">
              <Icons.MoveRight className=" text-white" />
            </div>
          </div>
        </div>
      </section>

      <section className="container p-10 text-primary ">
        <h3 className="text-center font-heading lg:text-6xl md:text-3xl text-xl uppercase">
          Our Fitness class
        </h3>
        <div className="md:flex hidden gap-8 justify-center md:mt-10 mt-4 font-heading md:text-3xl text-sm text-primary/50 uppercase">
          <span>all</span>
          <span>signature class</span>
          <span className="text-primary decoration-orange-400 underline-offset-8 underline">
            strenght and conditioning
          </span>
          <span>mind and body</span>
          <span>cycling</span>
          <span>cardio</span>
        </div>
        <div className="h-fit flex md:flex-row flex-col md:gap-6 gap-2 md:mt-10 mt-4">
          <div className="md:flex hidden py-10 flex-col-reverse justify-between items-center font-heading text-3xl uppercase bg-slate-800 p-3 rounded-2xl">
            <p className="flex flex-col px-8 items-center">
              <span className="rotate-[270deg] -my-2">t</span>
              <span className="rotate-[270deg] -my-2">a</span>
              <span className="rotate-[270deg] -my-2">b</span>
              <span className="rotate-[270deg] -my-2">m</span>
              <span className="rotate-[270deg] -my-2">o</span>
              <span className="rotate-[270deg] -my-2">c</span>
              <span className="rotate-[270deg] -my-2">y</span>
              <span className="rotate-[270deg] -my-2">d</span>
              <span className="rotate-[270deg] -my-2">o</span>
              <span className="rotate-[270deg] -my-2">B</span>
            </p>
            <Icons.MoveRight className="rotate-[270deg]" />
          </div>
          <Image
            className="rounded-3xl overflow-hidden border-[.5rem] border-white"
            src="/home_bg2.jpg"
            alt="home image"
            width={800}
            height={800}
          />

          <div className="flex flex-col gap-4 max-w-lg md:py-10 py-4">
            <p className="font-heading md:text-4xl text-xl uppercase">
              Body pump
            </p>
            <p className="text-xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              neque, corporis, rerum unde quae hic quis dolorem animi libero
              veniam fuga voluptatibus blanditiis obcaecati eaque omnis
              repudiandae sapiente eius placeat.
            </p>
            <div className="w-full h-full bg-orange-400 rounded-2xl"></div>
          </div>
        </div>
      </section>

      <section className="container my-10 p-10 text-center md:flex hidden justify-center relative">
        <div className="flex flex-wrap font-heading text-4xl text-primary max-w-xl">
          THE LAST THREE OR FOUR REPS IS WHAT MAKES THE MUSCLE GROW. THIS AREA
          OF PAIN DIVIDES A CHAMPION FROM SOMEONE WHO IS NOT A CHAMPION.
        </div>
        <Image
          className="absolute top-0 right-20 rotate-45"
          src="/decoration.svg"
          aria-hidden
          alt="decoration image"
          width={150}
          height={150}
        />
      </section>

      <section className="container font-heading md:p-10 p-2 py-4 text-primary-foreground bg-primary rounded-[3rem] mt-4">
        <h4 className="md:text-5xl text-xl uppercase text-center">
          Choose the right plan
        </h4>
        <p className="text-center md:text-base text-sm text-primary-foreground/80 md:mt-4 mt-2">
          Choose the plan that suits you
        </p>
        <div className="mt-6 text-primary bg-primary-foreground md:p-10 p-2 rounded-[3rem]">
          <div className="py-6 border-b flex md:flex-row flex-col justify-between items-center">
            <div>
              <h4 className="md:text-5xl text-xl uppercase text-center">
                starter fitness program
              </h4>
              <p className="flex gap-4 md:ml-4 text-primary/80 mt-4">
                <span>5 Days a Week</span> <span>01 Sweat shirt</span>
                <span>01 Bottle of protein</span>
              </p>
            </div>
            <span className="md:flex hidden">Basic plan</span>
          </div>
          <div className="py-6 border-b flex justify-between items-center">
            <div>
              <h4 className="md:text-5xl text-xl uppercase text-center">
                Beginner fitness program
              </h4>
              <p className="flex gap-4 ml-4 text-primary/80 mt-4">
                <span>5 Days a Week</span> <span>01 Sweat shirt</span>
                <span>Access to videos</span>
              </p>
            </div>
            <span className="md:flex hidden">Professional plan</span>
          </div>
          <div className="py-6 flex justify-between items-center">
            <div>
              <h4 className="md:text-5xl text-xl uppercase text-center">
                Advance fitness program
              </h4>
              <p className="flex gap-4 ml-4 text-primary/80 mt-4">
                <span>01 Sweat shirt</span>
                <span>01 Bottle of protein</span> <span>Many more</span>
              </p>
            </div>
            <span className="md:flex hidden">Advance plan</span>
          </div>
        </div>
      </section>

      <section className="container md:my-10 my-4 md:p-10 py-2 flex relative">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col font-heading md:text-6xl text-xl gap-2 text-primary max-w-xl uppercase">
            <p>GET a life style</p>
            <p>Easily and fun here</p>
          </div>
          <div className="bg-black/10 flex justify-center items-center md:w-24 w-10 aspect-square text-white rounded-full border-2 border-dashed border-orange-400">
            <Icons.MoveRight className="rotate-[305deg] w-16" />
          </div>
        </div>
      </section>

      <section className="container font-heading md:text-5xl text-xl text-primary/50 md:my-10 py-4 p-10 border-y-2 border-primary-foreground/50 uppercase">
        feel great. <span className="text-primary">body and mind.</span>
      </section>

      <section className="flex justify-center gap-6 font-heading text-primary md:text-4xl text-base">
        <span className="text-primary/50">Email</span>
        <span>Manishbishtdev@gmail.com</span>
      </section>
    </main>
  );
}
