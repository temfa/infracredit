export const pieValue = (labels: string[], index: number): any => {
  return labels?.filter((items: any, index2: any): any => {
    if (index === index2) {
      return items!;
    }
  });
};
