import {useEffect} from "react"
import {useParams} from "react-router-dom"
import {FiMail} from "react-icons/fi"

import {useGroup} from "../../providers/Groups"

import {Container} from "./style"

export const GroupUseCard = () => {
    const {specifiGroup, loadGroup} = useGroup()
    const {id} = useParams()

    useEffect(() => {
        loadGroup(id)
    }, [id])

    return (
        <>
            {specifiGroup &&
                specifiGroup.users_on_group.map(({id, email, username}) => (
                    <Container key={id}>
                        <a href={`mailto:${email}`}>
                            <div className="name">
                                <p>
                                    <span>@</span>
                                    {username}
                                </p>
                            </div>
                            <div className="email">
                                <FiMail className="useremail" />
                                <p>{email}</p>
                            </div>
                        </a>
                    </Container>
                ))}
        </>
    )
}
