import { ComponentProps } from "react";
import { Input } from "reactstrap";

export interface DynamicTableContent {
    headers: ColumnDef[];
    rows: JSX.Element[];
}

export interface ColumnDef {
    key: string,
    label: string;
}

export interface DynamicFormContent {
    method: string;
    inputs: DynamicInput[];
    returnData: (data: any) => void;
    cleanData: () => void;
    setLoading: (loading: boolean) => void;
}

export interface DynamicInput {
    name: string;
    label: string;
    type: ComponentProps<typeof Input>['type'];
}