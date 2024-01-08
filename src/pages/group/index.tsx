import {useState} from "react"

import {Header} from "../../components/Header"
import {GroupContent} from "../../components/GroupContent"


export const Group = ({group}: any) => {
    const [selectedOption, setSelectedOption] = useState("Info")

    return (
        <>
            <Header/>
            <GroupContent selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        </>
    )
}
