import * as React from "react";
import Link from "next/link";
import { NotepadText } from "lucide-react";
import { MainNav } from "./main-nav";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full bg-neutral-900 text-white">
			<div className="container max-w-screen-2xl h-14 flex items-center justify-between">
				<Link href="/" className="flex items-center space-x-2">
					<NotepadText className="size-7 shrink-0" />
					<h1 className="font-bold tracking-tight">simplynote</h1>
				</Link>
				<MainNav />
			</div>
		</header>
	);
}
