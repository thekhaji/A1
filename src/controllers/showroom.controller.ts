import { T } from "../libs/types/common";
import {Request, Response} from "express";
import MemberService from "../models/Member.service";

const showroomController: T = {};

showroomController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        
        res.send("Home Page");
    } catch (err) {
        console.log("Error, goHome:", err);
        
    }
};

showroomController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.send("Login Page");
    } catch (err) {
        console.log("Error, goHome:", err);
        
    }
};

showroomController.processLogin = (req: Request, res: Response) => {
    try {
        console.log("processLogin");
        res.send("DONE!");
    } catch (err) {
        console.log("Error, processLogin:", err);
        
    }
};

showroomController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.send("Signup Page");
    } catch (err) {
        console.log("Error, goHome:", err);
        
    }
};

showroomController.processSignup = (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        res.send("DONE!");
    } catch (err) {
        console.log("Error, processSignup:", err);
        
    }
};

export default showroomController;