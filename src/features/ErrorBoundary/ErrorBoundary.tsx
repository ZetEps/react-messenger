import React from "react";
import {ComponentHasChildren} from "../../global";
import Logger from "../Logger/Logger";

interface ErrorBoundaryType extends ComponentHasChildren{

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
        console.log("Catch", error);
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







