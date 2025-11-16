import styles from "./styles.module.css";

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: "default" | "red" | "success";
} & React.ComponentProps<"button">;

export function DefaultButton({
  icon,
  color = "default",
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
