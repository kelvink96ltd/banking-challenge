import React from 'react'
import {
    createStyles,
    ThemeIcon,
    Progress,
    Text,
    Group,
    Badge,
    Paper,
} from '@mantine/core'
import { Swimming, Wallet } from 'tabler-icons-react'

const ICON_SIZE = 60

const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        overflow: 'visible',
        padding: theme.spacing.xl,
        paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
    },

    icon: {
        position: 'absolute',
        top: -ICON_SIZE / 3,
        left: `calc(50% - ${ICON_SIZE / 2}px)`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
    },
}))

export default function MonthCard() {
    const { classes } = useStyles()

    return (
        <Paper withBorder className={classes.card} mt="xl">
            <ThemeIcon
                className={classes.icon}
                size={ICON_SIZE}
                radius={ICON_SIZE}
            >
                <Wallet size={34} />
            </ThemeIcon>

            <Text align="center" weight={700} className={classes.title} mb="sm">
                Savings challenge
            </Text>
            <Text color="dimmed" align="center" size="sm">
                32K / week
            </Text>

            <Group position="apart" mt="xs">
                <Text size="sm" color="dimmed">
                    Progress
                </Text>
                <Text size="sm" color="dimmed">
                    62%
                </Text>
            </Group>

            <Progress value={62} mt={5} />

            <Group position="apart" mt="md">
                <Text size="sm">20 / 36k</Text>
                <Badge size="sm">4 days left</Badge>
            </Group>
        </Paper>
    )
}
