import { T } from "../libs/types/common";
import {Request, Response} from "express";
import MemberService from "../models/Member.service";
import {AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Errors";

const showroomController: T = {};
const memberService = new MemberService();

showroomController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        
        res.render("home");
    } catch (err) {
        console.log("Error, goHome:", err);
        
    }
};

showroomController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.render("signup");
    } catch (err) {
        console.log("Error, goHome:", err);
        res.redirect('/admin');
    }
};

showroomController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processSignup");
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.SHOWROOM;
        const result = await memberService.processSignup(newMember);

        req.session.member = result;
        req.session.save(function(){
            res.send(result);
        });
    } catch (err) {
        console.log("Error, processSignup:", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_RONG;
        res.send(
            `<script> alert("${message}"); window.location.replace('admin/signup')</script>`
        );
    }
};

showroomController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.render("login");
    } catch (err) {
        console.log("Error, goHome:", err);
        res.redirect('/admin');
    }
};

showroomController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processLogin");
        
        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input);

        req.session.member = result;
        req.session.save(function(){
            res.send(result);
        });
    } catch (err) {
        console.log("Error, processLogin:", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_RONG;
        res.send(
            `<script> alert("${message}"); window.location.replace('admin/login')</script>`
        );
    }
};


showroomController.logout = (req: Request, res: Response) => {
    try {
        console.log("logout");
        req.session.destroy(function(){
            res.redirect("/admin");
        });
    } catch (err) {
        console.log("Error, logout:", err);
        res.redirect("/admin");
    }
};


export default showroomController;