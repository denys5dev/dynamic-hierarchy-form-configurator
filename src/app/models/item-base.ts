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
  description: string;
  options: { key: string; value: string }[];
  children?: ItemBase<T>[] ;

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
      description?: string;
      options?: { key: string; value: string }[];
      children?: ItemBase<T>[];
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
    this.description = options.description || '';
    this.options = options.options || [];
    this.children = options.children || [];
  }
}
