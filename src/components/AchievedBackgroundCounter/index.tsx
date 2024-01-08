import {Container} from "./style"


export const AchievedBackgroundCounter = ({achievedCount, maxTimes = 100}) => {
    return (
        <Container timesAchieved={achievedCount} maxTimes={maxTimes}>
            <p className="content__title">Quantidade de vezes completada</p>
            <div className="content__graph">
                <div className="graph__green" />
                <p className="value">{achievedCount}</p>
            </div>
        </Container>
    )
}
