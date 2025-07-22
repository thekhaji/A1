import { T } from "../libs/types/common";
import {Request, Response} from "express";
import MemberService from "../models/Member.service";

const showroomController: T = {};

showroomController.goHome = (req: Request, res: Response) => {
    try {
        res.send("Home Page");
    } catch (err) {
        console.log("Error, goHome:", err);
        
    }
};

showroomController.getLogin = (req: Request, res: Response) => {
    try {
        res.send("Login Page");
    } catch (err) {
        console.log("Error, goHome:", err);
        
    }
};

showroomController.getSignup = (req: Request, res: Response) => {
    try {
        res.send("Signup Page");
    } catch (err) {
        console.log("Error, goHome:", err);
        
    }
};

export default showroomController;