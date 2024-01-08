import {useState} from "react"
import {FiCalendar} from "react-icons/fi"

import {useGroup} from "../../providers/Groups"

import {IconButton} from "../Button"
import {ActivityEdit} from "../ActivityEdit"

import {formattedDate} from "../Input/Utility/formatter"

import {Card} from "./style"


export const ActivityCard = ({cardActivity}) => {
    const {akuma} = useGroup()
    const [openModalEdit, setOpenModalEdit] = useState(false)

    const {id, title, realization_time} = cardActivity

    const newDate = formattedDate(new Date(realization_time))

    return (
        <Card>
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="date">
                <div className="alignItems">
                    <p>
                        <FiCalendar />
                    </p>
                    <p>{newDate}</p>
                </div>
                {
                    !akuma && (
                        <div className="icon">
                            <IconButton primaryColor arrowUp card onClick={() => setOpenModalEdit(true)}/>
                        </div>
                    )
                }
            </div>
            {
                openModalEdit && (
                    <ActivityEdit setOpenModalEdit={setOpenModalEdit} id={id}/>
                )
            }
        </Card>
    )
}
