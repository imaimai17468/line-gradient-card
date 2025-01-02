/**
 * ユニークなIDを生成する関数
 * @returns ランダムな文字列ID
 */
export const generateId = () => Math.random().toString(36).substring(7);
