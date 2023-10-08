import styles from "./styles.module.css"

export default function ({ color, children }: Props) {
    return (
        <div
            classList={{
                [styles.container]: true,
                [styles.rounded]: true,
                "bg-white dark:bg-slate-950": true,
            }}
            style={{
                color,
                "border-color": color,
            }}
        >
            {children}
        </div>
    )
}

type Props = {
    color: string
    children: string
}
