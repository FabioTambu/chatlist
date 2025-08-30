import type {MessagesInterface} from "../../interfaces.ts";
import Message from "../message/message.tsx";
import './chat.scss'

export default function Chat(props: {messages: MessagesInterface[]}) {

    return (
        <div className="chat">
            {
                props.messages.map((message, index) => (
                    <Message key={index} messageData={message} />
                ))
            }
        </div>
    )
}