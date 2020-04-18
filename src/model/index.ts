interface CustomEvent extends Event, EventTarget {
	readonly target: any;
	readonly value: string;
}
