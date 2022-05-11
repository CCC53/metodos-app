import { ComponentProps } from "react";
import { Input } from "reactstrap";
import { LagrangeSolutionRes } from './iterations';

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

export interface NavigationItem {
    label: string;
    url: string;
}

export interface GraphProps {
    data: LagrangeSolutionRes;
    title: string;
}