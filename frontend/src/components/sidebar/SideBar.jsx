import SearchInput from "./SearchInput.jsx"
import Conversations from "./Conversations.jsx"
import LogoutButton from "./LogoutButton.jsx"

const SideBar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
        <SearchInput></SearchInput>
        <div className="divider px3"></div>
        <Conversations></Conversations>
        <LogoutButton></LogoutButton>
    </div>
  )
}

export default SideBar