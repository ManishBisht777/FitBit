import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button, buttonVariants } from "@/components/ui/button";
import { gymCategories } from "@/config/category";
import { prisma } from "@/lib/db";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default async function Index({}: Props) {
  const gyms = await prisma.gym.findMany({
    take: 8,
  });

  return (
    <div className="container">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
      >
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          A Fitness Website built with everything new in Next.js 13
        </h1>
        <p className="max-w-[46rem] text-lg text-muted-foreground sm:text-xl">
          Create or Joins Plans from multiple Gyms around the world
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <Link
            href="/products"
            className={cn(
              buttonVariants({
                size: "lg",
              })
            )}
          >
            Join Plans
          </Link>
          <Link
            href="/dashboard/stores"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
              })
            )}
          >
            Sell Now
          </Link>
        </div>
      </section>
      <section
        id="categories"
        aria-labelledby="categories-heading"
        className="space-y-6 py-6 md:pt-10 lg:pt-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Categories
          </h2>
          <p className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore our categories and find the best products for you
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {gymCategories.map((category) => (
            <Link
              aria-label={`Go to ${category.title}`}
              key={category.title}
              href={`/categories/${category.title}`}
            >
              <div className="group relative overflow-hidden rounded-md">
                <AspectRatio ratio={4 / 5}>
                  <div className="absolute inset-0 z-10 bg-black/60 transition-colors group-hover:bg-black/70" />
                  <Image
                    src={category.image}
                    alt={category.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    priority
                  />
                </AspectRatio>
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <h3 className="text-3xl font-medium capitalize text-slate-100 md:text-2xl">
                    {category.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section
        id="create-a-store-banner"
        aria-labelledby="create-a-store-banner-heading"
        className="grid place-items-center gap-6 rounded-lg border bg-card px-6 py-16 text-center text-card-foreground shadow-sm mt-10"
      >
        <h2 className="text-2xl font-medium sm:text-3xl">
          Do you want to List Your Gym on our website?
        </h2>
        <Link href="/dashboard">
          <div className={cn(buttonVariants())}>
            Create a Gym
            <span className="sr-only">Create a Gym</span>
          </div>
        </Link>
      </section>
      <section
        id="featured-products"
        aria-labelledby="featured-products-heading"
        className="space-y-6 mt-10"
      >
        <div className="flex items-center">
          <h2 className="flex-1 text-2xl font-medium sm:text-3xl">
            Featured Gyms
          </h2>
          <Link href="/products">
            <div
              className={cn(
                buttonVariants({
                  size: "sm",
                })
              )}
            >
              View all
              <span className="sr-only">View all Gyms</span>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
    </div>
  );
}
