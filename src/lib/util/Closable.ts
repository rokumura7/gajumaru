export interface Closable {
  close(): void;
}

export const using = async <T extends Closable, R>(
  resource: T,
  func: (resource: T) => Promise<R>
): Promise<R | void> =>
  await func(resource)
    .catch((e) => console.error(e))
    .finally(() => resource.close());
