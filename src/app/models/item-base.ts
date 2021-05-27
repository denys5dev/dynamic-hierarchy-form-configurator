export class ItemBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  errorMessage: string;
  validationMessage: string;
  pattern: any;
  order: number;
  controlType: string;
  placeholder: string;
  type: string;
  options: { key: string; value: string }[];

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      errorMessage?: string;
      validationMessage?: string;
      pattern?: any;
      placeholder?: string;
      order?: number;
      controlType?: string;
      type?: string;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.errorMessage = options.errorMessage || '';
    this.validationMessage = options.validationMessage || '';
    this.pattern = options.pattern;
    this.placeholder = options.placeholder || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
  }
}
