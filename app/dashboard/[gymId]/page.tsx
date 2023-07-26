export default function GymOverview({ params }: { params: { gymId: string } }) {
  return (
    <main>
      <p>{params.gymId}</p>
    </main>
  );
}
