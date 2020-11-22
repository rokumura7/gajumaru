export interface Closable {
  close(): void;
}

export const using = <T extends Closable, R>(
  resource: T,
  func: (resource: T) => Promise<R>
): Promise<R | void> => func(resource).finally(() => resource.close());
