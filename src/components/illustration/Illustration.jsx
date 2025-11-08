import SideImg from "./illustrations/SideImg";
import TaskImg from "./illustrations/TaskImg";

export default function Illustration({name, ...props}) {
  const illustrations = {
    side: SideImg,
    task: TaskImg,
  };

  const CurrentIllustration = illustrations[name];

  return <CurrentIllustration {...props} />;
}
