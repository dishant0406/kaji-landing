import Image from "next/image";

export function ProductShot() {
  return (
    <div className="mx-auto mb-24 mt-16 max-w-7xl px-4 sm:px-8">
      <div className="overflow-hidden rounded-xl">
        <Image
          alt="Kaji app screenshot showing a native macOS command center for coding agents"
          className="h-auto w-full"
          height={2324}
          priority
          src="/kaji-hero-screenshot.png"
          width={3824}
        />
      </div>
    </div>
  );
}
