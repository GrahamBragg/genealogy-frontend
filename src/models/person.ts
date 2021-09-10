import { Fact } from "./components/fact";
import { Gender } from "./components/gender";
import { Name } from "./components/name";

export interface Person {
    readonly private?: boolean;
    readonly gender?: Gender;
    readonly names?: Name[];
    readonly facts?: Fact[];
    readonly _id: string;
}