import { IoMdDownload } from "react-icons/io"
import {ENDPOINT} from "../../util/constants"
export const DownloadButton = ({link}) =>{

    return(
        <a href={`${ENDPOINT}${link}`} target="_blank">
            <button className="btn btn-primary"><IoMdDownload />Download</button>
        </a>
    )
    
}