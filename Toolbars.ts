
interface IToolbarButton {
    name: string;
    subActions?: IToolbarButton[];
    icon?: string;
    btnClass?: string;
    func?: (item: any) => void;
    disabled?: (item: any) => boolean;
    hidden?: (item: any) => boolean;
}