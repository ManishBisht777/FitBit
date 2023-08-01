import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { prisma } from "@/lib/db";
import { cn } from "@/lib/utils";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: {
    gymId: string;
  };
}

export default async function GymId({ params }: Props) {
  const gym = await prisma.gym.findFirst({
    where: {
      id: params.gymId,
    },
  });

  if (!gym) notFound();

  const billboards = await prisma.billboard.findMany({
    where: {
      gymId: params.gymId,
    },
  });

  const plans = await prisma.plan.findMany({
    where: {
      gymId: params.gymId,
    },
  });

  const benefits = await prisma.benefit.findMany({
    where: {
      gymId: params.gymId,
    },
  });

  const trainers = await prisma.trainer.findMany({
    where: {
      gymId: params.gymId,
    },
  });

  const gyms = await prisma.gym.findMany({
    take: 4,
  });

  return (
    <main className="container mt-4 font-heading">
      <section>
        <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
          <div className="col-span-2 rounded-2xl overflow-hidden md:h-[90vh] h-[30vh] relative">
            <Image src={gym.imageUrl} fill alt={gym.name} />
          </div>
          <div className="col-span-1 md:flex md:flex-col grid grid-cols-3 gap-4">
            {billboards &&
              billboards.map((billboard) => {
                return (
                  <div
                    key={billboard.id}
                    className="md:col-span-2 md:h-[30vh] h-[10vh] rounded-lg overflow-hidden relative p-8 border"
                  >
                    <Image src={billboard.imageUrl} fill alt={gym.name} />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section className="my-14 grid md:grid-cols-5 grid-cols-1 gap-10">
        <div className="md:col-span-3">
          <h1 className="md:text-6xl text-xl font-medium">{gym.name}</h1>
          <p className="md:text-lg text-xs text-primary/50 mt-1 font-sans">
            {gym.type}
          </p>

          <div className="mt-8">
            <div className="flex gap-4 mb-6">
              <MapPin className="w-6 h-6 text-primary/70" />
              <div className="max-w-md">
                <p className="md:text-3xl text-base">HSR Layout • Bangalore</p>
                <p className="mt-2 md:text-base text-sm text-primary/50 font-sans">
                  #5, 2nd Floor 24th Main Road, Near Hamilton Bailey
                  HospitalSector 2, ITI Layout, Sector 7, HSR Layout
                </p>
              </div>
              <Link
                className="font-sans md:text-lg text-xs self-center text-green-500"
                href="/"
              >
                Navigate
              </Link>
            </div>
            <Separator />
            <div className="flex gap-4 my-6">
              <Clock className="w-6 h-6 text-primary/70" />
              <div className="max-w-md">
                <p className="md:text-3xl text-xs">06:00 AM - 10:30 PM</p>
              </div>
            </div>
            <Separator />
          </div>
          <div className="mt-12">
            <p className="md:text-3xl text-base">Benefits at {gym.name}</p>
            <div className="mt-2 md:text-base text-">
              {benefits &&
                benefits.map((benefit) => (
                  <p className="font-sans text-primary/60" key={benefit.id}>
                    {"- " + benefit.name}
                  </p>
                ))}
            </div>
            <div className="flex md:gap-6 gap-2 mt-6">
              <Icons.Slack className="md:w-14 md:h-14 w-6 h-6 text-white/70" />
              <Icons.Pocket className="md:w-14 md:h-14 w-6 h-6 text-white/70" />
              <Icons.Gitlab className="md:w-14 md:h-14 w-6 h-6 text-white/70" />
              <Icons.Trello className="md:w-14 md:h-14 w-6 h-6 text-white/70" />
              <Icons.Dribbble className="md:w-14 md:h-14 w-6 h-6 text-white/70" />
              <Icons.Hexagon className="md:w-14 md:h-14 w-6 h-6 text-white/70" />
            </div>
          </div>
          <div className="mt-12">
            <p className="md:text-3xl text-base">Trainers and Instructures</p>
            <p className="font-sans md:text-base text-sm text-primary/60">
              Best class trainers and instructors at {gym.name}
            </p>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-4 mt-6">
              {trainers &&
                trainers.map((trainer) => {
                  return (
                    <div key={trainer.id}>
                      <div className="relative md:h-[25vh] h-[15vh] rounded-lg overflow-hidden">
                        <Image
                          src={trainer.imageUrl}
                          alt={trainer.name + "Image"}
                          fill
                        />
                      </div>
                      <p className="text-lg text-primary/80 mt-2">
                        {trainer.name}
                      </p>
                      <p className="text-sm text-primary/50 font-sans">
                        {trainer.role}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="h-fit pb-4 sticky top-10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] rounded-lg md:col-span-2">
          <div className="flex flex-col p-8 bg-gray-900 rounded-lg">
            {plans &&
              plans.map((plan, index) => {
                return (
                  <div
                    className="flex flex-col md:gap-10 gap-2 md:mt-10 mt-4"
                    key={plan.id}
                  >
                    <div className="grid md:grid-cols-3 gap-4 items-center">
                      <div className="flex flex-col gap-2 col-span-2">
                        <p className="md:text-4xl text-base">{plan.name}</p>
                        {/* <p className="text-primary/70">{plan.description}</p> */}
                        <p className="text-primary/70 md:text-base text-sm font-sans">
                          You can use the free trial at this center to try out
                          various formats and classes
                        </p>
                      </div>
                      <div className="col-span-1 flex md:flex-col gap-4 items-center">
                        <p className="md:text-4xl text-base">
                          ${plan.price.toString()}
                        </p>
                        <Button
                          variant="outline"
                          className="px-8 md:text-base text-xs bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent hover:bg-clip-border hover:text-primary-foreground"
                        >
                          Try Now
                        </Button>
                      </div>
                    </div>
                    {!(plans.length === index + 1) && (
                      <Separator className="bg-gradient-to-r from-gray-700 via-white/30 to-gray-700" />
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <section className="mt-10 p-1 border rounded-3xl border-white/50 text-primary font-sans">
        <div className="bg-primary/10 md:p-10 p-2 text-center rounded-3xl flex flex-col justify-center items-center h-[30vh] bg-gradient-to-r from-pink-500/50 via-red-500/50 to-yellow-500/50">
          <p className="md:text-2xl text-sm font-medium">
            Liking the project? start it on github
          </p>
          <Link href="" className={cn(buttonVariants(), "mt-2 px-4")}>
            <Icons.gitHub className="w-4 h-6 mr-2 " />
            Github
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h4 className="md:text-3xl text-xl">More Gyms</h4>
        <div className="grid md:grid-cols-4 grid-cols-1 mt-4">
          {gyms &&
            gyms.map((gym) => {
              return (
                <Link
                  href={`/gym/${gym.id}`}
                  key={gym.id}
                  className="bg-primary-foreground group cursor-pointer rounded-xl border p-3 space-y-4 font-sans"
                >
                  <div className="aspect-square rounded-xl bg-gray-100 relative">
                    <Image
                      src={gym.imageUrl}
                      alt={gym.name}
                      fill
                      className="aspect-square object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{gym.name}</p>
                    <p className="text-sm text-gray-500">{gym.type}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline">Compare Gym</Button>
                    <Button>View Gym</Button>
                  </div>
                </Link>
              );
            })}
        </div>
      </section>
    </main>
  );
}
