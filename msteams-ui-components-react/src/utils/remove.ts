function remove(values: any[], value: any): any[] {
  const valueIndex = values.indexOf(value);
  if (valueIndex >= 0) {
    values = [...values];
    values.splice(valueIndex, 1);
  }

  return values;
}

export default remove;
