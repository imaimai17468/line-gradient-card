// ランダムな配列要素を取得する関数
export const getRandomArrayElement = <T extends readonly unknown[]>(array: T): T[number] => {
  return array[Math.floor(Math.random() * array.length)];
};

// ランダムな数値を生成する関数（最小値と最大値を指定）
export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
