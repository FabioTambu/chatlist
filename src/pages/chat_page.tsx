import './chat_page.scss'
import ChatList from "../components/chat_list/chat_list.tsx";
import Chat from "../components/chat/chat.tsx";
import {useEffect, useState} from "react";
import {CHAT_DATA, CHAT_LIST_IDS} from "../variables.ts";
import type {ChatListType, MessagesInterface} from "../interfaces.ts";
import {useLocation, useNavigate} from "react-router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ChatPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [chatName, setChatName] = useState<string>('');
    const [chatListId, setChatListId] = useState<ChatListType | ''>('');
    const [messages, setMessages] = useState<MessagesInterface[] | undefined>(undefined);
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [mobileScreenListChat, setMobileScreenListChat] = useState(true);

    useEffect(() => {
        const segments = location.pathname.split('/');
        const fetchChatListId = (segments[1] || '') as ChatListType | '';
        const fetchChatId = segments[3];

        const chatList = CHAT_DATA[fetchChatListId as ChatListType];

        if (segments[2] !== 'chat' || !fetchChatId || fetchChatId === '') {
            const targetPath = `/${fetchChatListId}`;
            if (location.pathname !== targetPath) {
                navigate(targetPath, { replace: true });
            }
            setChatName('');
            setMessages(undefined);
            setMobileScreenListChat(true);
            return;
        }

        const found = chatList?.find(c => String(c.id) === String(fetchChatId));
        if (found) {
            setChatName(found.name);
            setMessages(found.messages);
            setMobileScreenListChat(false);
        } else {
            const targetPath = `/${fetchChatListId}`;
            if (location.pathname !== targetPath) {
                navigate(targetPath, { replace: true });
            }
            setChatName('');
            setMessages(undefined);
            setMobileScreenListChat(true);
            return;
        }

        if (!CHAT_LIST_IDS.includes(fetchChatListId as ChatListType)) {
            if (location.pathname !== '/') {
                navigate('/', { replace: true });
            }
            setChatListId('');
            return;
        }

        setChatListId(fetchChatListId as ChatListType);
    }, [location]);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="chat-page">
            {
                width > 900 ?
                    <>
                        <div className="chat-page__chat-list">
                            <ChatList name={chatName} onCardClick={(name) => {
                                setChatName(name)
                            }}/>
                        </div>
                        <div className="chat-page__chat">
                            {
                                (chatListId !== '' && messages !== undefined) ? (
                                    <>
                                        <div className="chat-page__chat__header">
                                            <div className="chat-page__chat__header__back-icon" onClick={() => {
                                                navigate(`/${chatListId}`);
                                                setChatName('');
                                                setMobileScreenListChat(true);
                                            }}>
                                                <ArrowBackIcon />
                                            </div>

                                            {chatName}
                                        </div>
                                        <Chat messages={messages}/>
                                    </>
                                ) : (
                                    <div className="chat-page__chat__not-selected">
                                        <h1>Seleziona una chat</h1>
                                    </div>
                                )
                            }
                        </div>
                    </>
                    :
                    <>
                        {
                            mobileScreenListChat ?
                                <div className="chat-page__chat-list">
                                    <ChatList name={chatName} onCardClick={(name) => {
                                        setChatName(name);
                                        setMobileScreenListChat(false);
                                    }}/>
                                </div>
                                :
                                <div className="chat-page__chat">
                                    {
                                        (chatListId !== '' && messages !== undefined) ? (
                                            <>
                                                <div className="chat-page__chat__header">
                                                    <div className="chat-page__chat__header__back-icon" onClick={() => {
                                                        navigate(`/${chatListId}`);
                                                        setChatName('');
                                                        setMobileScreenListChat(true);
                                                    }}>
                                                        <ArrowBackIcon />
                                                    </div>

                                                    {chatName}
                                                </div>
                                                <Chat messages={messages}/>
                                            </>
                                        ) : (
                                            <div className="chat-page__chat__not-selected">
                                                <h1>Seleziona una chat</h1>
                                            </div>
                                        )
                                    }
                                </div>
                        }
                    </>
            }
        </div>
    )
}