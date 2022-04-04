import {HoleDB} from "../../modelsDB/course/hole.modeldb";
import {Hole} from "../../models/course/hole.model";

export interface IHoleRepo {
    addHole(hole: HoleDB): Hole;

    deleteHoles(id: string): string[];
}