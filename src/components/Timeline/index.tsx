import { For } from "solid-js"
import styles from "./styles.module.css"
import Pill from "../Pill"

export default function ({
    heading,
    items,
    start,
    end,
    languages,
    tech,
}: Props) {
    return (
        <div class={styles.container}>
            <header class={styles.header}>{heading}</header>
            <label class={styles.dates}>
                {start} - {end ?? "Present"}
            </label>

            <div class={styles.timeline}>
                <For each={items}>
                    {(item, i) => {
                        const filled = !end && i() === 0

                        return (
                            <Item
                                {...item}
                                filled={filled}
                            />
                        )
                    }}
                </For>

                <div class={styles.gap}>
                    <div
                        classList={{
                            [styles.pillContainer]: true,
                            [styles.padded]: true,
                        }}
                    >
                        <For each={languages}>
                            {(item) => (
                                <Pill color="var(--primary-500)">{item}</Pill>
                            )}
                        </For>
                    </div>

                    <div
                        classList={{
                            [styles.pillContainer]: true,
                            [styles.padded]: true,
                        }}
                    >
                        <For each={tech}>
                            {(item) => (
                                <Pill color="var(--secondary-500)">{item}</Pill>
                            )}
                        </For>
                    </div>
                </div>
            </div>
        </div>
    )
}

type Props = {
    heading: string
    items: Pick<ItemProps, "label" | "description">[]

    start: number
    end?: number

    languages?: string[]
    tech?: string[]
}

function Item({ label, description, filled }: ItemProps) {
    return (
        <div
            data-heading={label}
            classList={{
                [styles.item]: true,
                [styles.filled]: filled,
            }}
        >
            <label>{description}</label>
        </div>
    )
}

type ItemProps = {
    label: string
    description: string
    filled: boolean
}
