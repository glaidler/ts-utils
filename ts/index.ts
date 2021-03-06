namespace tsUtils {
    export interface IToolbarButton {
        name: string;
        subActions?: IToolbarButton[];
        icon?: string;
        btnClass?: string;
        func?: (item: any) => void;
        disabled?: (item: any) => boolean;
        hidden?: (item: any) => boolean;
    }
    export class ErrorContainer {
        constructor() {
            this.clear();
            this.failed = false;
        }
        failed: boolean;
        addFatalResponse(r: any) {
            var msg = (r.data && r.data.responseStatus) ? r.data.responseStatus.message : r.statusText || r;
            this.failed = true;
            this.fatals.push(msg);
        };

        fatals: string[];
        warnings: string[];

        clear() {
            this.fatals = [];
            this.warnings = [];
        }
    }
}
