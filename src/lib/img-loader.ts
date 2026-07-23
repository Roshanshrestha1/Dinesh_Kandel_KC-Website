const base = "/Dinesh_Kandel_KC-Website";

export default function imgLoader({ src }: { src: string }) {
  if (src.startsWith("http") || src.startsWith("data:")) return src;
  return `${base}${src}`;
}
