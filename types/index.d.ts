import { Buefy } from './buefy';

export default Buefy;

// Import buefy components
import { 
    Dialog,
    ModalProgrammatic,
    LoadingProgrammatic,
    Toast,
    Snackbar,
    Autocomplete,
    Checkbox,
    CheckboxButton,
    Collapse,
    Datepicker,
    Dropdown,
    DropdownItem,
    Field,
    Icon,
    Input,
    Loading,
    Message,
    Modal,
    Notification,
    Pagination,
    Panel,
    Radio,
    RadioButton,
    Select,
    Switch,
    TabItem,
    Table,
    TableColumn,
    Tabs,
    Tag,
    Taglist,
    Taginput,
    Timepicker,
    Tooltip,
    Upload
} from './components';

export {
    Dialog,
    ModalProgrammatic,
    LoadingProgrammatic,
    Toast,
    Snackbar,
} from './components'

// Adds Buefy method signatures to Vue instance (ie this.$dialog)
declare module 'vue/types/vue' {
    interface Vue {
        $dialog: typeof Dialog,
        $loading: typeof LoadingProgrammatic,
        $modal: typeof ModalProgrammatic,
        $snackbar: typeof Snackbar,
        $toast: typeof Toast
    }
}

export const Autocomplete: Autocomplete;
export const Checkbox: Checkbox;
export const CheckboxButton: CheckboxButton;
export const Collapse: Collapse;
export const Datepicker: Datepicker;
export const Dropdown: Dropdown;
export const DropdownItem: DropdownItem;
export const Field: Field;
export const Icon: Icon;
export const Input: Input;
export const Loading: Loading;
export const Message: Message;
export const Modal: Modal;
export const Notification: Notification;
export const Pagination: Pagination;
export const Panel: Panel;
export const Radio: Radio;
export const RadioButton: RadioButton;
export const Select: Select;
export const Switch: Switch;
export const TabItem: TabItem;
export const Table: Table;
export const TableColumn: TableColumn;
export const Tabs: Tabs;
export const Tag: Tag;
export const Taglist: Taglist;
export const Taginput: Taginput;
export const Timepicker: Timepicker;
export const Tooltip: Tooltip;
export const Upload: Upload;
