import { CloseBtn, Icon } from "@lifo123/library";

interface MenuProps {

}

export default function Menu({ state }: { state: boolean }) {

   
    return (
        state ? (
            <Icon icon='menu' size={32} className="d-flex f-center pointer mt-1"/>
        ) : (
            <span className="d-flex f-center pointer toggleAside">
                <CloseBtn size={28} />
            </span>
        )
    )
}