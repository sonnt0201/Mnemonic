
import { DecorationIcon } from "../../assets/icons";
import './Decoration.css'
export const Decoration = () => {
    return <img className="decoration" src = {DecorationIcon.default} alt = "decoration"
    disablePictureInPicture
    onContextMenu={(e) => e.preventDefault()}
    />
}