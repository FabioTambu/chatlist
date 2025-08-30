import type {ChatDataInterface, ChatListType} from "./interfaces.ts";

const CHAT_DATA: Record<ChatListType, ChatDataInterface[]> = {
    school: [
        {
            name: "Marco Rossi",
            id: 2001,
            messages: [
                { time: "08:30", message: "Io sì, vediamo dopo in mensa.", type: "sent" },
                { time: "08:12", message: "Non ancora, tu?", type: "received" },
                { time: "08:05", message: "Buongiorno! Hai ripassato per la verifica?", type: "sent" }
            ]
        },
        {
            name: "Giulia Bianchi",
            id: 2002,
            messages: [
                { time: "09:42", message: "Perfetto, grazie!", type: "received" },
                { time: "09:18", message: "Sì, te ne do una copia dopo lezione.", type: "sent" },
                { time: "09:01", message: "Hai le fotocopie di storia?", type: "received" }
            ]
        },
        {
            name: "Luca Verdi",
            id: 2003,
            messages: [
                { time: "11:05", message: "Ok sto arrivando.", type: "received" },
                { time: "10:58", message: "Sì, alle 11 va bene.", type: "sent" },
                { time: "10:52", message: "Ci vediamo al parco?", type: "received" }
            ]
        },
        {
            name: "Elena Conti",
            id: 2004,
            messages: [
                { time: "12:50", message: "Grazie per la dritta!", type: "received" },
                { time: "12:30", message: "Sì, il prof ha spostato la lezione.", type: "sent" },
                { time: "12:10", message: "Hai sentito del cambio d'orario?", type: "received" }
            ]
        },
        {
            name: "Sara Galli",
            id: 2005,
            messages: [
                { time: "14:15", message: "Passamelo dopo l'intervallo.", type: "received" },
                { time: "13:55", message: "Se non ti dispiace sì, grazie.", type: "sent" },
                { time: "13:40", message: "Ti serve il libro di matematica?", type: "received" }
            ]
        },
        {
            name: "Andrea Colombo",
            id: 2006,
            messages: [
                { time: "16:30", message: "Perfetto, allora alle 17.", type: "sent" },
                { time: "16:10", message: "Sì, ho bisogno di finire l'elaborato.", type: "received" },
                { time: "15:50", message: "Ci vediamo in biblioteca oggi?", type: "sent" }
            ]
        },
        {
            name: "Valeria Neri",
            id: 2007,
            messages: [
                { time: "08:20", message: "Sì, te li passo più tardi.", type: "sent" },
                { time: "08:00", message: "Hai preso appunti per italiano?", type: "received" }
            ]
        },
        {
            name: "Giorgio Bassi",
            id: 2008,
            messages: [
                { time: "11:50", message: "Dopo pranzo va bene.", type: "sent" },
                { time: "11:45", message: "Volentieri, quando?", type: "received" },
                { time: "11:30", message: "Studio insieme per la verifica?", type: "sent" }
            ]
        }
    ],

    work: [
        {
            name: "Davide Moretti",
            id: 2101,
            messages: [
                { time: "10:05", message: "Ok grazie, mi preparo.", type: "received" },
                { time: "10:00", message: "Sì, la riunione è alle 15.", type: "sent" },
                { time: "09:50", message: "Hai visto l'agenda della riunione?", type: "received" }
            ]
        },
        {
            name: "Marta Fontana",
            id: 2102,
            messages: [
                { time: "11:22", message: "Mandate.", type: "sent" },
                { time: "11:05", message: "Perfetto, le controllo ora.", type: "received" },
                { time: "10:55", message: "Ho aggiornato le slide.", type: "sent" }
            ]
        },
        {
            name: "Francesco De Luca",
            id: 2103,
            messages: [
                { time: "12:40", message: "Si vede, ottimo lavoro.", type: "received" },
                { time: "12:30", message: "Grazie, ci ho messo un po'.", type: "sent" },
                { time: "12:10", message: "Bravo per il report di ieri!", type: "received" }
            ]
        },
        {
            name: "Chiara Romano",
            id: 2104,
            messages: [
                { time: "14:18", message: "Fammi sapere eventuali modifiche.", type: "sent" },
                { time: "14:05", message: "Ricevuto, lo guardo.", type: "received" },
                { time: "13:50", message: "Ti mando il contratto aggiornato.", type: "sent" }
            ]
        },
        {
            name: "Paolo Marino",
            id: 2105,
            messages: [
                { time: "15:27", message: "Perfetto.", type: "received" },
                { time: "15:10", message: "Sì, alle 16 va bene?", type: "sent" },
                { time: "14:50", message: "Possiamo sentirci nel pomeriggio?", type: "received" }
            ]
        },
        {
            name: "Valentina Riva",
            id: 2106,
            messages: [
                { time: "16:50", message: "Lo preparo io.", type: "sent" },
                { time: "16:30", message: "Prepariamo un breve riepilogo.", type: "received" },
                { time: "16:10", message: "Il cliente vuole un aggiornamento.", type: "sent" }
            ]
        },
        {
            name: "Stefano Greco",
            id: 2107,
            messages: [
                { time: "18:00", message: "Sto iniziando la chiamata.", type: "received" },
                { time: "17:45", message: "Non preoccuparti, ci vediamo in call.", type: "sent" },
                { time: "17:20", message: "Scusa il ritardo, traffico.", type: "received" }
            ]
        },
        {
            name: "Elisa Conti",
            id: 2108,
            messages: [
                { time: "09:00", message: "Sì, bel lavoro.", type: "received" },
                { time: "08:30", message: "Hai ricevuto il mio feedback?", type: "sent" }
            ]
        },
        {
            name: "Marco Galli",
            id: 2109,
            messages: [
                { time: "11:40", message: "Sto arrivando.", type: "sent" },
                { time: "11:15", message: "Serve una mano con il bug?", type: "received" }
            ]
        }
    ],

    family: [
        {
            name: "Alice Ferretti",
            id: 2201,
            messages: [
                { time: "13:05", message: "Fatto, preparo la pasta.", type: "received" },
                { time: "12:50", message: "Pasta al pomodoro!", type: "sent" },
                { time: "12:30", message: "Cosa vuoi per cena?", type: "received" }
            ]
        },
        {
            name: "Matteo Costa",
            id: 2202,
            messages: [
                { time: "14:15", message: "Fammi sapere.", type: "sent" },
                { time: "14:10", message: "Ci provo, ho impegni però.", type: "received" },
                { time: "13:50", message: "Torna presto stasera.", type: "sent" }
            ]
        },
        {
            name: "Federica Longo",
            id: 2203,
            messages: [
                { time: "15:45", message: "Perfetto, grazie.", type: "received" },
                { time: "15:20", message: "Sì, ti mando foto.", type: "sent" },
                { time: "15:00", message: "Hai fatto la lista della spesa?", type: "received" }
            ]
        },
        {
            name: "Simone Villa",
            id: 2204,
            messages: [
                { time: "16:55", message: "A che ora ti va bene?", type: "sent" },
                { time: "16:30", message: "Sì, ci vediamo nel pomeriggio.", type: "received" },
                { time: "16:10", message: "Passo da voi domani?", type: "sent" }
            ]
        },
        {
            name: "Ilaria Fabbri",
            id: 2205,
            messages: [
                { time: "23:10", message: "Buonanotte anche a te!", type: "received" },
                { time: "22:45", message: "Buonanotte ❤️", type: "sent" }
            ]
        },
        {
            name: "Alessandro Ricci",
            id: 2206,
            messages: [
                { time: "19:35", message: "Ok, prendo tutto.", type: "sent" },
                { time: "18:20", message: "Porta il latte e il pane.", type: "received" },
                { time: "18:00", message: "Serve qualcosa dal supermercato?", type: "sent" }
            ]
        },
        {
            name: "Nonna Rosa",
            id: 2207,
            messages: [
                { time: "09:05", message: "Sì nonna, tutto a posto.", type: "received" },
                { time: "09:00", message: "Hai mangiato?", type: "sent" }
            ]
        },
        {
            name: "Zio Paolo",
            id: 2208,
            messages: [
                { time: "20:10", message: "Perfetto, porto il dolce.", type: "received" },
                { time: "20:00", message: "Ci vediamo domenica per pranzo.", type: "sent" }
            ]
        }
    ],

    friends: [
        {
            name: "Martina Barbieri",
            id: 2301,
            messages: [
                { time: "10:11", message: "Al solito bar alle 11.", type: "received" },
                { time: "09:55", message: "Sì, dove ci vediamo?", type: "sent" },
                { time: "09:45", message: "Ci prendiamo un caffè domani?", type: "received" }
            ]
        },
        {
            name: "Giovanni Sala",
            id: 2302,
            messages: [
                { time: "12:40", message: "Perfetto, grazie!", type: "sent" },
                { time: "12:00", message: "Ci sto, prenoto i biglietti.", type: "received" },
                { time: "11:30", message: "Partita stasera alle 21!", type: "sent" }
            ]
        },
        {
            name: "Beatrice Leone",
            id: 2303,
            messages: [
                { time: "14:55", message: "Va bene, prenoto io.", type: "received" },
                { time: "14:10", message: "Propongo commedia new release.", type: "sent" },
                { time: "13:20", message: "Che film guardiamo?", type: "received" }
            ]
        },
        {
            name: "Emanuele Rizzo",
            id: 2304,
            messages: [
                { time: "17:08", message: "Sono qui!", type: "sent" },
                { time: "17:00", message: "Ok, ti aspetto davanti al cinema.", type: "received" },
                { time: "16:45", message: "Arrivo tra 5 minuti.", type: "sent" }
            ]
        },
        {
            name: "Laura Caruso",
            id: 2305,
            messages: [
                { time: "18:20", message: "Perfetto!", type: "received" },
                { time: "18:05", message: "Sì, prenoto un tavolo per le 20.", type: "sent" },
                { time: "17:50", message: "Organizziamo per sabato?", type: "received" }
            ]
        },
        {
            name: "Riccardo Parisi",
            id: 2306,
            messages: [
                { time: "19:45", message: "Ci vediamo lì.", type: "sent" },
                { time: "19:30", message: "Ottimo, grazie!", type: "received" },
                { time: "19:10", message: "Ho prenotato il tavolo.", type: "sent" }
            ]
        },
        {
            name: "Angela Marchetti",
            id: 2307,
            messages: [
                { time: "21:02", message: "Dobbiamo rifarlo presto.", type: "received" },
                { time: "20:45", message: "Ancora non riesco a smettere di ridere.", type: "sent" },
                { time: "20:20", message: "Che ridere ieri 😂", type: "received" }
            ]
        },
        {
            name: "Daniele Ferrara",
            id: 2308,
            messages: [
                { time: "22:33", message: "Perfetto.", type: "sent" },
                { time: "22:20", message: "Ricevuta, arrivo tra 10.", type: "received" },
                { time: "22:00", message: "Ti mando la posizione.", type: "sent" }
            ]
        },
        {
            name: "Simona Riva",
            id: 2309,
            messages: [
                { time: "08:45", message: "Bene, tu?", type: "sent" },
                { time: "08:30", message: "Buongiorno! Come va?", type: "received" }
            ]
        },
        {
            name: "Tommaso Leone",
            id: 2310,
            messages: [
                { time: "15:10", message: "Sì, porto le racchette.", type: "received" },
                { time: "15:00", message: "Ci vediamo per il torneo?", type: "sent" }
            ]
        }
    ]
};

const CHAT_LIST_IDS: ChatListType[] = ["school", "family", "work", "friends"]

export { CHAT_DATA, CHAT_LIST_IDS };