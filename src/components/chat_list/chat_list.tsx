import './chat_list.scss'
import {MenuItem, TextField} from "@mui/material";
import {CHAT_DATA, CHAT_LIST_IDS} from "../../variables.ts";
import ChatCard from "../chat_card/chat_card.tsx";
import {useLocation, useNavigate} from "react-router";
import {useEffect, useState} from "react";
import type {ChatListType} from "../../interfaces.ts";

export default function ChatList(props: {onCardClick: (name: string) => void, name: string}) {
    const navigate = useNavigate();
    const location = useLocation();
    const [chatListIdUrl, setChatListIdUrl] = useState<ChatListType | "">("");
    const [nameSelected, setNameSelected] = useState<string | null>(null);
    const initialValue = "placeholder";
    const [selected, setSelected] = useState<string>(initialValue);
    const [options, setOptions] = useState(() => [
        { value: initialValue, label: "Seleziona un'opzione" },
        { value: "school", label: "school" },
        { value: "family", label: "family" },
        { value: "work", label: "work" },
        { value: "friends", label: "friends" },
    ]);

    useEffect(() => {
        if (props.name === "")
            setNameSelected("")
    }, [props.name]);

    useEffect(() => {
        const segments = location.pathname.split('/');
        const fetchChatListId = (segments[1] || '') as ChatListType | '';
        const fetchChatId = segments[3];

        const chatList = CHAT_DATA[fetchChatListId as ChatListType];

        if (CHAT_LIST_IDS.includes(fetchChatListId as ChatListType)) {
            setSelected(fetchChatListId);
            setChatListIdUrl(fetchChatListId as ChatListType);
            setOptions((prev) => prev.filter((opt) => opt.value !== initialValue));

            if (typeof fetchChatId !== 'undefined' && fetchChatId !== '') {
                setNameSelected(fetchChatId);

                const found = chatList?.find(c => String(c.id) === String(fetchChatId));
                if (found)
                    setNameSelected(found.name);
                else
                    setNameSelected("");
            } else {
                setNameSelected("");
            }
        } else {
            setChatListIdUrl("");
        }
    }, [location]);


    function handleChange(value: string) {
        setSelected(value);
        if (value !== initialValue)
            setOptions((prev) => prev.filter((opt) => opt.value !== initialValue));
        navigate(`/${value}`);
    }


    return (
        <div className="chat-list">
            <div className="chat-list__header">
                <div className="chat-list__header__title">
                    <h1>Chatlist {selected !== 'placeholder' && selected}</h1>
                </div>
                <div className="chat-list__header__search">
                    <TextField
                        select
                        color="success"
                        label="Select"
                        value={selected}
                        fullWidth
                    >
                        {options.map((opt) => (
                            <MenuItem key={opt.value} value={opt.value} onClick={() => handleChange(opt.value)}>
                                {opt.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </div>


            <div className="chat-list__list">
                {chatListIdUrl && CHAT_LIST_IDS.includes(chatListIdUrl) &&
                    CHAT_DATA[chatListIdUrl].map((item) => (
                        <ChatCard
                            key={item.id}
                            name={item.name}
                            messages={item.messages}
                            id={item.id}
                            isSelected={nameSelected === item.name}
                            onClick={(name) => {props.onCardClick(name); setNameSelected(name); navigate(`/${chatListIdUrl}/chat/${item.id}`);}}
                        />
                    ))}
            </div>
        </div>
    );
}