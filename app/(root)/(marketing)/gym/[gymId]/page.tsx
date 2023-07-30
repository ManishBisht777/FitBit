import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { prisma } from "@/lib/db";
import Image from "next/image";
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

  return (
    <main className="container mt-4 font-heading">
      <section>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 rounded-2xl overflow-hidden h-[90vh] relative">
            <Image src={gym.imageUrl} fill alt={gym.name} />
          </div>
          <div className="col-span-1 flex flex-col gap-2">
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
      <section className="my-14 grid grid-cols-2 gap-4">
        <div>
          <h1 className="md:text-6xl font-medium">{gym.name}</h1>
          <p className="text-lg text-primary/50 mt-2">{gym.type}</p>
        </div>
        <div className="border p-8 rounded-lg">
          {plans &&
            plans.map((plan) => {
              return (
                <div className="my-8" key={plan.id}>
                  <div className="flex justify-between my-4 items-center">
                    <div className="flex flex-col gap-2">
                      <p className="text-4xl">{plan.name}</p>
                      <p className="text-primary/70">{plan.description}</p>
                    </div>
                    <div>
                      <Button className="px-8">Try Now</Button>
                    </div>
                  </div>
                  <Separator />
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
}
