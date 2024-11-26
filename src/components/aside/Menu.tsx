import { CloseBtn, Icon } from "@lifo123/library";

interface MenuProps {

}

export default function Menu({ state }: { state: boolean }) {

    const handleToggle = () => {
        document.getElementById('aside-menu')?.classList.toggle('active');
    }

    return (
        state ? (
            <Icon icon='menu' size={32} className="d-flex f-center pointer mt-1" funct={handleToggle} />
        ) : <CloseBtn size={28} onClick={handleToggle} />
    )
}