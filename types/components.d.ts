import _Vue, { ComponentOptions } from "vue";
import {
    DialogConfig,
    PromptDialogConfig,
    ModalConfig,
    SnackbarConfig,
    ToastConfig
} from './config';

export declare const Dialog: {
    alert: (params: DialogConfig | string) => any;
    confirm: (params: DialogConfig) => any;
    prompt: (params: PromptDialogConfig) => any;
}

export declare const LoadingProgrammatic: {
    open: () => { close: () => any };
}

export declare const ModalProgrammatic: {
    open: (params: ModalConfig | string) => any;
  }

export declare const Snackbar: {
    open: (params: SnackbarConfig | string) => void;
}

export declare const Toast: {
    open: (params: ToastConfig | string) => any;
}

export interface Autocomplete extends _Vue {}
export interface Checkbox extends _Vue {}
export interface CheckboxButton extends _Vue {}
export interface Collapse extends _Vue {}
export interface Datepicker extends _Vue {}
export interface Dropdown extends _Vue {}
export interface DropdownItem extends _Vue {}
export interface Field extends _Vue {}
export interface Icon extends _Vue {}
export interface Input extends _Vue {}
export interface Loading extends _Vue {}
export interface Message extends _Vue {}
export interface Modal extends _Vue {}
export interface Notification extends _Vue {}
export interface Pagination extends _Vue {}
export interface Panel extends _Vue {}
export interface Radio extends _Vue {}
export interface RadioButton extends _Vue {}
export interface Select extends _Vue {}
export interface Switch extends _Vue {}
export interface TabItem extends _Vue {}
export interface Table extends _Vue {}
export interface TableColumn extends _Vue {}
export interface Tabs extends _Vue {}
export interface Tag extends _Vue {}
export interface Taglist extends _Vue {}
export interface Taginput extends _Vue {}
export interface Timepicker extends _Vue {}
export interface Tooltip extends _Vue {}
export interface Upload extends _Vue {}
