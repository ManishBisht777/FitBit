import BillboardClient from "@/components/billboard-client";

type Props = {};

export default function Billboards({}: Props) {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient />
      </div>
    </div>
  );
}
