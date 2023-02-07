import {lang} from "../lang/lang";
import {GlobalLangType} from "../global";


type UseLangType = (component:string) => {text:any, lang:GlobalLangType}
export const useLang:UseLangType = (component)=>{

    //todo: lang should be taken from redux when several lang will be implemented
    return {text:lang[component],lang:"eng"}
}