import AddTask from "./icons/AddTask"
import LoadingIcon from "./icons/LoadingIcon"
import LogoIcon from "./icons/LogoIcon"
import MoonIcon from "./icons/MoonIcon"
import NavIcon from "./icons/NavIcon"
import SunIcon from "./icons/SunIcon"

export default function Icon({name, ...props}) {
    const icons = {
        sun: SunIcon,
        moon: MoonIcon,
        loading: LoadingIcon,
        addTask: AddTask,
        navigate: NavIcon,
        logo: LogoIcon
    }

    const CurrentIcon = icons[name]

    if (!CurrentIcon) {
        return null
    }

    return (
        <CurrentIcon {...props}/>
    )
}