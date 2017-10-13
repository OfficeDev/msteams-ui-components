export type PossibleClassName = false | undefined | null | '' | string;

export function classesFunc(...classes: Array<PossibleClassName | PossibleClassName[]>): string {
  return classes
    .map((c) => {
      if (Array.isArray(c)) {
        return classesFunc(c);
      }
      return c;
    })
    .filter((c) => !!c)
    .join(' ');
}

export default classesFunc;
