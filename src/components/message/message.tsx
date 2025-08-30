import type {MessagesInterface} from "../../interfaces.ts";
import './message.scss'

export default function Message(props: {messageData: MessagesInterface}) {
    return (
        <div className={`message-container message-container__${props.messageData.type}`}>
            <div className={`message message__${props.messageData.type}`}>
                {props.messageData.message}
                <div className={`message__time`}>
                    {props.messageData.time}
                </div>
            </div>
        </div>
    )
}