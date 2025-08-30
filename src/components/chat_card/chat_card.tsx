import type {ChatCardProps} from "../../interfaces.ts";
import './chat_card.scss'
import PersonIcon from '@mui/icons-material/Person';

export default function ChatCard(props: ChatCardProps) {
    return (
        <div className={`chat-card ${props.isSelected && "chat-card__selected"}`} onClick={() => props.onClick(props.name)}>
            <div className="chat-card__icon">
                <div className="chat-card__icon__content">
                    <PersonIcon />
                </div>
            </div>
            <div className="chat-card__text">
                <div className="chat-card__text__header">
                    <div className="chat-card__text__header__name">{props.name}</div>
                    <div className="chat-card__text__header__time">{props.messages[0].time}</div>
                </div>
                <div className="chat-card__text__message">{props.messages[0].message}</div>
            </div>
        </div>
    )
}