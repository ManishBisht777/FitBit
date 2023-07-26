import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <main>
      <section className="relative container p-10 bg-background rounded-[3rem] mt-4">
        <h1 className=" font-heading text-2xl tracking-tight font-semibold uppercase text-primary border-b-2 pb-2 border-black/70 offset">
          Make you body fit this spring with us
        </h1>
        <Image
          className="absolute top-28 right-20 rotate-45"
          src="/decoration.svg"
          aria-hidden
          alt="decoration image"
          width={150}
          height={150}
        />

        <div className="flex flex-col gap-2 mt-6 text-9xl font-heading tracking-tighter uppercase text-primary ">
          <div className="flex gap-2 items-center">
            <p>Improve your</p>
            <Image
              aria-hidden
              className="bg-blend-overlay w-28"
              src="/bicep.png"
              alt="bicep icon"
              width={50}
              height={50}
            />
          </div>
          <p>Fitness level for</p>
          <div className="flex items-center justify-between">
            <div className="flex gap-6 items-center">
              <p>The better</p>
              <p className="text-base text-primary/80 font-sans font-medium tracking-normal capitalize w-60">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
                dicta?
              </p>
            </div>
            <Button
              className={cn(
                "mx-10 bg-orange-500 px-20 py-10 tracking-wider rounded-full text-3xl"
              )}
            >
              FREE PASS
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-10">
          <div className="col-span-2">
            <div className="flex flex-col">
              <Image
                className="rounded-3xl overflow-hidden bg-black border-[.5rem] border-black"
                src="/home_bg2.jpg"
                alt="home image"
                width={800}
                height={800}
              />

              <div className="flex gap-2 items-center my-4">
                <span className="rounded-full text-primary px-10 py-3 bg-black text-white">
                  More than
                </span>
                <span className="rounded-full text-primary px-10 py-3 bg-orange-400">
                  950
                </span>
                <span className="rounded-full text-primary px-10 py-3 bg-black text-white">
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

      <section className="container my-10 p-10 text-/90 flex justify-center gap-14">
        <Icons.Slack className="w-20 h-20 text-white/70" />
        <Icons.Gitlab className="w-20 h-20 text-white/70" />
        <Icons.Dribbble className="w-20 h-20 text-white/70" />
        <Icons.Pocket className="w-20 h-20 text-white/70" />
        <Icons.Trello className="w-20 h-20 text-white/70" />
        <Icons.Hexagon className="w-20 h-20 text-white/70" />
      </section>

      <section className="container p-10">
        <h3 className="font-heading text-6xl text-primary-foreground uppercase">
          Facilities at fitness rhinos
        </h3>
        <p className="text-primary-foreground/80 text-sm mt-4 max-w-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum non
          natus eveniet architecto fuga molestias similique? Voluptatem
          veritatis.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-6 text-primary-foreground">
          <div className="bg-slate-900 relative rounded-3xl px-6 py-16 flex items-end flex-col gap-4">
            <Icons.CalendarDays className="w-12 h-12 text-slate-400" />
            <p className="text-4xl uppercase font-heading">timetable</p>
            <p className="text-end text-primary-foreground/70">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
              quisquam.
            </p>
            <div className="absolute left-8 -bottom-4 w-12 aspect-square rounded-full bg-orange-400 flex justify-center items-center">
              <Icons.MoveRight className=" text-white" />
            </div>
          </div>
          <div className="bg-slate-900 relative rounded-3xl px-6 py-16 flex items-end flex-col gap-4">
            <Icons.Users className="w-12 h-12 text-slate-400" />
            <p className="text-4xl uppercase font-heading">club</p>
            <p className="text-end text-primary-foreground/70">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
              quisquam.
            </p>
            <div className="absolute left-8 -bottom-4 w-12 aspect-square rounded-full bg-orange-400 flex justify-center items-center">
              <Icons.MoveRight className=" text-white" />
            </div>
          </div>
          <div className="bg-slate-900 relative rounded-3xl px-6 py-16 flex items-end flex-col gap-4">
            <Icons.Tv2 className="w-12 h-12 text-slate-400" />
            <p className="text-4xl uppercase font-heading">class</p>
            <p className="text-end text-primary-foreground/70">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
              quisquam.
            </p>
            <div className="absolute left-8 -bottom-4 w-12 aspect-square rounded-full bg-orange-400 flex justify-center items-center">
              <Icons.MoveRight className=" text-white" />
            </div>
          </div>
        </div>
      </section>

      <section className="container p-10 text-primary-foreground ">
        <h3 className="text-center font-heading text-6xl uppercase">
          Our Fitness class
        </h3>
        <div className="flex gap-8 justify-center mt-10 font-heading text-3xl text-primary-foreground/50 uppercase">
          <span>all</span>
          <span>signature class</span>
          <span className="text-primary-foreground decoration-orange-400 underline-offset-8 underline">
            strenght and conditioning
          </span>
          <span>mind and body</span>
          <span>cycling</span>
          <span>cardio</span>
        </div>
        <div className="h-fit flex gap-6 mt-10">
          <div className=" flex py-10 flex-col-reverse justify-between items-center font-heading text-3xl uppercase bg-slate-800 p-3 rounded-2xl">
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

          <div className="flex flex-col gap-4 max-w-lg py-10">
            <p className="font-heading text-4xl uppercase">Body pump</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              neque, corporis, rerum unde quae hic quis dolorem animi libero
              veniam fuga voluptatibus blanditiis obcaecati eaque omnis
              repudiandae sapiente eius placeat.
            </p>
            <div className="w-full h-full bg-orange-400 rounded-2xl"></div>
          </div>
        </div>
      </section>

      <section className="container my-10 p-10 text-center flex justify-center relative">
        <div className="flex flex-wrap font-heading text-4xl text-primary-foreground max-w-xl">
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

      <section className="container font-heading p-10 bg-background rounded-[3rem] mt-4">
        <h4 className="text-5xl uppercase text-center">
          Choose the right plan
        </h4>
        <p className="text-center text-primary/80 mt-4">
          Choose the plan that suits you
        </p>
        <div className="mt-6 text-primary-foreground bg-primary p-10 rounded-[3rem]">
          <div className="py-6 border-b flex justify-between items-center">
            <div>
              <h4 className="text-5xl uppercase text-center">
                starter fitness program
              </h4>
              <p className="flex gap-4 ml-4 text-primary-foreground/80 mt-4">
                <span>5 Days a Week</span> <span>01 Sweat shirt</span>
                <span>01 Bottle of protein</span>
              </p>
            </div>
            <span>Basic plan</span>
          </div>
          <div className="py-6 border-b flex justify-between items-center">
            <div>
              <h4 className="text-5xl uppercase text-center">
                Beginner fitness program
              </h4>
              <p className="flex gap-4 ml-4 text-primary-foreground/80 mt-4">
                <span>5 Days a Week</span> <span>01 Sweat shirt</span>
                <span>01 Bottle of protein</span> <span>Access to videos</span>
              </p>
            </div>
            <span>Professional plan</span>
          </div>
          <div className="py-6 flex justify-between items-center">
            <div>
              <h4 className="text-5xl uppercase text-center">
                Advance fitness program
              </h4>
              <p className="flex gap-4 ml-4 text-primary-foreground/80 mt-4">
                <span>5 Days a Week</span> <span>01 Sweat shirt</span>
                <span>01 Bottle of protein</span> <span>Many more</span>
              </p>
            </div>
            <span>Advance plan</span>
          </div>
        </div>
      </section>

      <section className="container my-10 p-10 flex relative">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col font-heading text-6xl gap-2 text-primary-foreground max-w-xl uppercase">
            <p>GET a life style</p>
            <p>Easily and fun here</p>
          </div>
          <div className="bg-black/10 flex justify-center items-center w-24 aspect-square text-white rounded-full border-2 border-dashed border-orange-400">
            <Icons.MoveRight className="rotate-[305deg] w-16" />
          </div>
        </div>
      </section>

      <section className="container font-heading text-5xl text-primary-foreground/50 my-10 p-10 border-y-2 border-primary-foreground/50 uppercase">
        feel great.{" "}
        <span className="text-primary-foreground">body and mind.</span>
      </section>

      <section className="flex justify-center gap-6 font-heading text-primary-foreground text-4xl">
        <span className="text-primary-foreground/50">Email</span>
        <span>Manishbishtdev@gmail.com</span>
      </section>
    </main>
  );
}
