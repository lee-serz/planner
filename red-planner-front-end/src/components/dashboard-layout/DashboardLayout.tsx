import type { PropsWithChildren } from 'react'

import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<div className='flex'>
			<Sidebar />

			<main className='p-5 max-h-screen relative grow'>
				<Header />
				{children}
			</main>
		</div>
	)
}
