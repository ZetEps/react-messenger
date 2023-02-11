import React from "react";
import {ComponentHasChildrenType} from "../../global";
import Logger from "./Logger";
import logger from "./Logger";

interface ErrorBoundaryType extends ComponentHasChildrenType{

}

export interface ErrorBoundaryState{
    error?:Error,
    errorInfo?:React.ErrorInfo,
}

class ErrorBoundary extends React.Component<ErrorBoundaryType, ErrorBoundaryState>{
    private logger:Logger = new Logger();
    state = {
        error:undefined,
        info:undefined,
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.logger.write(error, errorInfo);
        this.setState({
            error, errorInfo
        })
    }

    render() {
        if(this.state.error){
            return <div>Error</div>
        }
        return this.props.children;
    }
}



export default ErrorBoundary;







