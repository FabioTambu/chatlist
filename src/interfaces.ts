
type ChatListType = "school" | "family" | "work" | "friends"

interface MessagesInterface {
    time: string;
    message: string;
    type: "sent" | "received";
}

interface ChatDataInterface {
    name: string;
    messages: MessagesInterface[];
    id: number;
}


interface ChatCardProps extends ChatDataInterface {
    onClick: (name: string) => void;
    isSelected: boolean;
}

export type { ChatDataInterface, ChatListType, ChatCardProps, MessagesInterface };