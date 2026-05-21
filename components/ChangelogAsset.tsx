import Image from "next/image";

type ChangelogAssetProps = {
  asset: {
    alt: string;
    height: number;
    src: string;
    width: number;
  };
};

export function ChangelogAsset({ asset }: ChangelogAssetProps) {
  return (
    <span className="docs-asset-shell not-prose my-10 block">
      <span className="docs-asset-frame">
        <Image
          alt={asset.alt}
          className="docs-asset-media"
          height={asset.height}
          src={asset.src}
          width={asset.width}
        />
      </span>
    </span>
  );
}
