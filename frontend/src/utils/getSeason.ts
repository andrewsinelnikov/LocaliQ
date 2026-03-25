export type Season = 'winter' | 'spring' | 'summer' | 'autumn';

export const getSeason = (): Season => {
  const month = new Date().getMonth();
  if (month <= 1 || month === 11) return 'winter';
  if (month <= 4) return 'spring';
  if (month <= 7) return 'summer';
  return 'autumn';
};