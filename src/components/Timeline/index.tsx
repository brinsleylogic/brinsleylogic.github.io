import { For } from "solid-js"
import styles from "./styles.module.css"
import Pill from "../Pill"
import { VsGlobe } from "solid-icons/vs"

export default function ({
    heading,
    site,
    items,
    start,
    end,
    languages,
    tech,
}: Props) {
    return (
        <div>
            <header class="flex items-center gap-2 mb-4 p-0 text-primary-600 dark:text-primary-400">
                {site && (
                    <a
                        href={site}
                        target="_blank"
                        class="text-2xl transition-colors hover:text-primary-400 dark:hover:text-primary-300"
                    >
                        <VsGlobe />
                    </a>
                )}

                <title class="flex font-bold text-lg">{heading}</title>

                <label class="text-sm">
                    {start} - {end ?? "Present"}
                </label>
            </header>

            <div class="ml-8 pl-8 border-l-2 border-primary-400">
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

                <div class="grid gap-4">
                    <div class="flex flex-wrap gap-2">
                        <For each={languages}>
                            {(item) => (
                                <Pill color="var(--primary-500)">{item}</Pill>
                            )}
                        </For>
                    </div>

                    <div class="flex flex-wrap gap-2">
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

    site?: string

    languages?: string[]
    tech?: string[]
}

function Item({ label, description, filled }: ItemProps) {
    return (
        <div
            data-heading={label}
            classList={{
                [styles.item]: true,
                "relative pt-12 pb-4": true,
                "before:absolute before:block before:top-3 before:font-bold before:text-primary-400 dark:before:text-primary-500":
                    true,
                "after:absolute after:block after:w-4 after:h-4 after:top-4 after:-left-[2.55rem] after:rounded-full after:border after:border-primary-400":
                    true,
                "after:bg-primary-400 dark:after:bg-primary-500": filled,
                "after:bg-white dark:after:bg-slate-950": !filled,
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
