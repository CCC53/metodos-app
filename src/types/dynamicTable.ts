
export interface DynamicTableContent {
    headers: ColumnDef[];
    rows: JSX.Element[];
}

export interface ColumnDef {
    key: string,
    label: string;
}

