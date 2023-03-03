import {ErrorBoundaryState} from "../ErrorBoundary/ErrorBoundary";
import React from "react";

interface LoggerType extends ErrorBoundaryState{
    timestamp:number
}

class Logger{
    static instance:Logger;
    static isExist:boolean;

    private errors: LoggerType[] = []
    constructor() {
        if(Logger.isExist) return Logger.instance

        Logger.instance = this;
        Logger.isExist = true;
    }

    write(error: Error, errorInfo?: React.ErrorInfo){
        console.log("Write", error);
        const log:LoggerType = {error, errorInfo, timestamp:Date.now()}
        this.errors.push(log)
    }

    get(){
        return {...this.errors};
    }

}


export default Logger;