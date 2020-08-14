export default function of <T> (val: string | number | null): T {
  return val as unknown as T
}
