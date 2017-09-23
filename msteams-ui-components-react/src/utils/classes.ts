export function classesFunc(...classes: (string | false | undefined | null)[]): string {
  return classes.filter((c) => !!c).join(' ');
}

export default classesFunc;
