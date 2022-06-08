import {RoundService} from "../../../domain/services/player/round.service";


export class RoundController{
    private _roundService: RoundService;

    constructor(roundService: RoundService) {
        this._roundService = roundService;
    }

    async saveRound(courseId: string,userId: string, playedHoles: any[]): Promise<any>{
        if (playedHoles.length < 1) throw new Error("No holes inputed");

        return await this._roundService.saveRound(courseId,userId,playedHoles);
    }

    async getRoundsByPlayer(id: string): Promise<any[]>{
        return await this._roundService.getRoundsByPlayer(id);
    }
}