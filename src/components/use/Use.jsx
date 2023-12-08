import Sub from "./components/Subscribes";
import Users from "./components/Users";

export default function CardsApp(){
    return(
        <div className="grid grid-cols-2 gap-5 ">
            <Users />
            <Sub />
        </div>
    )
}