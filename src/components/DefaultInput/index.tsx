import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...props
}: DefaultInputProps) {
  return (
    <>
      {labelText && (
        <label id={id} htmlFor="meuInput">
          {labelText}
        </label>
      )}
      <input className={styles.input} id={id} type={type} {...props} />
    </>
  );
}
