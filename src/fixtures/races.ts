export const races = ["z", "t", "p"] as const;

export const matchUps = [] as { label: string; value: string }[];
races.forEach((race1) =>
  races.forEach((race2) => {
    matchUps.push({
      label: `${race1.toUpperCase()}v${race2.toUpperCase()}`,
      value: `${race1}v${race2}`,
    });
  })
);
