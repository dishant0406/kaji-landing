import Image from "next/image";
import Link from "next/link";

export function LogoMark() {
  return (
    <Link aria-label="Kaji home" className="flex size-10 items-center justify-center rounded-lg" href="/">
      <Image alt="Kaji" className="size-8" height={64} priority src="/kaji-icon.png" width={64} />
    </Link>
  );
}
