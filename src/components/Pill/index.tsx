import tinycolor from "tinycolor2"
import styles from "./styles.module.css"

export default function ({ color, children }: Props) {
    const backgroundColor = tinycolor(color).setAlpha(0.05).toRgbString()

    return (
        <div
            classList={{ [styles.container]: true, [styles.rounded]: true }}
            style={{
                color,
                "border-color": color,
                "background-color": backgroundColor,
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
