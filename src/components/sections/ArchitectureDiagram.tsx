import { ChevronDown } from "lucide-react";
import type { ArchLayer, ArchLayerKind } from "../../types/portfolio";

/**
 * Schema d'architecture en couches.
 *
 * Construit en HTML/CSS plutot qu'en image : il reste lisible a la loupe,
 * selectionnable, indexable, et suit les deux themes sans double asset.
 * Les couches ne decrivent que des briques reellement utilisees.
 */
const kindAccent: Record<ArchLayerKind, string> = {
  client: "border-l-border-strong",
  api: "border-l-accent",
  data: "border-l-accent",
  async: "border-l-accent",
  external: "border-l-caution",
  ops: "border-l-positive",
};

type Props = {
  layers: ArchLayer[];
  label: string;
};

const ArchitectureDiagram = ({ layers, label }: Props) => (
  <figure className="m-0">
    <figcaption className="meta mb-3">{label}</figcaption>

    <ol className="space-y-0">
      {layers.map((layer, index) => (
        <li key={layer.kind + layer.label}>
          <div
            className={`rounded-sm border border-l-2 border-border bg-surface p-4 ${kindAccent[layer.kind]}`}
          >
            <p className="font-mono text-xs font-medium uppercase tracking-wide text-fg">
              {layer.label}
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              {layer.items.map((item) => (
                <li key={item} className="font-mono text-xs text-fg-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {index < layers.length - 1 ? (
            <div className="flex justify-center py-1" aria-hidden="true">
              <ChevronDown className="h-4 w-4 text-fg-subtle" />
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  </figure>
);

export default ArchitectureDiagram;
