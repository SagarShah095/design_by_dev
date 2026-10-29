import Image from "next/image";
import { work, type WorkItem } from "@/content/site";
import { Muted, SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  return (
    <Reveal as="article" delay={(index % 2) * 120} className="group flex w-full min-w-0 flex-1 flex-col items-start gap-[20px]">
      <div className="relative h-[280px] w-full overflow-hidden rounded-[12px] border border-card-border sm:h-[360px] lg:h-[420px]">
        <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]">
          {item.layers.map((layer, i) =>
            layer.crop ? (
              <div key={i} className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute"
                  style={{
                    width: layer.crop.width,
                    height: layer.crop.height,
                    left: layer.crop.left,
                    top: layer.crop.top,
                  }}
                >
                  <Image
                    src={layer.src}
                    alt={i === 0 ? item.alt : ""}
                    fill
                    sizes="(min-width: 1024px) 1100px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ) : (
              <Image
                key={i}
                src={layer.src}
                alt={i === 0 ? item.alt : ""}
                fill
                sizes="(min-width: 1440px) 628px, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            ),
          )}
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-4">
        <h3 className="font-heading text-[20px] leading-[1.2] whitespace-nowrap text-white">{item.name}</h3>
        <span className="rounded-full border border-white/[0.06] bg-shade px-[13px] py-[9px] text-[16px] leading-normal whitespace-nowrap text-white">
          {item.tag}
        </span>
      </div>
    </Reveal>
  );
}

export function Work() {
  const rows: WorkItem[][] = [];
  for (let i = 0; i < work.items.length; i += 2) rows.push(work.items.slice(i, i + 2));

  return (
    <section id="work" className="bg-black px-5 py-16 md:px-10 lg:p-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[44px]">
        <SectionHeader
          label={work.label}
          title={
            <>
              {work.title.lead}
              <Muted>{work.title.muted}</Muted>
            </>
          }
          body={work.body}
        />
        <div className="flex w-full flex-col gap-[24px]">
          {rows.map((row, r) => (
            <div key={r} className="flex w-full flex-col items-start gap-[24px] md:flex-row">
              {row.map((item, c) => (
                <WorkCard key={`${r}-${c}`} item={item} index={c} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
