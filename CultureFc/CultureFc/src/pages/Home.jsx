import Team from "../assets/team.jpg.jpeg";

export default function Home() {
  return (
    <div className="relative h-[calc(100vh-143.98px-55.99px)]">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Team})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col gap-10 p-4 items-center justify-center">
        <h1 className="font-mono font-extrabold text-white text-5xl">
          Welcome to Our Culture FC
        </h1>

        <p className="font-mono font-bold text-white text-lg text-center max-w-4xl">
          CULTURE FC hanya sebuah Komunitas, Bukan ajang cari uang dan bukan pula
          tempat cari sensasi, hanya wadah cari kringet, yang penting seneng
        </p>
      </div>

    </div>
  );
}