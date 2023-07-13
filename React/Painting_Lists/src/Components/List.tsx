import { ReactNode } from "react";

export function List({ children }: { children: ReactNode }) {

    return (
        <ul>
            {children}
        </ul>
    );
}