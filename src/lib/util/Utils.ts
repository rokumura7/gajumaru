export const replaceIndex = (selector: string, index: number): string =>
  selector.replace(/_INDEX/, index + '');

export const wait = async (sec = 1): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, sec * 1000));
