import React, { useState } from 'react'
import { Anchor, createStyles, Navbar, ScrollArea } from '@mantine/core'
import {
    Settings,
    Logout,
    CreditCard,
    User,
    Home,
    Cash,
} from 'tabler-icons-react'
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef('icon')
    return {
        navbar: {
            backgroundColor: theme.colors[theme.primaryColor][6],
        },

        version: {
            backgroundColor: theme.colors[theme.primaryColor][7],
            color: theme.white,
            fontWeight: 700,
        },

        header: {
            paddingBottom: theme.spacing.md,
            marginBottom: theme.spacing.md * 1.5,
            borderBottom: `1px solid ${theme.colors[theme.primaryColor][7]}`,
        },

        footer: {
            paddingTop: theme.spacing.md,
            marginTop: theme.spacing.md,
            borderTop: `1px solid ${theme.colors[theme.primaryColor][7]}`,
        },

        link: {
            ...theme.fn.focusStyles(),
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: theme.fontSizes.sm,
            color: theme.white,
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: theme.radius.sm,
            fontWeight: 500,

            '&:hover': {
                backgroundColor: theme.colors[theme.primaryColor][5],
                textDecoration: 'none',
            },
        },

        linkIcon: {
            ref: icon,
            color: theme.white,
            opacity: 0.75,
            marginRight: theme.spacing.sm,
        },

        linkActive: {
            '&, &:hover': {
                backgroundColor: theme.colors[theme.primaryColor][7],
                [`& .${icon}`]: {
                    opacity: 0.9,
                },
            },
        },
    }
})

const data = [
    { link: '/home', label: 'Home', icon: Home },
    { link: '', label: 'Accounts', icon: User },
    { link: '/cards', label: 'Cards', icon: CreditCard },
    { link: '', label: 'Payments', icon: Cash },
]

interface SideNavProps {
    p: string
    hiddenBreakpoint: any
    hidden: boolean
    width: { sm: number; lg: number }
}

export default function AppSidenav({
    p,
    hiddenBreakpoint,
    hidden,
    width,
}: SideNavProps) {
    const { classes, cx } = useStyles()
    const [active, setActive] = useState('Billing')

    const links = data.map((item) => (
        <Anchor
            className={cx(classes.link, {
                [classes.linkActive]: item.label === active,
            })}
            component={Link}
            to={item.link}
            key={item.label}
            onClick={() => {
                setActive(item.label)
            }}
        >
            <item.icon className={classes.linkIcon} />
            <span>{item.label}</span>
        </Anchor>
    ))

    return (
        <Navbar
            height={630}
            width={width}
            p={p}
            hidden={hidden}
            hiddenBreakpoint={hiddenBreakpoint}
            className={classes.navbar}
        >
            <Navbar.Section grow component={ScrollArea}>
                {links}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <a
                    href="#"
                    className={classes.link}
                    onClick={(event) => event.preventDefault()}
                >
                    <Settings className={classes.linkIcon} />
                    <span>Settings</span>
                </a>

                <a
                    href="#"
                    className={classes.link}
                    onClick={(event) => event.preventDefault()}
                >
                    <Logout className={classes.linkIcon} />
                    <span>Logout</span>
                </a>
            </Navbar.Section>
        </Navbar>
    )
}
