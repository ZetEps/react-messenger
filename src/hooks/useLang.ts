import {lang} from "../lang/lang";
import {GlobalLangType} from "../global";
const DEFAULT_LANG = 'eng'
type GetTextFn = (...path:string[])=> string
type UseLangType = (component: keyof typeof lang) => GetTextFn
export const useLang:UseLangType = (component)=>{
    //todo: lang should be taken from redux when several lang will be implemented
    const language = "eng"
    const getText = (...path:string[])=>{
        let text = lang[component] as any
        for(let obj of path){
            text = text[obj];
        }
        try{
            return text[language]
        }catch (e){
            return text[DEFAULT_LANG]
        }
    }

    return getText
}



