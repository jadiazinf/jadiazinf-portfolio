import { ESectionId } from "@/lib/constants";

export interface ISection {
  readonly id: ESectionId;
  readonly translationKey: string;
  readonly order: number;
}
