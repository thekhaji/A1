import { MemberInput } from "../libs/types/member";
import { T } from "../libs/types/common";
import {Request, Response} from "express";

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
    try {
        const input: MemberInput = req.body;
        
    } catch (error) {
        
    }
}

memberController.login = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        
    }
}


export default memberController;