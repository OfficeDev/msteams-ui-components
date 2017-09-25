export function classesFunc(...classes: Array<string | false | undefined | null>): string {
  return classes.filter((c) => !!c).join(' ');
}

export default classesFunc;
