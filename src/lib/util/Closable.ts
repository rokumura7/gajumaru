export interface Closable {
  close(): void;
}

export const using = <T extends Closable, R>(
  resource: T,
  func: (resource: T) => Promise<R>
): Promise<R | void> =>
  func(resource)
    .catch((e) => console.error(e))
    .finally(() => resource.close());
