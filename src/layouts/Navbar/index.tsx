import { For } from "solid-js"
import styles from "./styles.module.css"

const config: Omit<ItemProps, "active">[] = [
    {
        link: "/",
        label: "Home",
    },
    {
        link: "/expertise",
        label: "Expertise",
    },
    {
        link: "/resume",
        label: "Resumé",
    },
]

export default function ({ route }: Props) {
    const currentRoute = route === "/" ? route : route.replace(/\/$/, "")

    return (
        <div class={styles.container}>
            <For each={config}>
                {(item: (typeof config)[number]) => (
                    <Item
                        {...item}
                        active={item.link === currentRoute}
                    />
                )}
            </For>
        </div>
    )
}

type Props = {
    route: string
}

function Item({ link, label, active }: ItemProps) {
    return (
        <div
            classList={{
                [styles.item]: true,
                [styles.active]: active,
            }}
        >
            <a href={link}>{label}</a>
        </div>
    )
}

type ItemProps = {
    label: string
    link: string
    active: boolean
}
