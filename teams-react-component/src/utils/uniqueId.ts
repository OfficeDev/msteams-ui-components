let idCounter = 0;

function uniqueId(prefix: string = ''): string {
  const id = ++idCounter;
  return `${prefix + id}`;
}

export default uniqueId;
