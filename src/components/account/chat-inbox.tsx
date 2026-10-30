"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

type Message = { text: string; sent?: boolean; time: string };
const conversations = [
  {
    id: "ali",
    name: "علی محمدی",
    image: "/assets/images/example/profile-picture.jpg",
    preview: "سلام، این آگهی هنوز موجوده؟",
    time: "۲ دقیقه پیش",
    unread: 2,
    messages: [
      { text: "سلام وقت بخیر", time: "۱۰:۳۰" },
      { text: "سلام وقت شما هم بخیر", sent: true, time: "۱۰:۳۱" },
      { text: "سلام، این آگهی هنوز موجوده؟", time: "۱۰:۳۲" },
    ] as Message[],
  },
  {
    id: "mobile-plus",
    name: "فروشگاه موبایل پلاس",
    image: "/assets/images/example/iPhone-16-Concept-R1.png",
    preview: "بله، این محصول موجود است.",
    time: "۴۵ دقیقه پیش",
    unread: 1,
    messages: [
      { text: "سلام، گوشی آیفون موجود دارید؟", sent: true, time: "۰۹:۴۵" },
      { text: "سلام، وقت بخیر. بله، این محصول موجود است.", time: "۰۹:۴۶" },
    ] as Message[],
  },
];
export function ChatInbox() {
  const [selected, setSelected] = useState<string | null>(null);
  const [read, setRead] = useState<string[]>([]);
  const [saved, setSaved] = useState<string[]>([]);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const roomHeading = useRef<HTMLHeadingElement>(null);
  const listHeading = useRef<HTMLHeadingElement>(null);
  const messageList = useRef<HTMLDivElement>(null);
  const lastCard = useRef<HTMLButtonElement | null>(null);
  const conversation = conversations.find((item) => item.id === selected);
  const thread = conversation
    ? messages[conversation.id] || conversation.messages
    : [];
  useEffect(() => {
    if (selected) roomHeading.current?.focus({ preventScroll: true });
    else lastCard.current?.focus({ preventScroll: true });
  }, [selected]);
  useEffect(() => {
    if (messageList.current)
      messageList.current.scrollTop = messageList.current.scrollHeight;
  }, [selected, messages]);
  const visible = conversations.filter(
    (item) =>
      (filter !== "unread" || !read.includes(item.id)) &&
      (filter !== "saved" || saved.includes(item.id)) &&
      `${item.name} ${item.preview}`.includes(query.trim()),
  );
  function send(event: FormEvent) {
    event.preventDefault();
    if (!conversation || !drafts[conversation.id]?.trim()) return;
    const message: Message = {
      text: drafts[conversation.id].trim(),
      sent: true,
      time: new Intl.DateTimeFormat("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date()),
    };
    setMessages((previous) => ({
      ...previous,
      [conversation.id]: [...thread, message],
    }));
    setDrafts((previous) => ({ ...previous, [conversation.id]: "" }));
  }
  return (
    <div className="account-chat-page font-peyda">
      <div className="account-chat-inbox" hidden={Boolean(conversation)}>
        <h1 ref={listHeading} className="text-xl">
          چت با کاربران
        </h1>
        <label className="account-chat-search input-primary">
          <i className="icon icon-search" aria-hidden="true" />
          <input
            aria-label="جستجو در گفتگوها"
            placeholder="جستجو در گفتگوها"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <section className="chat-section" aria-label="گفتگوها">
          <div
            className="chat-tabs"
            data-active={filter}
            aria-label="فیلتر گفتگوها"
          >
            {[
              ["all", "همه"],
              ["unread", "نخوانده"],
              ["saved", "ذخیره شده"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                className="chat-tabs__item font-peyda semi-bold"
                data-filter={value}
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
            <span className="chat-tabs__indicator" />
          </div>
          <div className="chat-list">
            {visible.map((item) => (
              <button
                key={item.id}
                type="button"
                className="chat-item"
                aria-label={`باز کردن گفتگو با ${item.name}`}
                onClick={(event) => {
                  lastCard.current = event.currentTarget;
                  setSelected(item.id);
                  setRead((previous) => [...new Set([...previous, item.id])]);
                }}
              >
                <div className="chat-item__content">
                  <div className="chat-item__avatar">
                    <img src={item.image} alt="" />
                    <span className="chat-item__status chat-item__status--online" />
                  </div>
                  <div className="account-chat-item-body">
                    <div className="chat-item__body account-chat-item-line">
                      <h3 className="chat-item__name">{item.name}</h3>
                      <span className="chat-item__time">{item.time}</span>
                    </div>
                    <div className="chat-item__meta account-chat-item-line">
                      <p className="chat-item__message">
                        {messages[item.id]?.at(-1)?.text || item.preview}
                      </p>
                      {!read.includes(item.id) && (
                        <span className="chat-item__badge">
                          {new Intl.NumberFormat("fa-IR").format(item.unread)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
            {!visible.length && (
              <p className="account-chat-empty text-muted">گفتگویی پیدا نشد.</p>
            )}
          </div>
        </section>
      </div>
      {conversation && (
        <section
          className="chat-room"
          aria-label={`گفتگو با ${conversation.name}`}
        >
          <header className="chat-room__header">
            <div className="chat-room__user">
              <button
                type="button"
                className="chat-room__back"
                aria-label="بازگشت به گفتگوها"
                onClick={() => {
                  setSelected(null);
                }}
              >
                <i className="icon icon-right-lg" aria-hidden="true" />
              </button>
              <div className="chat-room__avatar">
                <img src={conversation.image} alt="" />
                <span className="chat-room__online" />
              </div>
              <div className="chat-room__user-info">
                <h2 tabIndex={-1} ref={roomHeading} className="chat-room__name">
                  {conversation.name}
                </h2>
                <span className="chat-room__status">آنلاین</span>
              </div>
            </div>
            <button
              type="button"
              className="account-chat-save"
              aria-label={
                saved.includes(conversation.id)
                  ? "حذف از گفتگوهای ذخیره‌شده"
                  : "ذخیره گفتگو"
              }
              aria-pressed={saved.includes(conversation.id)}
              onClick={() =>
                setSaved((previous) =>
                  previous.includes(conversation.id)
                    ? previous.filter((id) => id !== conversation.id)
                    : [...previous, conversation.id],
                )
              }
            >
              <i
                className={`icon icon-${saved.includes(conversation.id) ? "saved" : "saved-filled"}`}
                aria-hidden="true"
              />
            </button>
          </header>
          <div
            ref={messageList}
            className="chat-room__messages primary-scrollbar"
            role="log"
            aria-label="پیام‌های گفتگو"
            aria-live="polite"
          >
            <div className="chat-room__day">امروز</div>
            {thread.map((message, index) => (
              <div
                key={index}
                className={`message message--${message.sent ? "sent" : "received"}`}
              >
                {!message.sent && (
                  <img
                    src={conversation.image}
                    alt=""
                    className="message__avatar"
                  />
                )}
                <div className="message__content">
                  <div className="message__bubble">{message.text}</div>
                  <span className="message__time">{message.time}</span>
                </div>
              </div>
            ))}
          </div>
          <form className="chat-room__footer" onSubmit={send}>
            <input
              type="text"
              className="chat-room__input input-primary font-peyda"
              aria-label="متن پیام"
              placeholder="پیام خود را بنویسید..."
              value={drafts[conversation.id] || ""}
              onChange={(event) =>
                setDrafts((previous) => ({
                  ...previous,
                  [conversation.id]: event.target.value,
                }))
              }
            />
            <button
              type="submit"
              className="chat-room__send btn-primary"
              aria-label="افزودن پیام"
              disabled={!drafts[conversation.id]?.trim()}
            >
              <i className="icon icon-send" aria-hidden="true" />
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
