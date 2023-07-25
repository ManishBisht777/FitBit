type Props = {};

export default function Dashboard({}: Props) {
  return (
    <div className="text-primary-foreground flex">
      <div className="flex-1 flex-col px-5">
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-medium">Hi, Manish Bisht</h1>
          <p className="text-sm text-primary-foreground/50 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="h-80 grid grid-cols-4 gap-4 mt-6">
          <div className="col-span-3 h-80 bg-white rounded-xl">hi</div>
          <div className="col-span-1 grid grid-rows-3 gap-3">
            <div className="bg-white rounded-xl">1</div>
            <div className="bg-white rounded-xl">1</div>
            <div className="bg-white rounded-xl">1</div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex flex-col justify-between mb-4">
            <h2 className="text-2xl font-medium">My classes</h2>
            <p className="text-sm text-primary-foreground/50 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-5 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-full bg-green-100"></div>
                <div>
                  <p>Beginer Plan</p>
                  <p className="text-primary-foreground/50 text-sm">
                    Manish Bisht
                  </p>
                </div>
              </div>
              <span className="bg-yellow-200 rounded-full px-3 py-2 text-primary text-sm ">
                Beginner
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-full bg-green-100"></div>
                <div>
                  <p>Beginer Plan</p>
                  <p className="text-primary-foreground/50 text-sm">
                    Manish Bisht
                  </p>
                </div>
              </div>
              <span className="bg-yellow-200 rounded-full px-3 py-2 text-primary text-sm ">
                Beginner
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-full bg-green-100"></div>
                <div>
                  <p>Beginer Plan</p>
                  <p className="text-primary-foreground/50 text-sm">
                    Manish Bisht
                  </p>
                </div>
              </div>
              <span className="bg-yellow-200 rounded-full px-3 py-2 text-primary text-sm ">
                Beginner
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-full bg-green-100"></div>
                <div>
                  <p>Beginer Plan</p>
                  <p className="text-primary-foreground/50 text-sm">
                    Manish Bisht
                  </p>
                </div>
              </div>
              <span className="bg-yellow-200 rounded-full px-3 py-2 text-primary text-sm ">
                Beginner
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-full bg-green-100"></div>
                <div>
                  <p>Beginer Plan</p>
                  <p className="text-primary-foreground/50 text-sm">
                    Manish Bisht
                  </p>
                </div>
              </div>
              <span className="bg-yellow-200 rounded-full px-3 py-2 text-primary text-sm ">
                Beginner
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#d2ed6a] h-fit max-w-sm rounded-2xl p-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          laudantium, ullam expedita natus esse tempore, quos itaque unde
          perspiciatis aliquam repellat fugit voluptates ab, suscipit facere
          voluptatum aperiam? Praesentium, quo.
        </p>
      </div>
    </div>
  );
}
