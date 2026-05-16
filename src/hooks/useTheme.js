import { useEffect, useState } from 'react'

export default function useTheme() {
    const [theme, setTheme] = useState(() => {
        try { return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') }
        catch { return 'light' }
    })

    useEffect(() => {
        const root = document.documentElement
        if (theme === 'dark') root.classList.add('dark')
        else root.classList.remove('dark')
        try { localStorage.setItem('theme', theme) } catch { }
    }, [theme])

    return [theme, setTheme]
}
