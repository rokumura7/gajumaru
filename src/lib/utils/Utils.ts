export const replaceIndex = (selector: string, index: number): string =>
  selector.replace(/_INDEX/, index + '');

export const wait = async (sec = 1): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, sec * 1000));

export const f2h = (str: string): string =>
  str.replace(/[！-～]/g, (target) =>
    String.fromCharCode(target.charCodeAt(0) - 0xfee0)
  );

export const fetchNum = (str: string): number =>
  parseInt(f2h(str).replace(/[^0-9]/g, ''));
