import AddTask from "./icons/AddTask"
import ArrowTwo from "./icons/ArrowTwo"
import Check from "./icons/Check"
import ChevronBottom from "./icons/ChevronBottom"
import ChevronTop from "./icons/ChevronTop"
import DownAlphabet from "./icons/DownAlphabet"
import DownDate from "./icons/DownDate"
import Edit from "./icons/Edit"
import Filter from "./icons/Filter"
import FromUnimportant from "./icons/FromUnimportant"
import LoadingIcon from "./icons/LoadingIcon"
import LogoIcon from "./icons/LogoIcon"
import Minus from "./icons/Minus"
import MoonIcon from "./icons/MoonIcon"
import NavIcon from "./icons/NavIcon"
import NewOldSort from "./icons/NewOldSort"
import OfImportance from "./icons/OfImportance"
import OldNewSort from "./icons/OldNewSort"
import SunIcon from "./icons/SunIcon"
import Trash from "./icons/Trash"
import UpAlphabet from "./icons/UpAlphabet"
import UpDate from "./icons/UpDate"
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
        filter: Filter,
        downAlphabet: DownAlphabet,
        upAlphabet: UpAlphabet,
        downDate: DownDate,
        upDate: UpDate,
        fromUnimportant: FromUnimportant,
        ofImportance: OfImportance,
        oldNew: OldNewSort,
        newOld: NewOldSort,
        trash: Trash,
    }

    const CurrentIcon = icons[name]

    if (!CurrentIcon) {
        return null
    }

    return (
        <CurrentIcon {...props}/>
    )
}