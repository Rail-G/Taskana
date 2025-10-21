import AddTask from "./icons/AddTask"
import ArrowTwo from "./icons/ArrowTwo"
import Check from "./icons/Check"
import ChevronBottom from "./icons/ChevronBottom"
import ChevronTop from "./icons/ChevronTop"
import Edit from "./icons/Edit"
import LoadingIcon from "./icons/LoadingIcon"
import LogoIcon from "./icons/LogoIcon"
import Minus from "./icons/Minus"
import MoonIcon from "./icons/MoonIcon"
import NavIcon from "./icons/NavIcon"
import SunIcon from "./icons/SunIcon"
import XMark from "./icons/XMark"

export default function Icon({name, ...props}) {
    const icons = {
        sun: SunIcon,
        moon: MoonIcon,
        loading: LoadingIcon,
        addTask: AddTask,
        navigate: NavIcon,
        logo: LogoIcon,
        edit: Edit,
        check: Check,
        xmark: XMark,
        chevronBottom: ChevronBottom,
        chevronTop: ChevronTop,
        arrowTwo: ArrowTwo,
        minus: Minus,
    }

    const CurrentIcon = icons[name]

    if (!CurrentIcon) {
        return null
    }

    return (
        <CurrentIcon {...props}/>
    )
}