import { BellIcon, MessageSquareIcon, User2Icon } from "lucide-react";

function TopBar(){
    return (
        <div className="flex justify-between">
            <p>Dashboard</p>
            <div>
                <BellIcon />
                <MessageSquareIcon />
                <User2Icon />
            </div>
        </div>
    )
}

export default TopBar;