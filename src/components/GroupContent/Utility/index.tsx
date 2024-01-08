import {useEffect, useState} from "react"

import {Container} from "./style"


export const TitleCounter = ({content, name}: any) => {
    const [isPlural, setIsPlural] = useState(false)

    useEffect(() => {
        if(content) {
            setIsPlural(content.length > 1)
        }
    }, [content])

    return (
        <Container>
            <p>
                <span>{content.length}</span>
                {isPlural ? `${name}s` : `${name}`} no grupo
            </p>
        </Container>
    )
}
