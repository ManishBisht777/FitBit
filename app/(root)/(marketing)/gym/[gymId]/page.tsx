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
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 rounded-2xl overflow-hidden h-[90vh] relative">
            <Image src={gym.imageUrl} fill alt={gym.name} />
          </div>
          <div className="col-span-1 flex flex-col gap-4">
            {billboards &&
              billboards.map((billboard) => {
                return (
                  <div className="col-span-2 h-[30vh] rounded-lg overflow-hidden relative p-8 border">
                    <Image src={billboard.imageUrl} fill alt={gym.name} />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section className="my-14 grid grid-cols-5 gap-10">
        <div className="col-span-3">
          <h1 className="md:text-6xl font-medium">{gym.name}</h1>
          <p className="text-lg text-primary/50 mt-1 font-sans">{gym.type}</p>

          <div className="mt-8">
            <div className="flex gap-4 mb-6">
              <MapPin className="w-6 h-6 text-primary/70" />
              <div className="max-w-md">
                <p className="text-3xl">HSR Layout • Bangalore</p>
                <p className="mt-2 text-primary/50 font-sans">
                  #5, 2nd Floor 24th Main Road, Near Hamilton Bailey
                  HospitalSector 2, ITI Layout, Sector 7, HSR Layout
                </p>
              </div>
              <Link
                className="font-sans text-lg self-center text-green-500"
                href="/"
              >
                Navigate
              </Link>
            </div>
            <Separator />
            <div className="flex gap-4 my-6">
              <Clock className="w-6 h-6 text-primary/70" />
              <div className="max-w-md">
                <p className="text-3xl">06:00 AM - 10:30 PM</p>
              </div>
            </div>
            <Separator />
          </div>
          <div className="mt-12">
            <p className="text-3xl">Benefits at {gym.name}</p>
            <div className="mt-2">
              {benefits &&
                benefits.map((benefit) => (
                  <p className="font-sans text-primary/60" key={benefit.id}>
                    {"- " + benefit.name}
                  </p>
                ))}
            </div>
            <div className="flex md:gap-6 mt-6">
              <Icons.Slack className="w-14 h-14 text-white/70" />
              <Icons.Pocket className="w-14 h-14 text-white/70" />
              <Icons.Gitlab className="w-14 h-14 text-white/70" />
              <Icons.Trello className="w-14 h-14 text-white/70" />
              <Icons.Dribbble className="w-14 h-14 text-white/70" />
              <Icons.Hexagon className="w-14 h-14 text-white/70" />
            </div>
          </div>
          <div className="mt-12">
            <p className="text-3xl">Trainers and Instructures</p>
            <p className="font-sans text-primary/60">
              Best class trainers and instructors at {gym.name}
            </p>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-4 mt-6">
              {trainers &&
                trainers.map((trainer) => {
                  return (
                    <div key={trainer.id}>
                      <div className="relative h-[25vh] rounded-lg overflow-hidden">
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
        <div className="h-fit pb-4 sticky top-10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] rounded-lg col-span-2">
          <div className="flex flex-col p-8 bg-gray-900 rounded-lg">
            {plans &&
              plans.map((plan, index) => {
                return (
                  <div className="flex flex-col gap-10 mt-10" key={plan.id}>
                    <div className="grid grid-cols-3 gap-4 items-center">
                      <div className="flex flex-col gap-2 col-span-2">
                        <p className="text-4xl">{plan.name}</p>
                        {/* <p className="text-primary/70">{plan.description}</p> */}
                        <p className="text-primary/70 font-sans">
                          You can use the free trial at this center to try out
                          various formats and classes
                        </p>
                      </div>
                      <div className="col-span-1 flex flex-col gap-4 items-center">
                        <p className="text-4xl">$1000</p>
                        <Button
                          variant="outline"
                          className="px-8 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent hover:bg-clip-border hover:text-primary-foreground"
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
        <div className="bg-primary/10 md:p-10 rounded-3xl flex flex-col justify-center items-center h-[30vh] bg-gradient-to-r from-pink-500/50 via-red-500/50 to-yellow-500/50">
          <p className="text-2xl font-medium">
            Liking the project? start it on github
          </p>
          <Link href="" className={cn(buttonVariants(), "mt-2 px-4")}>
            <Icons.gitHub className="w-4 h-6 mr-2 " />
            Github
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h4 className="text-3xl">More Gyms</h4>
        <div className="grid grid-cols-4">
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
