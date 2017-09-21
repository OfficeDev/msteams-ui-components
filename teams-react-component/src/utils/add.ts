function add(values: any[], value: any): any[] {
  if (values.indexOf(value) < 0) {
    values = [...values];
    values.push(value);
  }

  return values;
}

export default add;
