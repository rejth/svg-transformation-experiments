export function filterKeysWithUndefinedValues<T extends object>(record: T): T {
  return (Object.keys(record) as Array<keyof typeof record>).reduce((acc, key) => {
    if (record[key] !== undefined) {
      acc[key] = record[key];
    }
    return acc;
  }, {} as T);
}
