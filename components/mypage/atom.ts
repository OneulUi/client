import { atom } from "recoil";

export const likedOotdState = atom({
  key: "likedOotdState",
  default: { data: [], status: "false", message: "string" },
});

export const savedOotdState = atom({
  key: "savedOotdState",
  default: { data: [], status: "false", message: "string" },
});

export const myOotdState = atom({
  key: "myOotdState",
  default: { data: [], status: "false", message: "string" },
});
