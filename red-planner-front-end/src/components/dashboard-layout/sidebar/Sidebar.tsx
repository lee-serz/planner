'use client'

import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/color.constants'

import { LogoutButton } from './LogoutButton'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

export function Sidebar() {
	return (
		<aside className='min-h-screen border-r border-r-border bg-sidebar flex flex-col justify-between md-max:pt-5 '>
			<div>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-layout border-b border-b-border md-max:hidden'
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={38}
					/>
					<span className='text-2xl font-bold relative'>
						ProjectFlow
						<span className='absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
							beta
						</span>
					</span>
				</Link>
				<div className='flex flex-col gap-10'>
					<div>
						{MENU.map(item => (
							<MenuItem
								item={item}
								key={item.link}
							/>
						))}
					</div>
					<div className='flex justify-center'>
						<LogoutButton />
					</div>
				</div>
			</div>
		</aside>
	)
}
