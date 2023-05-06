
import { WelcomeVid} from "../assets/videos";

export const Welcome = () => {
    return (
        <video loop controls={false} autoPlay>
      <source src={WelcomeVid.default} type="video/mp4" />
    </video>
    )
}