import { IoMdDownload } from "react-icons/io"
export const DownloadButton = ({link}) =>{

    return(
        <a href={`link`} target="_blank">
            <button className="btn btn-primary"><IoMdDownload />Download</button>
        </a>
    )
    
}