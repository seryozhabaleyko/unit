import { InputProps } from '../Input';
import { InputLabelProps } from '../InputLabel';

export interface TextFieldProps extends InputProps {
    label?: string
    LabelProps?: InputLabelProps
}
